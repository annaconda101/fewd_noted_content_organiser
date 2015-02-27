$( document ).ready(function() {
    console.log ('jQuery works');
    $('#ham-menu').on( 'click', function() {
    	console.log('clicking works!');
    	$('.open-menu-ul').slideToggle("slow");
  	});
});