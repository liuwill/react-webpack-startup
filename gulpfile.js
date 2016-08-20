/**
 * Created by Administrator on 2016/8/2 0002.
 */
var gulp = require('gulp');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');

//指定文件输入和输出路径
var path = {
    HTML: 'index.html',
    STATIC_LIB:'static/lib',
    STATIC_IMG:'static/images',
    SASS:'app/styles',
    ALL: ['src/js/*.js', 'src/js/**/*.js', 'index.html', 'views/*.html'],
    REACT_ENTRY: ['./app/main.js'],
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/build/',
    DEST: 'dist'
};

gulp.task('clean', function () {
    return gulp.src(['assets','build','rev','dist'], {read: false})
        .pipe(clean());
});

gulp.task('bower', function() {
    return bower('./bower_components')
        .pipe(gulp.dest('./static/lib/'));
});

gulp.task('staticserver', function() {
    connect.server({
        port:3333,
        //host: 'static.shop.dev',
        //livereload: true
    });
});

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});

/************* 简易压缩 **************/
gulp.task('easy_webpack',function(){
    gulp.src('./app/main.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./assets/scripts/'))
});

gulp.task('easy_sass', function () {
    return gulp.src(path.SASS + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles/'));
});

gulp.task("easy_build",["easy_webpack","easy_sass"], function () {
    // 简单编译运行
});