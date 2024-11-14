$( document ).ready(function() {
    $( ".sort" ).sortable({
        connectWith: ".connectSort",
        receive: function( event, ui ) {
          $(this).css({"background-color":"green"});
        }
      }).disableSelection();
      $('.add-button').click(function() {
          var txtNewItem = $('#new_text').val();
          $(this).closest('div.notepad').find('ul').append('<li class="note">'+txtNewItem+'</li>');
        
      });   
});