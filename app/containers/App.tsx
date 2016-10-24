'use strict';

import * as React from 'react';

export class App extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>React Webpack Koa Typscript Boilerplate</h1>
                <ul>
                    <li><h3>Bluebird</h3></li>
                    <li><h3>Gulp</h3></li>
                    <li><h3>Koa 2</h3></li>
                    <li><h3>Lodash</h3></li>
                    <li><h3>React</h3></li>
                    <li><h3>Redux</h3></li>
                    <li><h3>Sass</h3></li>
                    <li><h3>Typescript</h3></li>
                    <li><h3>Webpack</h3></li>
                </ul>
            </div>
        );
    }
}