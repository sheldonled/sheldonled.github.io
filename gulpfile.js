var gulp = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require("gulp-uglify"),
    jshint      = require("gulp-jshint"),
    minifyCSS   = require('gulp-minify-css');

gulp.task('styles', function() {
  gulp.src('./assets/css/*.css')
    .pipe(minifyCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('scripts', function () {
    gulp.src('./assets/js/*.js') // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter()) // Dump results
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/'));
});

// Default Task
gulp.task('default', function (cb) {
    gulp.start(['styles','scripts'], cb);
});
