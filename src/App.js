import React from 'react';
import { Spin } from 'antd';
import qs from 'qs';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import AppLayout from 'components/layout/AppLayout';

import 'App.css';
import 'font-awesome.js';
import 'react-image-gallery/styles/css/image-gallery.css';

const AboutUs = React.lazy(() => import('components/aboutus/AboutUs'));
const TaskUnifierCloud = React.lazy(() => import('components/applications/TaskUnifierCloud'));
const TaskUnifierApp = React.lazy(() => import('components/applications/TaskUnifierApp'));
const Code = React.lazy(() => import('components/code/Code'));
const ContactUs = React.lazy(() => import('components/contactus/ContactUs'));
const Help = React.lazy(() => import('components/help/Help'));
const Home = React.lazy(() => import('components/home/Home'));
const CookiePolicy = React.lazy(() => import('components/legal/CookiePolicy'));
const PrivatePolicy = React.lazy(() => import('components/legal/PrivatePolicy'));
const TermsOfService = React.lazy(() => import('components/legal/TermsOfService'));
const Maintenance = React.lazy(() => import('components/maintenance/Maintenance'));
const PageNotFound = React.lazy(() => import('components/pagenotfound/PageNotFound'));
const ThankYou = React.lazy(() => import('components/thankyou/ThankYou'));

function App() {
    const wrap = (element) => {
        return (
            <AppLayout>
                <React.Suspense fallback={(
                    <Block color="white">
                        <BlockContent>
                            <Spin size="large" />
                        </BlockContent>
                    </Block>
                )}>
                    {element}
                </React.Suspense>
            </AppLayout>
        );
    };

    return (
        <HashRouter>
            <Switch>
                <Route
                    path="/"
                    exact={true}
                    render={({ location }) => {
                        const query = qs.parse(location.search.substr(1));

                        if (query.code) {
                            return wrap(
                                <Code code={query.code} />
                            );
                        }

                        return wrap(<Home />);
                    }} />
                <Route
                    path="/cloud"
                    exact={true}
                    render={() => wrap(<TaskUnifierCloud />)} />
                <Route
                    path="/app"
                    exact={true}
                    render={() => wrap(<TaskUnifierApp />, null)} />
                <Route
                    path="/thankyou"
                    exact={true}
                    render={({ location }) => {
                        const query = qs.parse(location.search.substr(1));

                        return wrap(
                            <ThankYou trial={query.trial === 'true'} />
                        );
                    }} />
                <Route
                    path="/about"
                    exact={true}
                    render={() => wrap(<AboutUs />)} />
                <Route
                    path="/contact"
                    exact={true}
                    render={() => wrap(<ContactUs />)} />
                <Route
                    path="/help"
                    exact={true}
                    render={() => wrap(<Help />)} />
                <Route
                    path="/legal/privatepolicy"
                    exact={true}
                    render={() => wrap(<PrivatePolicy />)} />
                <Route
                    path="/legal/cookiepolicy"
                    exact={true}
                    render={() => wrap(<CookiePolicy />)} />
                <Route
                    path="/legal/termsofservice"
                    exact={true}
                    render={() => wrap(<TermsOfService />)} />
                <Route
                    path="/maintenance"
                    exact={true}
                    render={() => wrap(<Maintenance />)} />
                <Route
                    path="/code"
                    exact={true}
                    render={({ location }) => {
                        const query = qs.parse(location.search.substr(1));

                        return wrap(
                            <Code code={query.code} />
                        );
                    }} />
                <Route
                    render={() => wrap(<PageNotFound />)} />
            </Switch>
        </HashRouter>
    );
}

export default App;