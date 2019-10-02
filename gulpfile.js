var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    connect = require('gulp-connect'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');
    sass.compiler = require('node-sass');

//Default task. This will be run when no task is passed in arguments to gulp
gulp.task('default',['copyStaticFiles', 'scripts', 'sass', 'startServer', 'watch']);

//Copy static files from html folder to build folder
gulp.task('copyStaticFiles', function(){
    return gulp.src('./static/*.*')
        .pipe(gulp.dest('./build'));
});

//Convert ES6 ode in all js files in src/js folder and copy to
//build folder as bundle.js
gulp.task('scripts', function(){
    return browserify({
        entries: './src/js/index.js', debug: true
    })
        .transform(babelify.configure({
            presets : ['@babel/preset-env']
        }))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
    return gulp
    // Find all `.scss` files from the `stylesheets/` folder
        .src('./src/scss/styles.scss')
        .pipe(sourcemaps.init())
        // Run Sass on those files
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        // Write the resulting CSS in the output folder
        .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
    gulp.watch('./src/js/**/*.js', ['scripts']);
});

gulp.task('html:watch', function () {
    gulp.watch('./static/**/*.html', ['copyStaticFiles'])
});

gulp.task('watch', function () {
   gulp.start('js:watch', 'sass:watch', 'html:watch')
});

// start by typing gulp start
gulp.task('start', function(){
    gulp.start('copyStaticFiles', 'scripts', 'sass', 'startServer', 'watch')
});

//Start a test server with doc root at build folder and
//listening to 8888 port. Home page = http://localhost:8888
gulp.task('startServer', function() {
    connect.server({
        root: './build',
        livereload: true,
        port: 8888
    });
});