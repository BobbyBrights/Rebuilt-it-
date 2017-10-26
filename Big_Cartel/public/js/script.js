'use strict';

$(window).ready(function(){
  /**
  * Chargement de la vidéo
  **/
  $('.container_intro').vide('asset/video/1.mp4');

  var $nav      = $('.navbar');
  var previousPos = -1;

  /**
  * changement d'effet de la navbar sur l'event scroll
  **/

  $(window).on('scroll',function(){
    var scrollPos = $(this).scrollTop();

    if(scrollPos >= 70){
      if(previousPos < scrollPos){
        $nav.addClass('hidden');
        previousPos = scrollPos;
      }else{
        $nav.removeClass('hidden');
        previousPos = scrollPos;
      }
    }
  })

});
