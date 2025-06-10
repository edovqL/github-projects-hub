import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { PaginateRequestType } from '@/domains/Response.ts';
import githubService from '@/services/githubService';

export const useGithubByUsernameQuery = (params: PaginateRequestType, enabled = false) => {
    const query = useQuery({
        queryKey: ['githubService.getByUsername', params],
        queryFn: async () => await githubService.getByUsername(params),
        enabled,
    });

    useEffect(() => {
        if (query.isError) {
            const error = query.error;
            let errorMessage = 'Oops, something went wrong!';

            if (error && 'isAxiosError' in error) {
                const axiosError = error as import('axios').AxiosError;

                const data = axiosError.response?.data as {
                    message?: string;
                };

                if (data?.message) {
                    errorMessage = String(data.message).slice(0, 44);
                }
            }

            toast.error(errorMessage, {
                position: 'top-right',
                id: 'githubService.getByUsername',
            });
        }
    }, [query.isError, toast.error]);

    return query;
};

export const useGithubReposByUsernamesQuery = (usernames: string[], enabled = false) => {
    const query = useQuery({
        queryKey: ['githubService.getReposByUsernames', usernames],
        queryFn: async () => await githubService.getReposByUsernames(usernames),
        enabled,
    });

    useEffect(() => {
        if (query.isError) {
            const error = query.error;
            let errorMessage = 'Oops, something went wrong!';

            if (error && 'isAxiosError' in error) {
                const axiosError = error as import('axios').AxiosError;

                const data = axiosError.response?.data as {
                    message?: string;
                };

                if (data?.message) {
                    errorMessage = String(data.message).slice(0, 44);
                }
            }

            toast.error(errorMessage, {
                position: 'top-right',
                id: 'githubService.getReposByUsernames',
            });
        }
    }, [query.isError, toast]);

    return query;
};

export const useReadmeByUsernameAndRepoQuery = (params: { username: string; repo: string }, enabled = false) => {
    const query = useQuery({
        queryKey: ['githubService.getReadmeByUsernameAndRepo', params],
        queryFn: async () => await githubService.getReadmeByUsernameAndRepo(params),
        enabled,
    });

    useEffect(() => {
        if (query.isError) {
            const error = query.error;
            let errorMessage = 'Oops, something went wrong!';

            if (error && 'isAxiosError' in error) {
                const axiosError = error as import('axios').AxiosError;

                const data = axiosError.response?.data as {
                    message?: string;
                };

                if (data?.message) {
                    errorMessage = String(data.message).slice(0, 44);
                }
            }

            toast.error(errorMessage, {
                position: 'top-right',
                id: 'githubService.getReposByUsernames',
            });
        }
    }, [query.isError, toast]);

    return query;
};
