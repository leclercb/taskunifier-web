import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Affix, Button, Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import Icon from 'components/common/Icon';
import Translations from 'constants/Translations';

import 'components/layout/AppLayoutEditions.css';
import 'components/layout/AppLayoutLink.css';
import 'components/layout/AppLayoutMain.css';

function AppLayout({ children }) {
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setVisible(!visible);
    };

    const createMenu = mode => (
        <Menu mode={mode} selectedKeys={[]} theme="dark">
            <Menu.Item>
                <Icon icon="home">
                    <Link to="/" onClick={toggleMenu}>{translations.base_home}</Link>
                </Icon>
            </Menu.Item>
            <Menu.Item>
                <Icon icon="desktop">
                    <Link to="/app" onClick={toggleMenu}>{translations.base_app}</Link>
                </Icon>
            </Menu.Item>
            <Menu.Item>
                <Icon icon="question-circle">
                    <Link to="/help" onClick={toggleMenu}>{translations.base_help}</Link>
                </Icon>
            </Menu.Item>
        </Menu>
    );

    const gitHubStars = (size, style) => (
        <div style={{
            position: 'absolute',
            ...style
        }}>
            <a
                className="github-button"
                href="https://github.com/leclercb/taskunifier-app"
                data-size={size}
                data-show-count="true"
                aria-label="Star leclercb/taskunifier-app on GitHub">
                Star
            </a>
        </div>
    );

    const translations = Translations;

    return (
        <React.Fragment>
            <CookieConsent buttonStyle={{ background: '#0e67c4', color: '#ffffff', fontWeight: 'bold' }}>
                <Icon icon="cookie" text="This website uses cookies to enhance the user experience." />
            </CookieConsent>
            <MediaQuery maxWidth={749}>
                {gitHubStars('small', { top: 10, left: 10 })}
                <Affix
                    offsetTop={30}
                    style={{
                        position: 'absolute',
                        right: 20
                    }}>
                    <Button
                        type="primary"
                        onClick={toggleMenu}
                        style={{
                            backgroundColor: '#535353'
                        }}>
                        {visible ? (<MenuFoldOutlined />) : (<MenuUnfoldOutlined />)}
                    </Button>
                </Affix>
                {visible && (
                    <div style={{
                        position: 'fixed',
                        zIndex: 1000,
                        top: 70,
                        right: 20
                    }}>
                        {createMenu('inline')}
                    </div>
                )}
            </MediaQuery>
            <Layout style={{ minHeight: '100%' }}>
                <MediaQuery minWidth={750}>
                    {gitHubStars('large', { top: 9, right: 10 })}
                    <Layout.Header style={{ textAlign: 'center' }}>
                        {createMenu('horizontal')}
                    </Layout.Header>
                </MediaQuery>
                <Layout.Content>
                    <Block color="red">
                        <BlockContent align="center" style={{ fontWeight: 'bold' }}>
                            TaskUnifier is not under development anymore.<br />
                            TaskUnifier Cloud will still be available until 30/06/2023.<br />
                            We suggest users to migrate their tasks to another provider.
                        </BlockContent>
                    </Block>
                    <Block color="white">
                        <BlockContent align="left">
                            <div style={{ width: '100%', position: 'relative' }}>
                                <MediaQuery minWidth={750}>
                                    <img
                                        src="resources/images/logo.png"
                                        alt="Logo"
                                        style={{
                                            position: 'absolute',
                                            height: 150
                                        }} />
                                </MediaQuery>

                                <MediaQuery maxWidth={749}>
                                    <div style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        marginBottom: 40
                                    }}>
                                        <img
                                            src="resources/images/logo.png"
                                            alt="Logo"
                                            style={{ height: 80 }} />
                                    </div>
                                </MediaQuery>

                                <div style={{
                                    width: '100%',
                                    minHeight: 120,
                                    textAlign: 'center',
                                    paddingTop: 30
                                }}>
                                    <h1 className="title">TaskUnifier</h1>
                                </div>
                            </div>
                        </BlockContent>
                    </Block>
                </Layout.Content>
                <Layout.Content>
                    {children}
                </Layout.Content>
                <Layout.Footer>
                    <Block color="white">
                        <BlockContent>
                            {translations.base_copyright}
                            <br />
                            <Link to="/about">{translations.base_about_us}</Link>
                            <span> - </span>
                            <Link to="/legal/privatepolicy">{translations.base_privatepolicy}</Link>
                            <span> - </span>
                            <Link to="/legal/cookiepolicy">{translations.base_cookiepolicy}</Link>
                            <span> - </span>
                            <Link to="/legal/termsofservice">{translations.base_termsofservice}</Link>
                        </BlockContent>
                    </Block>
                </Layout.Footer>
            </Layout>
        </React.Fragment>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppLayout;