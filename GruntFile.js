// Save this snippet as grunt-war.js and run with  "grunt --gruntfile grunt-war.js war" at the command line. 
// Assumes simple layout: 
// -project 
// --build  (The folder where the generated grunt-magic.war file will go) 
// --src    (all the source code, html, etc) 
// --- index.html (The file name must match up with the webxml_welcome: property below) 
module.exports = function ( grunt ) {
    grunt.loadNpmTasks( 'grunt-war' );
 
    var taskConfig = {
        war: {
            target: {
                options: {
                    war_verbose: true,
                    war_dist_folder: 'build',           // Folder path seperator added at runtime. 
                    war_name: 'GeoLogin',            // .war will be appended if omitted 
                    webxml_welcome: 'index.html',
                    webxml_display_name: 'GeoLogin'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        }
    };
 
    grunt.initConfig( taskConfig );
};