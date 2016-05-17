var gulp = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require("gulp-uglify"),
    jshint      = require("gulp-jshint"),
    gutil       = require("gulp-util"),
    minifyCSS   = require('gulp-clean-css')
    input  = {
      'css': 'assets/css/*.css',
      'js': 'assets/js/*.js'
    },

    output = {
      'css': 'dist/',
      'js': 'dist/'
    };

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['watch']);

/* build css files */
gulp.task('build-css', function() {
  return gulp.src(input.css)
    .pipe(minifyCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(output.css))
});

/* run javascript through jshint */
gulp.task('jshint', function () {
    return gulp.src(input.js) // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish')) // Dump results
});

/* concat javascript files and minify */
gulp.task('build-js', function () {
    return gulp.src(input.js) // path to your files
    .pipe(uglify().on('error', gutil.log))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(output.js));
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
  gulp.watch(input.js, ['jshint', 'build-js']);
  gulp.watch(input.css, ['build-css']);
});