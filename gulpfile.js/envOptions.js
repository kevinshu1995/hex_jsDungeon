const srcPath = './app'
const distPath = './dist'
const nodePath = './node_modules'

let envOptions = {
    string: 'env',
    default: {
        env: 'dev',
    },
    conyFile: {
        src: [
            `${srcPath}/**/*`,
            `!${srcPath}/assets/style/**`,
            `!${srcPath}/assets/js/**`,
            // `!${srcPath}/**/*.ejs`,
            `!${srcPath}/*.pug`,
            `!${srcPath}/modules`,
            `!${srcPath}/**/*.pug`,
            `!${srcPath}/**/*.html`,
        ],
        path: distPath,
    },
    html: {
        src: [`${srcPath}/**/*.html`],
        // ejsSrc: [
        //   `${srcPath}/**/*.ejs`,
        // ],
        pugSrc: [`${srcPath}/**/*.pug`, `!${srcPath}/modules/*.pug`],
        pugSrc_watch: [`${srcPath}/**/*.pug`],
        path: distPath,
    },
    style: {
        src: [
            `${srcPath}/assets/style/**/*.scss`,
            `${srcPath}/assets/style/**/*.sass`,
            `${nodePath}/animate.css/animate.css`,
        ],
        outputStyle: 'expanded',
        includePaths: [
            `${nodePath}/@fortawesome/fontawesome-free/scss/`,
            `${nodePath}/foundation-sites/scss`,
            `${nodePath}/foundation-sites/scss`,
        ],
        tailwindCss: {
            watch: `${srcPath}/assets/style/tailwindCss/`,
            inputPath: `${srcPath}/assets/style/tailwindCss/index.css`,
            outputPath: `${distPath}/assets/style/`,
        },
        path: `${distPath}/assets/style`,
    },
    javascript: {
        entry: [`${srcPath}/assets/js/all.js`],
        src: [`${srcPath}/assets/js/**/*.js`],
        concat: 'all.js',
        path: `${distPath}/assets/js`,
    },
    vendors: {
        src: [],
        concat: 'vendors.js',
        path: `${distPath}/assets/js`,
    },
    img: {
        src: [`${srcPath}/assets/images/**/*`],
    },
    clean: {
        src: distPath,
    },
    browserDir: distPath,
    deploySrc: `${distPath}/**/*`,
    prettier: './prettierrc',
}

exports.envOptions = envOptions
