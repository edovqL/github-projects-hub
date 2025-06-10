import React, { useEffect, useState } from 'react';

import { isEmpty } from '@/helpers/validation';
import useQueryParams from '@/hooks/useQueryParams';

import { useGithubByUsernameQuery, useGithubReposByUsernamesQuery } from '../hooks';
import { GithubContext } from './context';
import { GithubState } from './types';

const initialState: GithubState = {
    users: [],
    repositories: [],
};

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
    const { getQueryParams } = useQueryParams();

    const { search, limit } = getQueryParams();

    const [state, setState] = useState<GithubState>(initialState);

    const update = (data: Partial<GithubState>) => setState((prev) => ({ ...prev, ...data }));

    const {
        data: users,
        refetch: refetchUsers,
        isLoading: isLoadingUsers,
    } = useGithubByUsernameQuery({
        search,
        limit,
    });

    const { data: repos, isLoading: isLoadingRepos } = useGithubReposByUsernamesQuery(
        users?.items?.map((user) => user.login) || [],
        Boolean(Number(limit) >= Number(users?.items?.length))
    );

    useEffect(() => {
        if (!isEmpty(users) && !isEmpty(repos)) {
            update({
                users: users?.items ?? [],
                repositories: repos ?? [],
            });
        }
    }, [users, repos]);

    useEffect(() => {
        if (isEmpty(search)) {
            update({
                users: [],
                repositories: [],
            });
        }
    }, [search]);

    return (
        <GithubContext.Provider
            value={{
                state,
                isLoading: isLoadingUsers || isLoadingRepos,
                onRefetchUsers: refetchUsers,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};
