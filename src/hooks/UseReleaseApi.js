import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { retrieveLatestRelease } from 'actions/ReleaseActions';

export function useReleaseApi() {
    const dispatch = useDispatch();

    const retrieveLatestReleaseCallback = useCallback(
        () => dispatch(retrieveLatestRelease()),
        [dispatch]
    );

    return {
        retrieveLatestRelease: retrieveLatestReleaseCallback
    };
}