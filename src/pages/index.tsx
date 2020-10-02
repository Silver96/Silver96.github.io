import React from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';

export default function IndexPage({path}: PageProps) {
    return (
        <Layout path={path}>
            <SEO/>
            <h1 className="text-5xl">🚧 Website under construction 🚧</h1>
            <p>Check back soon!</p>
        </Layout>
    );
}
