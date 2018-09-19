var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var notify = require("gulp-notify");
var prefix = require("gulp-autoprefixer");
var cp = require("child_process");
var fs = require("fs");
var ghPages = require("gulp-gh-pages");
var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
var messages = {
  jekyllBuild: '<span style="color: gray">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task("jekyll-build", function(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp
    .spawn(jekyll, ["build", "--config", "_config.yml"], {
      stdio: "inherit"
    })
    .on("close", done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task("jekyll-rebuild", ["build-html"], function() {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task("browser-sync", ["build-html"], function() {
  browserSync({
    server: {
      baseDir: "docs"
    }
  });
});

/**
 * Compile files from _scss into both dist/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task("compile-css", ["jekyll-build"], function() {
  return gulp
    .src("./assets/scss/documentation.css")
    .pipe(
      prefix(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
        cascade: true
      })
    )
    .pipe(gulp.dest("docs/assets/scss/"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});



gulp.task("copy-cupcake", ["compile-css"], function() {
  return gulp
  .src([
    "./node_modules/@ipreo/cupcake/dist/**/*",
    "!./node_modules/@ipreo/cupcake/dist/**/*.html",
    "!./node_modules/@ipreo/cupcake/dist/{demo-js,demo-js/**}",
    "!./node_modules/@ipreo/cupcake/dist/{img,img/**}"
  ])
    .pipe(gulp.dest("./assets/cupcake/"))
});


gulp.task("compile-js", ["copy-cupcake"], function() {
  return gulp;
});

gulp.task("compress-js", function() {
  return gulp
    .src("assets/js/plugins/*.js")
    .pipe(concat("plugins.js"))
    .pipe(gulp.dest("dist/assets/js/"));
});

gulp.task("build-html", ["copy-cupcake"], function() {
  return gulp;
});

// gulp.task("get-new-cupcake", function() {
//   return gulp
//   .src([
//     "./node_modules/@ipreo/cupcake/dist/**/*",
//     "!./node_modules/@ipreo/cupcake/dist/**/*.html",
//     "!./node_modules/@ipreo/cupcake/dist/{demo-js,demo-js/**}",
//     "!./node_modules/@ipreo/cupcake/dist/{img,img/**}"
//   ])
//     .pipe(gulp.dest("./assets/cupcake/"))
// });





/**
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task("watch", function() {
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
    ["jekyll-rebuild"]
  );
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task("default", ["browser-sync", "watch"]);

/**
 * Create production-ready website
 */
gulp.task("jekyll-build-prod", function(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp
    .spawn(jekyll, ["build", "--config", "_config.yml,_config.prod.yml"], {
      stdio: "inherit"
    })
    .on("close", done);
});


gulp.task("push-to-gh-pages", function() {
  return gulp.src("./docs/**/*").pipe(ghPages());
});

gulp.task("deploy", ["jekyll-build-prod", "push-to-gh-pages"]);

