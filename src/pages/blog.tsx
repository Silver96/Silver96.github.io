import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { PageProps } from 'gatsby';

export default function Blog({path}: PageProps) {
    return (
        <Layout path={path}>
            <SEO/>
            <h2>Coming soon</h2>
        </Layout>
    );
}
