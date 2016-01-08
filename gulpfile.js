/*
* Gulp Template
* Created By
* Ray Robertson
* ray760@rayfolio.com
* https://github.com/ray760/Gulp_Starter_File
*/

/* GULP CHEAT SHEET
   
   *************** HAVE TO CREATE 'gulpfile.js' ***************
   
   CONSOLE COMMANDS:
   gulp: Runs all default and user defined tasks
   gulp 'task name': Runs all user defined tasks

   GULP FUNCTINOS:
   require(): is used to require gulp and all plugins
   .task('task name', callback or array): is used to define tasks that need to be run
   .pipe(some function): is used to connect what's run within each task
   .src('files to work from'): is the source of the files we are working on and minifying
   .dest('output folder'): is used to define the output folder of files
   .watch('files to watch', ['Tasks to run']): is used to watch for changes of files


*/
/*GULP and GULP Plugins are defined here after being installed via npm*/
var gulp = require('gulp'), // GULP
    plumber = require('gulp-plumber'), // SYNTAX ERROR CHECKER
    uglify = require('gulp-uglify'), // MINIFY JAVASCRIPT
    uncss = require('gulp-uncss'),
    minifyCss = require('gulp-minify-css'), // MINIFY CSS
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'), // AUTO PREFIX CSS
    handlebars =  require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    connect = require('gulp-connect')


    paths = {
      css: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
      ],
      handlebars: [
        'development/templates/*.hbs'
      ],
      js: [
        'development/js/templates.js',
        'development/js/models/*.js',
        'development/js/collections/*.js',
        'development/js/views/*.js',
        'development/js/main.js'
      ],
      vendor_js: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/backbone/node_modules/underscore/underscore-min.js',
        'node_modules/backbone/backbone-min.js',
        'node_modules/handlebars/dist/handlebars.min.js'
      ]
    };

/*GULP tasks are run from here.
  'default' is the default task run by gulp
  We use 'gulp.src' to point to development files i.e. 'main.js'
  and we use the '.pipe()' function to connect our tasks.
  'gulp.dest()' is where we out put our minified files.
*/

/*GULP Tasks are tasks you set up other than the default*/

/* This task minifies scripts using 'gulp-uglify'*/
gulp.task('scripts', function(){
  gulp.src(paths.js)
  .pipe(concat('main.js'))
  .pipe(gulp.dest('production/js'))
  .pipe(connect.reload());
});

gulp.task('vendor-scripts', function(){
  gulp.src(paths.vendor_js)
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('production/vendor/js'));
});

/* This task minifies styles*/
gulp.task('styles', function(){
  gulp.src('development/sass/*.scss')
  //.pipe(sass().on('error', sass.logError))
/*  .pipe(uncss({
    html: ['development/index.html']
  }))*/
  .pipe(plumber())
  .pipe(minifyCss())
  .pipe(gulp.dest('production/css'))
  .pipe(connect.reload());
});

gulp.task('vendor-css', function(){
  gulp.src(paths.css)
/*  .pipe(uncss({
    html: ['development/index.html']
  }))*/
  .pipe(gulp.dest('production/vendor/css'))
});

gulp.task('templates', function(){
  gulp.src(paths.handlebars)
    .pipe(handlebars())
    .pipe(wrap('SFEDApp.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'SFEDApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('production/js/'))
    .pipe(connect.reload());
});

gulp.task('page', function(){
	gulp.src('development/*.html')
	.pipe(gulp.dest('production/'))
	.pipe(connect.reload());
});

gulp.task('images', function(){
  gulp.src('development/imgs/**')
  .pipe(gulp.dest('production/imgs/'))
});

gulp.task('templates', function () {
  gulp.src('development/templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
        namespace: 'RAYROB.templates',
        noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('development/js/'))
    .pipe(connect.reload());
});

/* This task watches our files for livereload */
/* 'gulp.watch(path or [array of paths], [array])'*/
gulp.task('watch', function(){
  gulp.watch('development/templates/*.hbs', ['templates']);
  gulp.watch(paths.js, ['scripts']);
  //gulp.watch(['development/sass/*.scss', 'development/sass/base/*.scss'], ['styles']);
  gulp.watch('development/*.html', ['page']);
});

gulp.task('connect', function(){
	connect.server({
	  root: 'production',
	  livereload: true
	});
});

/*GULP Default Task
  Run using 'gulp' in console
  This task can have a call back function or an array.
*/
gulp.task('default', ['templates', 'page', 'scripts', 'vendor-css', 'watch', 'vendor-scripts', 'styles', 'images', 'connect']);