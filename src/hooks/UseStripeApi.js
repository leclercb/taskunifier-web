import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getPlans, processSku } from 'actions/StripeActions';

export function useStripeApi() {
    const dispatch = useDispatch();

    const getPlansCallback = useCallback(
        productId => dispatch(getPlans(productId)),
        [dispatch]
    );

    const processSkuCallback = useCallback(
        (sku, email) => dispatch(processSku(sku, email)),
        [dispatch]
    );

    return {
        getPlans: getPlansCallback,
        processSku: processSkuCallback
    };
}