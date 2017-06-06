﻿var webpack = require('webpack');
var path = require('path');
var failPlugin = require('webpack-fail-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PACKAGE = require('./package.json');

module.exports = {
    entry: {
        'index': ["./index.js"],
    },
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    plugins: [
        failPlugin,
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "hypergriddemo.html",
            template: 'DemoPage/hypergriddemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotterhypergrid-bundle.min.js",
            'abCSS': PACKAGE.version + "/adaptableblotter-style.css",
            'bundleJs': PACKAGE.version + "/harness-bundle.min.js"
        }),
                new HtmlWebpackPlugin({
            chunks: [],
            filename: "kendodemo.html",
            template: 'DemoPage/kendodemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotterkendo-bundle.min.js",
            'abCSS': PACKAGE.version + "/adaptableblotter-style.css",
            'bundleJs': PACKAGE.version + "/harness-bundle.min.js"
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "index.html",
            template: 'DemoPage/index.ejs',
            inject: false,
            'version': PACKAGE.version,
            'versiondate': (new Date()).toLocaleDateString("en-GB")
        }),
        //this makes sure we package it in the dist folder and make it available for the webpack dev server
        // new CopyWebpackPlugin([{ context: 'node_modules/adaptableblotter/dist/adaptable-blotter-themes', from: '**/*', to: 'adaptable-blotter-themes' }]),
        new CopyWebpackPlugin([{ context: 'node_modules/adaptableblotter/dist', from: '*', to: PACKAGE.version + '/' }]),
        new CopyWebpackPlugin([{ from: 'UserGuide/Adaptable_Blotter_User_Guide.pdf', to: '' }]),
        new CopyWebpackPlugin([{ from: 'ExtLibs/**/*', to: '' }]),
        new CopyWebpackPlugin([{ from: 'node_modules/adaptableblotter/LICENSE.md', to: '' }]),
        new CopyWebpackPlugin([{ from: 'DemoPage/*', to: '', flatten: true }])
    ],
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            // note that babel-loader is configured to run after ts-loader
            {
                test: /\.ts(x?)$/, loader: 'babel-loader?presets[]=es2015!ts-loader'
            }
        ]
    }
}