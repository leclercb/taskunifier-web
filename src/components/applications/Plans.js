import React, { useEffect, useState } from 'react';
import { Row, Spin } from 'antd';
import PropTypes from 'prop-types';
import Plan from 'components/applications/Plan';
import { getConfig } from 'config/Config';
import { useStripeApi } from 'hooks/UseStripeApi';

function Plans({ onSelectPlan }) {
    const stripeApi = useStripeApi();
    const [plans, setPlans] = useState([]);

    const [busy, setBusy] = useState(false);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                setBusy(true);
                const plans = await stripeApi.getPlans(getConfig().stripe.productId);
                setPlans(plans);
            } finally {
                setBusy(false);
            }
        };

        fetchPlans();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const freePlan = {
        id: 'free',
        nickname: 'Free',
        amount: 0
    };

    return (
        <Spin spinning={busy}>
            <Row type="flex" gutter={20}>
                {[freePlan, ...plans].sort((a, b) => a.nickname.localeCompare(b.nickname)).map(plan => (
                    <Plan key={plan.id} plan={plan} onSelectPlan={onSelectPlan} />
                ))}
            </Row>
        </Spin>
    );
}

Plans.propTypes = {
    onSelectPlan: PropTypes.func
};

export default Plans;