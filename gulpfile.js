//   GULP SOURCE FILE AND DESINATION

var gulp = require('gulp');
gulp.task('task-name', function() {
    return gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
});
  gulp.task('hello', function() {
    console.log('Hello Zell');
});

// GULP-SASS

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
gulp.task('sass', function(){
    return gulp.src('source-files')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination'))
});
  
// WHERE GULP FIND FILE

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css/style.css'))
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

// COMMAND TO WATCH

gulp.watch('style.scss', ['tasks', 'to', 'run']); 
gulp.watch('app/scss/**/*.scss', ['sass']);
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Other watchers
})

