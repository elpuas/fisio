jQuery(document).ready(function( $ ) {
  // Global Vars
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  // Wait For Elemen to Exist in DOM
  function waitForElement(elementPath, callBack){
      window.setTimeout(function(){
        if($(elementPath).length){
          callBack(elementPath, $(elementPath));
        }else{
          waitForElement(elementPath, callBack);
        }
      },500)
      }
      waitForElement(".shm-close", function(){
        $(".shm-close").text(" ");
      });
      waitForElement("#layerslider_1", function(){
        if( viewportWidth < 425 ) {
          $("#layerslider_1").css("height", viewportHeight);
        }
        $(window).resize(function() {
          if( viewportWidth < 425 ) {
            $("#layerslider_1").css("height", viewportHeight);
          }
        });
      });
 console.log("%c Made with  💖 and a lot of  ☕ by el.puas | https://elpuas.com ", "color:#fff;background:#000;");
});
