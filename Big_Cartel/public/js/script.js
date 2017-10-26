'use strict';

$(window).ready(function(){

  /**
  * Chargement de la vidéo
  **/

  const opt = {
    posterType: 'none',
    loop: true,
    resizing: true,
  }

  $('.container_intro').vide('asset/video/1.mp4', opt);
  /**
  * Variable global
  **/
  var links = $('.navbar a');
  var sections = [];
  var from_id = [];
  var last_id = null;
  links.each(function(){
    sections.push($(this).attr('href'))
  })

  console.log(sections);
  /**
  * Changement d'effet de la navbar sur l'event scroll
  **/

  var $nav        = $('.navbar');
  var previousPos = -1;

  $(window).on('scroll',function(){
    var scrollPos = $(this).scrollTop();

    // Changement détail de la navbar
    if(scrollPos >= 70){
      if(previousPos < scrollPos){
        $nav.addClass('hidden');
        previousPos = scrollPos;
      }else{
        $nav.removeClass('hidden');
        previousPos = scrollPos;
      }
    }

    // Écoute sur scroll pour l'ajout ou le retrait de class
    for(var i in sections){
      var section = $(sections[i])
      var sectionPos = (typeof section.offset() === 'object')? section.offset().top : null

      if(sectionPos !== null && scrollPos > sectionPos){
        from_id = section.attr('id');
      }
      if(scrollPos < sectionPos){
        from_id = null
      }
    }

    console.log(from_id)

    if(from_id !== last_id){
      last_id= from_id;
      console.log(last_id +'='+ from_id)

      $('.navbar a').removeClass('active');
      $('.navbar a[href="#'+last_id+'"]').addClass('active');
    }
  })


  /**
  * Scroll smooth sur l'Event click
  **/

  $(document).on('click', '.navbar a', function(){
    var indice = $(this).attr('href');
    var _self = this;

    if($(indice).length === 0)
      return;
    var to = $(indice).offset().top;
    $('html, body').animate({scrollTop: to+1}, 1000)
  })

});
