import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

const config = {
    input: 'src/index.js',
    external: ['react','react-dom'],
    output: {
        format: 'umd',
        name: 'react-global-light',
        globals: {
            react: "React",
            "react-dom": 'React DOM' 
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ]
}

export default config;