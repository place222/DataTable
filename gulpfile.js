var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean')
    tinylr = require('tiny-lr'),               //livereload
    server = tinylr(),
    port = 35729,
    livereload = require('gulp-livereload');   //livereload;

gulp.task('default',function(){
    console.log('default');
});

//html文件构建拷贝到dist/中
gulp.task('html',function(){

});
//清理
gulp.task('clean',function(){
    gulp.src(['dist/js'])
        .pipe(clean());
});
//合并压缩
gulp.task('js',function(){
    gulp.src('src/scripts/index.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));

    gulp.src('bower_components/jquery/dist/jquery.js')
    .pipe(gulp.dest('dist/js/'));
});
//html
gulp.task('html',function(){
    gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
});

//watch
gulp.task('watch',function(){

    livereload.listen();

    gulp.watch('src/scripts/*.js',function(){
        gulp.run('js');
        livereload.changed('dist/js/*.js');
    });

    gulp.watch('src/index.html',function(event){
        gulp.run('html');
        livereload.changed('dist/index.html');
    });
    
});