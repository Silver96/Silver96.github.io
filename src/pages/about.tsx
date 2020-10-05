import React from 'react';
import Layout from '../components/Layout';
import { PageProps } from 'gatsby';
import SEO from '../components/Seo';

export default function About({ path }: PageProps) {
    return (
        <Layout path={path} centered>
            <SEO/>
            <h2>Coming soon</h2>
            {/*<h1>About me</h1>*/}
            {/*<div className="w-24 h-2 border-t-2 border-b-2 my-4 border-accent-700"/>*/}
        </Layout>
    );
}
