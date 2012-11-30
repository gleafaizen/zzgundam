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
    var ul = $('#taglist');
    //$('#taglist').remove();
    $(xml).find('J').each(function(){
        var title = $(this).find('TITLE').text();
        var address = $(this).find('Address').text();
        $('<li></li>')
           .html(title + address + "<br/>")
            .appendTo(ul);
       });
   }
   });
})