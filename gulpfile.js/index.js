const gulp = require('gulp')
const $ = require('gulp-load-plugins')({ lazy: false })
const autoprefixer = require('autoprefixer')
const minimist = require('minimist')
const browserSync = require('browser-sync').create()
const { envOptions } = require('./envOptions')
const pug = require('gulp-pug') //載入 gulp-pug
const prettier = require('gulp-prettier')

let options = minimist(process.argv.slice(2), envOptions)
//現在開發狀態
console.log(`Current mode：${options.env}`)

function copyFile() {
    return gulp
        .src(envOptions.conyFile.src)
        .pipe(gulp.dest(envOptions.conyFile.path))
        .pipe(
            browserSync.reload({
                stream: true,
            })
        )
}

function layoutHTML() {
    return gulp
        .src(envOptions.html.pugSrc)
        .pipe($.plumber())
        .pipe(
            pug({
                pretty: true,
            })
        )
        .pipe(gulp.dest(envOptions.html.path))
        .pipe(
            browserSync.reload({
                stream: true,
            })
        )
}

function sass() {
    const plugins = [autoprefixer()]
    return gulp
        .src(envOptions.style.src)
        .pipe($.sourcemaps.init())
        .pipe(
            $.sass({
                outputStyle: envOptions.style.outputStyle,
                includePaths: envOptions.style.includePaths,
            }).on('error', $.sass.logError)
        )
        .pipe(prettier(envOptions.prettier))
        .pipe($.postcss(plugins))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(envOptions.style.path))
        .pipe(
            browserSync.reload({
                stream: true,
            })
        )
}

// function tailwindcss() {
//     const plugins = [require("tailwindcss"), autoprefixer()];
//     const postcss = require("gulp-postcss");

//     return (
//         gulp
//             .src(envOptions.style.tailwindcss.includePaths)
//             // ...
//             .pipe(postcss(plugins))
//             // ...
//             .pipe(gulp.dest(envOptions.style.tailwindcss.outputpath))
//     );
// }

function babel() {
    return (
        gulp
            .src(envOptions.javascript.src)
            .pipe(prettier(envOptions.prettier))
            .pipe($.sourcemaps.init())
            .pipe(
                $.babel({
                    presets: ['@babel/env'],
                })
            )
            // .pipe($.concat(envOptions.javascript.concat))
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(envOptions.javascript.path))
            .pipe(
                browserSync.reload({
                    stream: true,
                })
            )
    )
}

function vendorsJs() {
    return gulp
        .src(envOptions.vendors.src)
        .pipe($.concat(envOptions.vendors.concat))
        .pipe(gulp.dest(envOptions.vendors.path))
}

function browser() {
    browserSync.init({
        server: {
            baseDir: envOptions.browserDir,
        },
        port: 8000,
    })
}

function clean() {
    return gulp
        .src(envOptions.clean.src, {
            read: false,
            allowEmpty: true,
        })
        .pipe($.clean())
}

function deploy() {
    return gulp.src(envOptions.deploySrc).pipe($.ghPages())
}

function watch() {
    gulp.watch(envOptions.html.src, gulp.series(layoutHTML))
    // gulp.watch(envOptions.html.ejsSrc, gulp.series(layoutHTML));
    gulp.watch(envOptions.html.pugSrc_watch, gulp.series(layoutHTML))
    gulp.watch(envOptions.javascript.src, gulp.series(babel))
    gulp.watch(envOptions.img.src, gulp.series(copyFile))
    gulp.watch(envOptions.style.src, gulp.series(sass))
    // gulp.watch(envOptions.style.src, gulp.series(sass, tailwindcss));
}

exports.deploy = deploy

exports.clean = clean

exports.build = gulp.series(
    clean,
    copyFile,
    layoutHTML,
    sass,
    // tailwindcss,
    babel,
    vendorsJs
)

exports.default = gulp.series(
    clean,
    copyFile,
    layoutHTML,
    sass,
    // tailwindcss,
    babel,
    vendorsJs,
    gulp.parallel(browser, watch)
)
