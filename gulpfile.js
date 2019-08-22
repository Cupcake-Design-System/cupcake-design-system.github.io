var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var cp = require('child_process');
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var browserSync = require('browser-sync').create();

var paths = {
  styles: {
    src: './assets/scss/documentation.css',
    dest: './dist/assets/scss',
  },
  scripts: {
    src: 'assets/js/*.js',
    dest: 'dist/assets/js/'
  }
};

function jekyllBuild() {
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
}

function style() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      outputStyle: 'expanded',
      onError: browserSync.notify
    }))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.reload({stream:true}));
}

function js() {
  return gulp.src(paths.scripts.src)
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(browserSync.reload({stream:true}))
}

function browserSyncServe(done) {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  })
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function watch() {
  gulp.watch(paths.styles.src, style)
  gulp.watch(paths.scripts.src, js)
  gulp.watch(
    [
      "assets/scss/*.scss",
      "assets/js/*.js",
      "*.html",
      "_data/*.yml",
      "_layouts/*.html",
      "_includes/*.html",
      "_includes/*.svg",
      "content/**/*.md",
      "content/*",
      "_posts/*"
  ],
  gulp.series(jekyllBuild, browserSyncReload));
}

gulp.task('default', gulp.parallel(jekyllBuild, browserSyncServe, watch))