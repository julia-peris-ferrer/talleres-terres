var gulp = require("gulp"); 
var sass = require("gulp-sass");
var notify = require("gulp-notify");
var browserSync = require("browser-sync").create();
var gulpImport = require("gulp-html-import");
var imagemin = require("gulp-imagemin");
var tap = require("gulp-tap");
var browserify = require("browserify");
var buffer = require("gulp-buffer");
var sourcemaps = require("gulp-sourcemaps");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var source = require('vinyl-source-stream');

gulp.task("default", ["html", "sass", "js"], function(){
    browserSync.init({ server: "dist/" });
    gulp.watch(["src/**/*.scss"], ["sass"]);
    gulp.watch(["src/**/*.html"], ["html"]);
    gulp.watch(["src/**/*.js"], ["js"]);
});

gulp.task("sass", function(){
    return gulp.src("src/style.scss")
        .pipe(sourcemaps.init()) // comienza a capturar los sourcemaps
        .pipe(sass().on("error", function(error){ 
            return notify().write(error); 
        }))
        .pipe(postcss([
            autoprefixer(), // transforma el CSS dándole compatibilidad a versiones antiguas
            cssnano()       // comprime/minifca el CSS
        ]))
        .pipe(sourcemaps.write("./")) // guarda el sourcemap en la misma carpeta que el CSS
        .pipe(gulp.dest("dist/")) 
        .pipe(browserSync.stream()) 
        //.pipe(notify("SASS Compilado 🤘🏻"))
});

gulp.task("html", function(){
    return gulp.src("src/*.html")
        .pipe(gulpImport("src/components/"))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

gulp.task("js", function(){
    return browserify({entries: './src/js/main.js', debug: true})
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

gulp.task("img", function(){
    return gulp.src("src/img/*") 
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img/"))
});

gulp.task("fonts", function(){
    return gulp.src("node_modules/flexslider/fonts/*") 
        .pipe(gulp.dest("dist/fonts"))
});

gulp.task("files", function(){
    return gulp.src("src/sitemap.xml") 
        .pipe(gulp.dest("dist"))
});

gulp.task("statics", ["img", "fonts"]);
