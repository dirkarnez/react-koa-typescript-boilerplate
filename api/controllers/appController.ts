'use strict';

declare const __dirname;

import * as fs from 'fs-extra-promise';

export async function index(ctx) {
    ctx.body = await fs.readFileAsync(__dirname+'/../public/index.html', { encoding: 'utf8' });
}