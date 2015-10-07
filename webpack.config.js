/*jshint undef:true, unused:true, node:true*/

var path = require("path"),
    webpack = require("webpack"),
    autoprefixer = require("autoprefixer-core"),
    includePaths = path.resolve(__dirname, "../../node_modules");

module.exports = {
    entry: {
        app: "./src/views/Start.react.es6.js",
        vendor: ["classnames", "react"]
    },

    output: {
        filename: "./public/js/[name].js"
    },

    module: {
        loaders: [
            // the optional 'runtime' transformer tells babel to require the runtime instead of inlining it.
            { test: /\.es6\.js$/, loader: "babel?optional=runtime" },
            { test: /\.gif$/, loader: "url?mimetype=image/gif" },
            { test: /\.png$/, loader: "url?mimetype=image/png" },
            { test: /\.scss$/, loader: "style!css!postcss!sass?includePaths[]=" + includePaths },
            { test: /\.css$/, loader: "style!css!postcss" }
        ]
    },

    postcss: {
        defaults: [autoprefixer]
    },

    resolve: {
        fallback: [__dirname, path.join(__dirname, "src")],
        extensions: ["", ".js", ".react.es6.js", ".es6.js"]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "./public/js/vendor.js")
    ]
};
