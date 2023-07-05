import React, { useEffect, useState } from 'react';
import { Col, Descriptions, Row, Spin } from 'antd';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import Translations from 'constants/Translations';
import { useActuatorApi } from 'hooks/UseActuatorApi';

function Maintenance() {
    const actuatorApi = useActuatorApi();

    const [maintenanceStatus, setMaintenanceStatus] = useState(null);

    useEffect(() => {
        const getMaintenanceStatus = async () => {
            const maintenanceStatus = await actuatorApi.getMaintenanceStatus();
            setMaintenanceStatus(maintenanceStatus);
        };

        getMaintenanceStatus();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const translations = Translations;

    return (
        <React.Fragment>
            <Block color="white">
                <BlockContent>
                    <Row gutter={40}>
                        <Col xs={24} sm={12}>
                            {!maintenanceStatus && (
                                <Element
                                    head={true}
                                    title={translations.maintenance_title}
                                    content={(<Spin tip="Loading" />)} />
                            )}
                            {maintenanceStatus && !maintenanceStatus.maintenance && (
                                <Element
                                    head={true}
                                    title={translations.maintenance_title}
                                    content={translations.maintenance_text_none} />
                            )}
                            {maintenanceStatus && maintenanceStatus.maintenance && (
                                <Element
                                    head={true}
                                    title={translations.maintenance_title}
                                    content={`${translations.maintenance_text_ongoing}`} />
                            )}
                        </Col>
                        <Col xs={24} sm={12}>
                            <Element image={<Icon icon="wrench" />} />
                        </Col>
                    </Row>
                </BlockContent>
            </Block>
            {maintenanceStatus && maintenanceStatus.maintenance && (
                <Block color="white">
                    <BlockContent style={{ textAlign: 'left' }}>
                        <Descriptions column={1} bordered>
                            <Descriptions.Item label="Start Date">{maintenanceStatus.maintenance.startDate}</Descriptions.Item>
                            <Descriptions.Item label="End Date">{maintenanceStatus.maintenance.endDate}</Descriptions.Item>
                            <Descriptions.Item label="Description">{maintenanceStatus.maintenance.description}</Descriptions.Item>
                        </Descriptions>
                    </BlockContent>
                </Block>
            )}
        </React.Fragment>
    );
}

export default Maintenance;