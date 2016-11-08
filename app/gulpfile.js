'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const browserify = require('gulp-browserify');
const uglifyJs = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const watchLess = require('gulp-watch-less');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const stringify = require('stringify');
const eslint = require('gulp-eslint');

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.js', './src/**/*.tpl'], ['browserify']);
  gulp.watch(['./resource/less/*.less'], ['less']);
});

gulp.task('eslint', () => {
  gulp.src(['src/**/*.js'])
      .pipe(eslint({
          "extends": ["eslint:recommended", "google"],
          "parserOptions": {
            "ecmaVersion": 6,
            "sourceType": "module"
          },
          "rules": {
            "strict": 2,
            "max-len": [2, 90, 4]
          },
          "envs": [
            "browser"
          ],
          "globals": [
            'alert',
            'Map',
            'document',
            'jQuery',
            'require'
          ]
        })
      )
      .pipe(eslint.formatEach('compact', process.stderr));
});

gulp.task('copy', () => {
  return gulp.src(['resources/fonts/**/*', 'resources/img/**/*'], {base: './resources'})
             .pipe(gulp.dest('dist'));
});

gulp.task('less', () => {
  return gulp.src(['resource/less/app.less'])
         .pipe(less())
         .pipe(cssnano({"zindex": false}))
         .pipe(gulp.dest('dist/css'));
});

gulp.task('browserify', () => {
  gulp.src('src/index.js')
      .pipe(browserify({
        transform: stringify({
            extensions: ['.tpl']
        })
      }))
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['copy', 'less', 'browserify']);
