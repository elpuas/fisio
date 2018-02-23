jQuery(document).ready(function( $ ) {

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
      var eventsDate = $(".fisioEventsDate p").text();
      console.log(eventsDate);
    });

 /**
   function( eventsDateMod ) {
   eventsDate = $('.fisioEventsDate p').text();
   console.log(eventsDate);
  });
  */
});
