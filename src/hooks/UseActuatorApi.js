import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getMaintenanceStatus } from 'actions/ActuatorActions';

export function useActuatorApi() {
    const dispatch = useDispatch();

    const getMaintenanceStatusCallback = useCallback(
        () => dispatch(getMaintenanceStatus()),
        [dispatch]
    );

    return {
        getMaintenanceStatus: getMaintenanceStatusCallback
    };
}