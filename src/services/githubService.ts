import { GithubReadmeByUsernameAndRepoType, GithubRepositoriesByUsernameType, GithubUsersByUsernameType } from '@/domains/Github';
import { PaginateRequestType } from '@/domains/Response';

import httpClient from './interceptors/httpClient';

const getByUsername = async ({ search, limit = 10, ...params }: PaginateRequestType): Promise<GithubUsersByUsernameType> => {
    try {
        const response = await httpClient
            .get<GithubUsersByUsernameType>('/search/users', {
                params: { ...params, per_page: limit, q: search },
            })
            .then((res) => res.data);

        return response;
    } catch (error: unknown) {
        throw error ?? new Error(`${error}`);
    }
};

const getReposByUsernames = async (usernames: string[]): Promise<{ username: string; repositories: GithubRepositoriesByUsernameType }[]> => {
    try {
        const results: { username: string; repositories: GithubRepositoriesByUsernameType }[] = [];
        let errorOccurred = false;

        for (const username of usernames) {
            if (errorOccurred) {
                continue; // Skip the remaining iterations if an error has occurred
            }

            try {
                const repos = await httpClient.get<GithubRepositoriesByUsernameType>(`/users/${username}/repos`).then((res) => res.data);

                results.push({ username, repositories: repos });
            } catch (error) {
                errorOccurred = true;
                throw error ?? new Error(`${error}`);
            }
        }
        return results;
    } catch (error: unknown) {
        throw error ?? new Error(`${error}`);
    }
};

const getReadmeByUsernameAndRepo = async ({ username, repo }: { username: string; repo: string }): Promise<GithubReadmeByUsernameAndRepoType> => {
    try {
        const response = await httpClient.get<GithubReadmeByUsernameAndRepoType>(`/repos/${username}/${repo}/readme`).then((res) => res.data);
        const downloadUrl = response?.download_url;

        if (downloadUrl) {
            const downloadResponse = await httpClient.get(downloadUrl).then((res) => res.data);
            response.download_content = downloadResponse;
        }
        return response;
    } catch (error: unknown) {
        throw error ?? new Error(`${error}`);
    }
};

export default { getByUsername, getReposByUsernames, getReadmeByUsernameAndRepo };
