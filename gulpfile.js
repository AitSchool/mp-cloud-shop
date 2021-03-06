const gulp    = require('gulp');
const less    = require('gulp-less');
const rename  = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const header  = require('gulp-header');
const autoprefixer = require('autoprefixer');
const pkg = require('./package.json');

gulp.task('less', function() {
    var banner = [
        '/*!',
        ' * Miniapp v<%= pkg.version %> ',
        ' * Copyright <%= new Date().getFullYear() %> Jaxzhu, Inc.',
        ' * Licensed under the <%= pkg.license %> license',
        ' */',
        ''
    ].join('\n');

    gulp
        .src('miniprogram-src/**/*.less', { base: 'miniprogram-src' })
        .pipe(less())
        .pipe(postcss([autoprefixer(['iOS >= 8', 'Android >= 4.1'])]))
        .pipe(
            cssnano({
                zindex: false,
                autoprefixer: false,
                reduceIdents: false,
                discardComments: { removeAll: true }
            })
        )
        .pipe(header(banner, { pkg: pkg }))
        .pipe(
            rename(function(path) {
                path.extname = '.wxss';
            })
        )
        .pipe(gulp.dest('miniprogram'));
});

gulp.task('pages', function() {
    gulp
        .src(
            [
                'miniprogram-src/**/*',
                '!miniprogram-src/**/*.less',
                '!miniprogram-src/**/*.md'
            ],
            { base: 'miniprogram-src' }
        )
        .pipe(gulp.dest('miniprogram'));
});

gulp.task('watch', function() {
    gulp.watch('miniprogram-src/**', ['less', 'pages']);
});

gulp.task('build', ['less', 'pages']);

gulp.task('default', ['watch', 'less', 'pages']);

