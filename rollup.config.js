import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

import pkg from './package.json';

const ENTRY_FILE = 'lib/main.ts';
const BANNER = `/**
  Assert.js - javascript assertions library
  Version: ${pkg.version}
  Build: ${new Date().toUTCString()}
  @license ${pkg.license}
  @preserve
*/`;

const plugins = [
  sourceMaps(),
  typescript({
    clean: true,
    useTsconfigDeclarationDir: true
  })
];

const config = [
  // Regular bundles
  {
    input: ENTRY_FILE,
    output: [
      {
        name: pkg.config.umd_variable_name,
        file: pkg.browser,
        format: 'umd',
        banner: BANNER
      },
      {
        file: pkg.main,
        format: 'cjs',
        banner: BANNER
      },
      {
        file: pkg.module,
        format: 'es',
        banner: BANNER
      }
    ],
    sourceMap: true,
    plugins
  }
];

if (process.env.NODE_ENV === 'production') {
  config.push(
    // Minified umd bundle
    {
      input: ENTRY_FILE,
      output: {
        name: pkg.config.umd_variable_name,
        file: pkg.minified,
        format: 'umd',
        banner: BANNER
      },
      plugins: [
        ...plugins,
        uglify({
          output: {
            comments: /@preserve/
          }
        })
      ]
    }
  );
}

export default config;