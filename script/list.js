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
        var picture = $(this).find('picture').text();
        $('<li></li>')
           .html("<div>""<div class='img'>"+"<img src='../picture/" + picture + "'/>"+"</div>" +"<div class='cont'>"+ title +"</div>"+"<div>"+ address +"</div>"+"</div>"+ "<br/>")
            .appendTo(ul);
       });
   }
   });
})