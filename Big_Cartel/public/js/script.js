$(document).ready(function(){
  console.log('loaded!');
  $('.container_intro').vide('asset/video/1.mp4');
  $('.logo_nav').mouseover(function(){
    $('.navbar').css("transform","translateY(0px)")
  });
  $('.logo_nav').mouseout(function(){
    $('.navbar').css("transform","translateY(-70px)")
  });

});
