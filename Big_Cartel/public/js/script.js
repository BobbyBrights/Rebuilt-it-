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
  * Changement d'effet de la navbar sur l'event scroll
  **/

  var $nav      = $('.navbar');
  var previousPos = -1;

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


  /**
  * Scroll smooth sur l'Event click
  **/
  var links = $('.navbar a');

  $(document).on('click', '.navbar a', function(){
    var indice = $(this).attr('href');
    var _self = this;

    links.each(function(){
      if(this !== _self){
        $(this).removeClass('active')
      }else{
        $(this).addClass('active')
      }
    })

    if($(indice).length === 0)
      return;
    var to = $(indice).offset().top;
    $('html, body').animate({scrollTop: to}, 1000)
  })

});
