import React from 'react';
import { Col, Row } from 'antd';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import BlockTitle from 'components/common/BlockTitle';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import FeatureElement from 'components/home/FeatureElement';
import Translations from 'constants/Translations';

function Home() {
    const translations = Translations;

    return (
        <React.Fragment>
            <Block color="white">
                <BlockContent>
                    <h2 className="title">Task Management Application</h2>
                    <h3 className="title">
                        Organize your tasks, notes and calendar with ease.
                    </h3>
                </BlockContent>
            </Block>
            <Block color="white">
                <BlockContent>
                    <ImageGallery
                        autoPlay={false}
                        showPlayButton={false}
                        showNav={true}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        slideInterval={5000}
                        items={['01', '02', '03', '04', '05', '06'].map(item => ({
                            original: `/resources/images/gallery/screenshot_${item}.png`
                        }))} />
                </BlockContent>
            </Block>
            <Block color="blue">
                <BlockTitle>Features</BlockTitle>
                <BlockContent>
                    <Row gutter={40}>
                        <FeatureElement number={2} />
                        <FeatureElement number={3} />
                        <Col xs={0} sm={24} style={{ marginTop: 50 }} />
                        <FeatureElement number={5} />
                        <FeatureElement number={6} />
                        <Col xs={0} sm={24} style={{ marginTop: 50 }} />
                        <FeatureElement number={9} />
                        <FeatureElement number={4} />
                        <Col xs={0} sm={24} style={{ marginTop: 50 }} />
                        <FeatureElement number={13} />
                        <FeatureElement number={12} />
                        <Col xs={0} sm={24} style={{ marginTop: 50 }} />
                        <FeatureElement number={10} />
                        <FeatureElement number={8} />
                    </Row>
                </BlockContent>
            </Block>
            <Block color="white">
                <BlockTitle>Versions</BlockTitle>
                <BlockContent>
                    <Row gutter={40}>
                        <Col xs={24} sm={12}>
                            <Element
                                image={(<Icon icon="desktop" />)}
                                title={translations['home_version_app_title']}
                                content={translations['home_version_app_text']} />
                            <Link to="/app" className="main-link bright big" style={{ margin: 40 }}>
                                More info
                            </Link>
                        </Col>
                    </Row>
                </BlockContent>
            </Block>
        </React.Fragment>
    );
}

export default Home;