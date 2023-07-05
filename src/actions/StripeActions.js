import axios from 'axios';
import { getConfig } from 'config/Config';
import { showError } from 'utils/ErrorUtils';

export function getPlans(productId) {
    return async () => {
        try {
            const result = await axios({
                method: 'GET',
                url: `${getConfig().apiUrl}/v1/stripe/products/${productId}/plans`,
                responseType: 'json'
            });

            return result.data;
        } catch (error) {
            showError('Plans retrieval failed', error);
            throw error;
        }
    };
}

export function processSku(sku, email) {
    return async () => {
        try {
            const result = await axios({
                method: 'POST',
                url: `${getConfig().apiUrl}/v1/stripe/skus/process`,
                responseType: 'json',
                data: {
                    sku,
                    email
                }
            });

            return result.data;
        } catch (error) {
            showError('SKU process failed', error);
            throw error;
        }
    };
}