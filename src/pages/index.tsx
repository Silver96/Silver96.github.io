import React from 'react';
import { Link, PageProps, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

export default function IndexPage({ path }: PageProps) {
    const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `);
    return (
        <Layout path={path} centered>
            <SEO/>
            <div className="px-8 py-4 rounded-lg">
                <h1 className="text-5xl">Andrea Silvestroni</h1>
                <h2>Welcome to my page!</h2>
                <div className="w-24 h-2 border-t-2 border-b-2 my-4 border-accent-700"/>
                <div className="mb-4">
                    <div className="tag inline-block">
                        Web Full Stack
                    </div>
                    <div className="tag inline-block">
                        Security
                    </div>
                    <div className="tag inline-block">
                        Sys Ops
                    </div>
                </div>
                <pre className="mail">aasilvestroni&nbsp;@&nbsp;gmail.com</pre>
            </div>
            <div className="bg-shape"/>
        </Layout>
    );
}
