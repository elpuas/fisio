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
      var eventsDate = $(".fisioEventsDate p").text().replace(/\//g, '<br />');
      console.log("Sin Separator: " + eventsDate + "\n");
      eventsDate = eventsDate.substring( 0, result.length-4 );
      console.log("Sin 2018: " + eventsDate + "\n");
    });

 /**
   function( eventsDateMod ) {
   eventsDate = $('.fisioEventsDate p').text();
   console.log(eventsDate);
  });
  */
});
