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
      var eventsDate = $(".fisioEventsDate p").text().replace('/', '');
      console.log(eventsDate);
      console.log(this);
      eventsDate.html(function(i, v) {
        return v.replace(/(\d)/g, '<span>$1</span>');
      });
    });

 /**
   function( eventsDateMod ) {
   eventsDate = $('.fisioEventsDate p').text();
   console.log(eventsDate);
  });
  */
});
