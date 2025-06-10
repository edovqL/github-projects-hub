export interface GithubState {
    users: Record<string, unknown>[];
    repositories: Record<string, unknown>[];
}

export interface GithubContextProps {
    state: GithubState;

    isLoading: boolean;

    onRefetchUsers: () => void;
}
