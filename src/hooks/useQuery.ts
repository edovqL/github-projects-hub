import { useCallback, useEffect, useMemo, useState } from 'react';

const idleFunc = () => {};

const defaultConfig = {
    onSuccess: idleFunc,
    onError: idleFunc,
};

const useQuery = <T>(
    key: string,
    fn: () => Promise<T>,
    config: {
        onSuccess: (data: T) => void;
        onError: (error: Error | string) => void;
    } = defaultConfig
) => {
    const [state, setState] = useState({
        data: null as T | null,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: '',
    });

    const { onSuccess, onError } = config;

    const runQuery = useCallback(() => {
        if (!fn || typeof fn !== 'function') return;

        setState((s) => ({ ...s, isLoading: true }));

        fn()
            .then((data: T) => {
                setState({
                    data,
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    error: '',
                });
                onSuccess(data);
            })
            .catch((error) => {
                setState({
                    data: null,
                    isLoading: false,
                    isSuccess: false,
                    isError: true,
                    error: error.message || 'Failed to fetch',
                });
                onError(error);
            });
    }, [fn, onSuccess, onError]);

    const memoizedState = useMemo(() => ({ ...state }), [state]);

    useEffect(() => {
        runQuery();
    }, [key]);

    return { ...memoizedState, refetch: runQuery };
};

export default useQuery;
