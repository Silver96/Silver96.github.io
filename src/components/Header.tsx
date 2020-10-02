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
                return <header className="flex justify-between items-center px-8 py-4">
                    <pre className="header-home">
                    <Link to={'/'}>
                        <span>asilvestroni</span>
                        <span>@</span>
                        <span>dev</span>
                    </Link>
                        :{props.path} <span className="blinking-cursor">|</span>
                    </pre>
                    <div className="flex">
                        <ul className="flex items-center">
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
                        <NightModeToggle value={nightMode} setter={setNightMode}/>
                    </div>
                </header>;
            }}
        </GlobalStateContext.Consumer>
    );
}
