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
          console.log('is small than 425px');
          $("#layerslider_1").css("height", viewportHeight);
        }
        console.log("width: " + viewportWidth + "\n" + "Height: " + viewportHeight );
        $(window).resize(function() {
          if( viewportWidth < 425 ) {
            $("#layerslider_1").css("height", viewportHeight);
          }
        });
      });



    /*
    waitForElement(".fisioEventsDate",function(){

      console.log("Cargo Fisio");
      var eventsDate = $(".fisioEventsDate").text().slice();
      console.log("Sin Separator: " + eventsDate + "\n");


    var whiteBackground = $('.fisio-prof__grid--container > .vc_column-inner');

    if( whiteBackground.length > 0 ) {
            // console.log('Si Existe');
            // Select and loop the container element of the elements you want to equalise
            whiteBackground.each(function(){

              // Cache the highest
              var highestBox = 0;

              // Select and loop the elements you want to equalise
              $('.wpb_wrapper:first-child', this).each(function(){
                console.log(this);

                // If this box is higher than the cached highest then store it
                if($(this).height() > highestBox) {
                  highestBox = $(this).height();
                  console.log('esta es la mas larga:' + highestBox);
                }

              });

              // Set the height of all those children to whichever was highest
              $('.fisio-prof__grid--container > .vc_column-inner  > .wpb_wrapper').css({"height" : (highestBox + "px")});

            });
        }
      });

 /**
   function( eventsDateMod ) {
   eventsDate = $('.fisioEventsDate p').text();
   console.log(eventsDate);
  });
  */
});
