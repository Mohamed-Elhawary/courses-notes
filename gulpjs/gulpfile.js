/*gulp v.3.9.1*/
var gulp   = require('gulp');
var concat = require('gulp-concat');
var prefix = require("gulp-autoprefixer")
/*
//first task
gulp.task('firstTask', function() {
    console.log("your first task is ready");
}); // run this task in the command line by >> gulp taskname
*/
//discription for multi tasks
/*
    gulp.task('myTask', function() {
        return gulp.src('') //here you insert yourrequired file(s) to do the tasks in it(them) 
                .pipe() // task one will be inserted inside pipe() function    
                .pipe() // task two will be inserted inside pipe() function
                .pipe() // task three will be inserted inside pipe() function and so on with task four , five, ....
                .pipe(gulp.dest()) //this is the final task which is responsible for compiling and rendering your files after doing the tasks you want inside them and insert them in a specific direction you want, the direction will be written inside the dest() function
    }); 

    >> examples for file(s) that can be inserted inside : src() and dest() function:
    ----------------------------------------------------------------------------------
    1- src('project/index.html') >> will deal with the index html file only inside the project folder.
    2- src('project/*.html') >> will deal with any html files inside the project folder.
    3- src('project/*.*') >> will deal with any files with any extentions type in the project folder.
    4- src(['project/index.html', 'main.css']) >> gulp accepts objects also like this, will deal with the index html and main css files inside the project folder
    5- dest('dist') >> the files that you make the tasks above will rendered into this direction inside 'dist' folder
    6- dest('dist/copy') >> same as before the difference is the direction will be inside the folder named 'copy', and if this folder doesn't existed yet as you doesn't created yet, the gulp will automatically create it for you... :)  
*/

//example for the first task plugin called >> gulp-concat, to merge multi files together inside one only file and insert this file in the dist folder
//don't forget to install the plugin first >> by npm i --save-dev gulp-concat
/*
gulp.task('css',  function() {
    return gulp.src('project/*.css')
            .pipe(concat('main.css'))
            .pipe(gulp.dest('dist'))
});*/

//example for the second task plugin called >> gulp-autoprefixer, to automatically add the required prefixes
//don't forget to install the plugin first >> by npm i --save-dev gulp-autoprefixer
gulp.task('cssMerge',  function() {
    return gulp.src('project/*.css')
            .pipe(prefix('last 2 versions')) // to ensure that it will match the last 2 versions of every browser
            .pipe(concat('main.css'))
            .pipe(gulp.dest('dist'))
});

//third plugin task called >> gulp-sass, to compile all your sass files into one css file
/* >> .pipe(sass({outputStyle: 'compressed'})) >> to get the code in compressed style. */

//fourth plugin task called >> gulp-pug, to compile your pug file into html file
/* >> .pipe(pug({pretty: true})) >> to get the code in pretty style mode but the default comppressed mode is the perfect for your site performance and speed*/

//fifth plugin task called>> static-server, and this plugin must be use --save not --save-dev with it when installing it
/* >> after installing the task, make a file called server.js in the same directory of plugin.json file and type this code inside it
    ---------------------code inside server.js  file------------------------
    var StaticServer = require('static-server');
    var server = new StaticServer({
        rootPath: './dist/',  //any file inside the dist folder directly will read it
        port: 8000,
    });

    server.start(function () {
        console.log('Server listening to', server.port); // small message show in the console to ensure that the server is has been worked correctly
    });

    >> after that you can check this srever by type this command >> node server.js
    >> after that in the task of pug that compile your code into html, inject a request of this server while making the task like that : 
        gulp.task('html', function() {
            require('./server.js');
            return gulp.src('project/index.pug')
                    .pipe(pug({pretty: true}))
                    .pipe(gulp.dest('dist'))
        });
*/

//six task is not a plugin to install just a function called watch that wacth your files for any changes directly:
/*
    gulp.task('watch', function() {
        require('./server.js');  >> you don't need it now in the pug task 
        gulp.watch('project/index.pug' >> the directory of the file to watch it, ['html']); // first task name to watch is "html"
        gulp.watch('project/css/* anotherastrictsign/*.scss', ['css']); to watch any file or folder in the css folder and watch any file inside these folders that ends with scss extension
    });
  
>> then type this command (pug watch) and at every save or change the files in the dist folder will be updated
*/

//seventh task is plugin and original extension in chrome called live-reload
//don't forget to install the plugin first >> by npm i --save-dev gulp-livereload
//after that reuire it as any plugins before at the top of the page >> var livereload = require('gulp-livereload')
/*inset the pipe function at the end of any task you create like that :
gulp.task('cssMerge',  function() {
    return gulp.src('project/*.css')
            .pipe(prefix('last 2 versions')) // to ensure that it will match the last 2 versions of every browser
            .pipe(concat('main.css'))
            .pipe(gulp.dest('dist'))
            .pipe(livereload());
});
>> after that at the livereload.listen() to your watch task like that :
    gulp.task('watch', function() {
        livereload.listen();
        require('./server.js');  >> you don't need it now in the pug task 
        gulp.watch('project/index.pug' >> the directory of the file to watch it, ['html']); // first task name to watch is "html"
        gulp.watch('project/css/* anotherastrictsign/*.scss', ['css']); to watch any file or folder in the css folder and watch any file inside these folders that ends with scss extension
    });
>> after that you must call the script of the extension itself as we say it is a chrome extension, so at the end of the html code add this script:
    <script src="http://localhost:35729/livereload"></script> >> this will call the script of the extension
>> after that run the watch task in the command as we say in the previous task, and you will see the changes directly in the browser without need to make reload to see changes. 
*/

