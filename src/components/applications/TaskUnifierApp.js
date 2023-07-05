import React, { useEffect, useState } from 'react';
import { Col, Row, Spin } from 'antd';
import { getDownloadLinks } from 'actions/ReleaseActions';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import BlockTitle from 'components/common/BlockTitle';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import Editions from 'components/editions/Editions';
import Translations from 'constants/Translations';
import { useReleaseApi } from 'hooks/UseReleaseApi';

function TaskUnifierApp() {
    const releaseApi = useReleaseApi();

    const [busy1, setBusy1] = useState(false);
    const [release, setRelease] = useState(null);

    useEffect(() => {
        const setLatestRelease = async () => {
            try {
                setBusy1(true);
                const release = await releaseApi.retrieveLatestRelease();
                setRelease(release);
            } finally {
                setBusy1(false);
            }
        };

        setLatestRelease();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const links = getDownloadLinks(release);
    const translations = Translations;

    return (
        <React.Fragment>
            <Block color="white">
                <BlockContent>
                    <Row gutter={40}>
                        <Col xs={24} sm={12}>
                            <Element
                                head={true}
                                title={translations.app_title}
                                content={translations.app_text} />
                        </Col>
                        <Col xs={24} sm={12}>
                            <Element image={<Icon icon="desktop" />} />
                        </Col>
                    </Row>
                </BlockContent>
            </Block>
            <Spin spinning={busy1}>
                <Block color="blue">
                    <BlockTitle>{translations.base_download}</BlockTitle>
                    <BlockContent align="left">
                        <Row gutter={40}>
                            <Col xs={24} sm={12}>
                                <Element
                                    title={(
                                        <React.Fragment>
                                            {translations.app_latest_version}: <b>{release ? release.name : ''}</b>
                                        </React.Fragment>
                                    )}
                                    content={(
                                        <ul>
                                            {links.map(link => (
                                                <li key={link.id} style={{ margin: 8 }}>
                                                    For <a href={link.url}><b>{link.label}</b></a>
                                                </li>
                                            ))}
                                        </ul>
                                    )} />
                            </Col>
                            <Col xs={24} sm={12}>
                                <Element image={<Icon icon="download" />} />
                            </Col>
                        </Row>
                    </BlockContent>
                </Block>
            </Spin>
            <Block color="white">
                <BlockContent>
                    <Editions />
                </BlockContent>
            </Block>
        </React.Fragment>
    );
}

export default TaskUnifierApp;