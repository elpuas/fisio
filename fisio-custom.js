jQuery(document).ready(function( $ ) {
    console.log('jQuery');

 $.when( $('.fisioEventsDate').length > 0 ).done(
   function( eventsDateMod ) {
   eventsDate = $('.fisioEventsDate > div');
   console.log(eventsDate);
  });
});
