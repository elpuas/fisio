jQuery(document).ready(function( $ ) {
  //
  function waitForElement(elementPath, callBack){
      window.setTimeout(function(){
        if($(elementPath).length){
          callBack(elementPath, $(elementPath));
        }else{
          waitForElement(elementPath, callBack);
        }
      },500)
    }
    waitForElement(".fisioEventsDate",function(){
      console.log("Cargo Fisio");
      var eventsDate = $(".fisioEventsDate").text().slice();
      console.log("Sin Separator: " + eventsDate + "\n");
    });

    var whiteBackground = $('.fisio-prof__grid--container');

    if( whiteBackground.length > 0 ) {
            // console.log('Si Existe');
            // Select and loop the container element of the elements you want to equalise
            whiteBackground.each(function(){

              // Cache the highest
              var highestBox = 0;

              // Select and loop the elements you want to equalise
              $('.wpb_wrapper', this).each(function(){
                console.log(this);

                // If this box is higher than the cached highest then store it
                if($(this).height() > highestBox) {
                  highestBox = $(this).height();
                  console.log(highestBox);
                }

              });

              // Set the height of all those children to whichever was highest
              $('.fisio-prof__grid--container > vc_column-inner  > .wpb_wrapper').css({"height" : (highestBox + "px")});

            });
        }

 /**
   function( eventsDateMod ) {
   eventsDate = $('.fisioEventsDate p').text();
   console.log(eventsDate);
  });
  */
});
