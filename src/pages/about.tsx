import React from 'react';
import Layout from '../components/Layout';
import { PageProps } from 'gatsby';
import SEO from '../components/Seo';

export default function About({ path }: PageProps) {
    return (
        <Layout path={path} centered>
            <SEO/>
            <h2>Coming soon</h2>
        </Layout>
    );
}
