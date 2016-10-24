'use strict';

const gulp = require('gulp');
const all = require('gulp-all');
const typescript = require('gulp-typescript');
const webpack = require('gulp-webpack');

/* API */
gulp.task('api-typescript', () => {
    return gulp.src([
        './api/*.ts',
        './api/**/*.ts'
    ])
    .pipe(typescript({
        target: 'ES6',
        module: 'commonjs',
        types: [
            'node',
            'cookies',
            'koa',
        ]
    }))
    .pipe(gulp.dest('./build'));
});
gulp.task('api', ['api-typescript']);

/* APP */
gulp.task('app-copyIndex', () => {
    return gulp.src([
        './app/index.html',
    ])
    .pipe(gulp.dest('./build/public'));
});
gulp.task('app-webpack', () => {
    gulp.src('./app/main.tsx')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('./build/public'));
});
gulp.task('app', ['app-copyIndex', 'app-webpack']);

/* BUILD */
gulp.task('build', ['api', 'app']);