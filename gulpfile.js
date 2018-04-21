var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
var rename = require("gulp-rename");
var watch = require("gulp-watch");

gulp.task('default', function() {
    gulp.src(['_less/style.less'])
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
});

gulp.task('dev', function() {
    gulp.src(['_less/style.less'])
        .pipe(less())
        .pipe(gulp.dest('css'))
});

gulp.task('stream', function () {
    // Endless stream mode
    gulp.watch(['_less/*.less'], ['dev']);
});
