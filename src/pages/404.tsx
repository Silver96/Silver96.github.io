import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = () => (
    <Layout centered>
        <SEO title="Not found"/>
        <div className="relative">
            <h1 className="not-found">404</h1>
            <h2 className="text-4xl mb-4">I guess there's still room for improvement</h2>
            <p>If you feel like this page should be here (but apparently isn't) reach out to me :)</p>
        </div>
    </Layout>
);

export default NotFoundPage;
