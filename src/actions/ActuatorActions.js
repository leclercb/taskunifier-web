import axios from 'axios';
import { getConfig } from 'config/Config';
import { showError } from 'utils/ErrorUtils';

export function getMaintenanceStatus() {
    return async () => {
        try {
            const result = await axios({
                method: 'GET',
                url: `${getConfig().apiUrl}/v1/actuators/maintenance`,
                params: {
                    skipMaintenance: true
                },
                responseType: 'json'
            });

            return result.data;
        } catch (error) {
            showError('Maintenance status retrieval failed', error);
            throw error;
        }
    };
}