//eight task plugin is called >> gulp-sourcemaps, that make a map for your stylesheet codes to can be easy to check it instead of compressed code
/*
>> first install it >> npm i gulp-sourcemaps --save-dev
>> then require it >> var sourcemaps = require('gulp-sourcemaps')
>> then add the two functions init() and write() of the sourcemaps task to the css task like that: 
    gulp.task('cssMerge',  function() {
    return gulp.src('project/css/main.scss')
            .pipe(sourcemaps.init()) >> init() is first
            .pipe(sass({output: "compressed"}))
            .pipe(prefix('last 2 versions')) // to ensure that it will match the last 2 versions of every browser
            .pipe(concat('main.css'))
            .pipe(sourcemaps.write('.')) >> write() before compiling in the dist folder, the dot('.') inside the write() function for reason of making the source map file outside the css file not inside it..  
            .pipe(gulp.dest('dist/css'))
            .pipe(livereload()) 
    });
>> then run the command (gulp watch), and to see the changes of the sourcemaps, inspect any element from the browser then click on its name at the console you will see the original source map of it.
*/

//nine task plugin called >> gulp-uglify, to compress your js code
/*
>> first install the plugin >> npm i gulp-uglify --save-dev
>> then require it >> var uglify = require('gulp-uglify)
>> then in the js task add the uglify() function like that: 
    gulp.task('js',  function() {
        return gulp.src('project/js/*.js')
            .pipe(concat('main.css'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
            .pipe(livereload()) 
    });
>> then run the gulp watch command and don't forget to add the js task in the watch task..
*/

//ten task plugin called >> gulp-notify , to notify you when the task is completely ended
/*
>>first install the plugin >> npm i gulp-notify --save-dev
>>second require it >> var notify = require("gulp-notify")
>> then add the function notify() at any task you want to be notified after it is done like this: 
        gulp.task('html', function() {
            return gulp.src('project/index.pug')
                    .pipe(pug({pretty: true}))
                    .pipe(gulp.dest('dist'))
                    .pipe(notify('the html task has been done >> this message you write here to show to you wen the notification is shown'))
                    .pipe(livereload())
        });
>> then run the gulp watch command and see the results.
*/

//eleven task plugin called >> gulp-zip , to compress your all files of your project after production into one zip file 
/*
>>install the plugin >> npm i gulp-zip --save-dev
>> require it >> var zip = require('gulp-zip)
>> then create your special compress task like that :
        gulp.task('compress', function() {
            return gulp.src('dist/* another astrict sign/*.*')
                    .pipe(gulp.dest('.')) // the dot sign refers to create the zip file outside the dest folder, in the main directory of the project folder. 
                    .pipe(notify('the project files have been compressed'))
        });
>> then add the compress task inside the watch task like that :
        gulp.watch('dist/* another astrict sign', ['compress'])
>> then run the gulp watch command and see the results...
*/

//twelve task plugin very important called >> vinyl-ftp , with this plugin you can upload your website directly after each change to a website host so the customer can see the results with you while you are working on the project..
/*
>> first install the packge >> npm i vinyl-ftp --save-dev
>> second require the plugin >> var ftp = require('vinyl-ftp')
>>third create this builtin task like that: 
        gulp.task( 'deploy', function () {
            var conn = ftp.create( {
                host:     'the website name that you upload your project to it',
                user:     'username of the hosting of the website',
                password: 'passoword of the hosting of the website',
                parallel: 10,
        });
 
        // using base = '.' will transfer everything to /public_html correctly
        // turn off buffering in gulp.src for best performance
 
        return gulp.src( ['dist/* another astrict/*.*'] >> any folder or files with any extensions inside the dist folder will be uploaded to the host, { base: '.', buffer: false })
        .pipe( conn.newer( '/public_html' )) // only upload newer files, not all the files of the project at each change
        .pipe( conn.dest( '/public_html' )); 
        .pipe('livereload') // to can see the changes directly without reloading the page
    });

    * note that >> /public_html is the main page that the website is uploaded to it, but some cpanels of hosting use (www) folder not (puplic_html) folder to upload the website to it so you must know where the website that you upload your project to it is mainly uploaded,
    then if you go to this website and type the domain like that>> (thewebsite of hosting/dist) 
    so you can view your project in this domain directly, also you can upload your project inside a special page in the website not in the main page of the website and this is recommended for sure,
    so this require a special domain inside the website like this :
        .pipe( conn.newer( '/public_html/clients/clientone')) 
        .pipe( conn.dest( '/public_html/clients/clientone'));

        then you can got to this domain : (the website of hosting/clients/clientone/dist), and you will show the results live.

>> then add the deploy task to the watch task like that:
    gulp.watch(dist/* another astrict/*.*', ['deploy']);

>> then run the gulp watch command and see the results.
*/ 

/*another important information :
    ------------------------------
1-) you can exclude one file from making the task on it inside plugin of files you do the task on them like this:

    gulp.task('js',  function() {
        return gulp.src(['project/js/*.js', '!project/js/two.js']) >> (!) means not.
            .pipe(concat('main.css'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
            .pipe(livereload()) 
    });

2-) you can select a one default task for you page that can be run in the command by just type (gulp) inside the commmand not (gulp and its name), and the command will define it easily. 
    and this by >> gulp.task('default', ['watch' >> for example])

3-) another useful gulp plugins tasks you must take a look on it : 
    (gulp-babel, gulp-replace, gulp-new > for automatic find out the new created files and folders to keep watching, gulp-load-plugins, gulp-rename >>the alternative for gulp-concat & gulp-plumber >> prevent pipe breaking caused by errors from gulp plugins)
*/

///////////////////////////////finish the course gulp v3.9.1/////////////////////////////