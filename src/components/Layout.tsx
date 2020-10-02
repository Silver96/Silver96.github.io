/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { PageProps } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import { GlobalStateContext } from './NightModeToggle';

export default function Layout({ children, path }: PageProps) {
    const [nightMode, setNightMode] = useState(typeof window !== 'undefined' ? localStorage.getItem('night-mode-enabled') !== 'false' || false : true);

    return (
        <GlobalStateContext.Provider value={{ nightMode, setNightMode }}>
            <Helmet bodyAttributes={{ class: nightMode ? 'night' : '' }}/>
            <div className="min-h-screen flex flex-col">
                <Header path={path ?? '/'}/>
                <main className="flex-1">{children}</main>
                <Footer/>
            </div>
        </GlobalStateContext.Provider>
    );
}
