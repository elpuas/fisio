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

    var whiteBackground = $('.fisio-prof__grid--container > .vc_column-inner');

    waitForElement( whiteBackground, function() {
        whiteBackground.each(function(){
          var highestBox = 0;
          $('.wpb_wrapper', this).each(function(){
                console.log(this);
                if($(this).height() > highestBox) {
                  highestBox = $(this).height();
                  console.log('esta es la mas larga:' + highestBox);
                }
              });
              $('.fisio-prof__grid--container > .vc_column-inner  > .wpb_wrapper').css({"height" : (highestBox + "px")});

            });
        });

 /**
   function( eventsDateMod ) {
   eventsDate = $('.fisioEventsDate p').text();
   console.log(eventsDate);
  });
  */
});
