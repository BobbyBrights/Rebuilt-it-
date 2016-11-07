/*global module:false*/
module.exports = function (grunt) {

  // Project configuration.

    grunt.initConfig({
    // Task configuration.
        server:{
                   port: 3000,
                   base: './public'
            },

        watch: {
            slim:{
                files: ["views/slim/*.slim"],
                      tasks: ["slim"]
            },
            pug:{
                files: ["views/pug/*.pug"],
                tasks: ["pug"]
            },
            sass:{
                files: ["views/sass/*.scss"],
                tasks: ["sass"]
                }
        },

        pug: {
            compile: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: 'views/pug/',
                    src: ['{,*/}*.pug'],
                    dest: 'public/',
                    ext: '.html'
                }]
            }
        },
        slim: {
            compile: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: 'views/slim/',
                    src: ['{,*/}*.slim'],
                    dest: '',
                    ext: '.html'
                }]
            }
        },
        sass: {
        compile:{
            options:{
                style: 'expanded'
            },
            files: [{
                expand:true,
                cwd: 'views/sass/',
                src:['{,*/}*.scss'],
                dest:'public/css/',
                ext:'.css'
                }]
            }
        }
    });

  // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-slim');

  // Default task.
    grunt.registerTask('default', ['pug', 'watch', 'sass']);

};
