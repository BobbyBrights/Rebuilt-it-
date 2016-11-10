$(document).ready(function(){
 // Etape principal de cette fonction scrollin sloxw
 // [1].Je récupère touts mes liens de mon de menu puis je l'ai stock dans un tableau
 // [2].J'écoute avec l'évènement ScrollTop le scroll et le positionnement de chaque section avec offset
 // [3].Je rends smoot mon scroll
 var sections= [];
 var id= false;
 var $nav = $('#menulink');
 // Je parcour nav pour chopé tout mes links dans la balises nav ayant l'attrivbut href
 //each est l'iteration loop la plus proche de for
 //j'ai trouvé l'équivalent en boucle for
 // var list_link = $('nav a');
 // for(var i =0; i< list_link.length; i++){
 //   sections.push($($(list_link[i]).attr('href')));
 // }
 $('a', $nav).each(function(){
   var r = $(this).attr('href');
   sections.push(r);
 });
//Function sur evenement click pour menu
 $('nav a').click(function(){
   var id_scroll= $(this).attr('href');
   $('html, body').animate({
     //J'execute la propriété de ma fonction (e)
     scrollTop: $(id_scroll).offset().top},1500);
 });
//
 // Fonction pour écouter le scroll 'e' pour evenment
 $(window).scroll(function(e) {
   var scroll_Top = $(this).scrollTop()+($(window).height()/2);
   $('.navbar').toggleClass("hide",$(this).scrollTop() > 400);
   for(var i in sections){
     var section = sections[i];
     var sectionPosition = section.offset();
     if(scroll_Top > sectionPosition.top){
       scrolled_id = section.attr('id');
     }
   }
     //executer cette function que si l'id change (optimisation)
     if(scrolled_id !== id){
        id = scrolled_id;
       $('a', $nav).removeClass('current');
       $('a[href="#'+ id +'"]', $nav).addClass('current');
         console.log('Menu change pour: '+ id);
      }
 });


 // console.log("Are U ready Ronald?");
 // $(window).scroll(function(){
 //   // console.log($(this).scrollTop());
 //   var scroll_pos = $(window).scrollTop();
 //   if( scroll_pos > 400){
 //     $('nav').fadeIn('slow');//.removeClass('hidden').addClass('showed');
 //   }
 //   else{
 //     $('nav').fadeOut('slow');//.removeClass('showed').addClass('hidden');
 //   }
 // });
});
