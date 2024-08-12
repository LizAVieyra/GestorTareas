const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', //Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //Loaders para procesar archivos
            },
            {
                test: /\.js$/, //Regex para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para transpilar JS moderno a JS compatible con mas navegadores
                    options: {
                        presets: ['@babel/preset-env'], //Preset de Babel para converitr a versiones mas antiguas
                    }
                }
            }
        ]
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuracion
    devServer: {
        static: {
            directory:path.resolve(__dirname, 'dist'),
        },
        compress: true, //Habilitar la compresion gzip, va cargar mas rapido
        port: 9000, //Puerto del servidor de desarrollo
    }
}