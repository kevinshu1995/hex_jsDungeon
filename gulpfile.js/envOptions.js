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
        tailwindcss: {
            includePaths: [
                `${nodePath}/tailwindcss/base.css`,
                `${nodePath}/tailwindcss/components.css`,
                `${nodePath}/tailwindcss/utilities.css`,
                `${nodePath}/tailwindcss/utilities.css`,
            ],
            outputpath: `${distPath}/assets/style/tailwindcss`,
        },
        path: `${distPath}/assets/style`,
    },
    javascript: {
        src: [`${srcPath}/assets/js/**/*.js`],
        concat: 'all.js',
        path: `${distPath}/assets/js`,
    },
    vendors: {
        src: [
            `${nodePath}/jquery/dist/**/jquery.min.js`,
            `${nodePath}/foundation-sites/dist/js/foundation.min.js`,
            `${nodePath}/popmotion/dist/popmotion.min.js`,
        ],
        concat: 'vendors.js',
        path: `${distPath}/assets/js`,
    },
    img: {
        src: [`${srcPath}/assets/images/**/*`],
    },
    clean: {
        src: distPath,
    },
    jest: {
        coverageFrom: [`${srcPath}/assets/js/js003.js`],
    },
    browserDir: distPath,
    deploySrc: `${distPath}/**/*`,
    prettier: './prettierrc',
}

exports.envOptions = envOptions
