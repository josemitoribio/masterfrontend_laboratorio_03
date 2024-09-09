import {merge} from "webpack-merge";
import common from './webpack.common.js';
import Dotenv from "dotenv-webpack";


export default merge(common, {
    mode: "development",
    module: {
        rules: [
            {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader','sass-loader'],
            },
            {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader',
                'css-loader'],
            },
        ],
    },
    plugins:[
        new Dotenv({
            path: './dev.env',
        }),
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 8080,
        hot: true,
        devMiddleware: {
          stats: "errors-only",
        },
    },
});