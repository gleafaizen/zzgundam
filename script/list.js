$(function(){
    $.ajax({
    url: 'ra-men.xml',
    type: 'GET',
    dataType: 'xml',
    timeout: 1000,
    error: function(){
        alert("request timed out. try again!");
    },
    success: function(xml){
    $('.firstChild').remove();
    $(xml).find('J').each(function(){
        var title = $(this).find('TITLE').text();
        $('<li></li>')
           .html(title + "<br/>")
            .appendTo('ul');
       });
   }
   });
})