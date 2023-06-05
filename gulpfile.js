// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }
  
//   exports.default = defaultTask

const { src, dest, watch } = require("gulp");

const sass = require('gulp-sass')(require('sass'));

function generateCSS(cb){
    // Console log is step 4
    // console.log("check if this function runs");
    // Step 6
    // This is generating the CSS from sass
    src("./sass/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
    cb();
}
// this does not have to be called css - this is just the name we're giving the script
// Step 3
exports.css = generateCSS


function watchFiles(cb){
    watch('sass/**/*.scss', generateCSS)
    // watch("./*.html", htmlBeautify)
    // watch("./js/*.js", jsBeautify)
    cb();
}

exports.watch = watchFiles