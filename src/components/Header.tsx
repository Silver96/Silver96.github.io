import React, { useState, useEffect } from 'react';
import NightModeToggle, { GlobalStateContext } from './NightModeToggle';
import { graphql, useStaticQuery, Link } from 'gatsby';

type DataProps = {
    path: string
}

function choose(choices: string[], except?: string): string {
    const validChoices = !!except ? choices.filter(s => s !== except) : choices.slice();

    return validChoices[Math.round(Math.random() * (validChoices.length - 1))];
}


export default function Header(props: DataProps) {
    const { site } = useStaticQuery(graphql`
    query HeaderData {
        site {
            siteMetadata {
                nav {
                    name
                    url
                }
            }
        }
    }
    `);

    return (
        <GlobalStateContext.Consumer>
            {({ nightMode, setNightMode }) => {
                return <header className="flex justify-between items-center px-4 md:px-8 py-4">
                    <pre className="header-home">
                    <Link to={'/'}>
                        <span>asilvestroni</span>
                        <span className="text-red-400">@</span>
                        <span className="text-yellow-600">dev</span>
                    </Link>
                        :{props.path} <span className="blinking-cursor">|</span>
                    </pre>
                    <div className="flex">
                        <ul className="hidden md:flex items-center">
                            {
                                site.siteMetadata.nav.map(l => {
                                    return (
                                        <Link key={l.name} to={l.url} className="px-4 py-2">
                                            <li>{l.name}</li>
                                        </Link>
                                    );
                                })
                            }
                        </ul>
                        <div className="flex-row-reverse flex">
                            <button className="block md:hidden relative hamburger" tabIndex="0">
                                <div/>
                            </button>
                            <NightModeToggle value={nightMode} setter={setNightMode}/>
                        </div>
                    </div>
                </header>;
            }}
        </GlobalStateContext.Consumer>
    );
}
