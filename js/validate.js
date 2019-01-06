(function( $ ){
 
$(function() {
 
  $('.rf').each(function(){
    
	var form = $(this),
        btn = form.find('.button');
 
    
	form.find('.req').addClass('empty_field');
 
  
    function checkInput(){
      form.find('.req').each(function(){
        if($(this).val() != ''){
         
		$(this).removeClass('empty_field');
        } else {
          
		$(this).addClass('empty_field');
        }
      });
    }
 
   
    function lightEmpty(){
      form.find('.empty_field').css({'background':'#fdafa4'});
      
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },1500);
    }
 
    
    setInterval(function(){
      
	  checkInput();
     
      var sizeEmpty = form.find('.empty_field').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },1500);
 
    
    btn.click(function(){
      if($(this).hasClass('disabled')){
        
		lightEmpty();
        return false
      } else {
       
        form.submit();
      }
    });
  });
});
 
})( jQuery );