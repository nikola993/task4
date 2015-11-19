$(document).ready(function(){
	$.getJSON('public/js/data.json', function(json){
        var a = (json.data);
        console.log(a);
        $.each(a , function( index ) {
            $("#wrap").append(
                "<div class = 'container'>" +
                "<form id = 'form" + index +"'>" +
                "<div class = 'sender' id = 'sender" + index +"'></div>" +
                "<div class = 'date' id = 'date" + index +"'></div>" +
                "<h2 id='subject" + index +"'></h2>" +
                "<textarea disabled wrap='hard' id='txt" + index +"'></textarea>" +
                "<div id='wrap_btn'>" +
                "<div class = 'button' id= "+index+" onclick='reply_message(id)'>Replay</div>" +
                "<div class = 'button' id= "+index+" onclick='delete_message(id)'>Delete</div>" +
                "</div>" +
                "</div>");
            $('#sender' + index ).append(a[index].from.name);
            $('#date' + index ).html(a[index].date_sent_formatted.formatted);
            $('#subject' + index ).html(a[index].subject);
            $('#txt' + index ).html(a[index].message);

        });
        });

});

function delete_message(id){
	console.log('Delete message with id: '+ id);
}

function reply_message(id){
    $.getJSON('public/js/data.json', function(json){
        var a = (json.data);
        //noinspection JSUnresolvedVariable
        var sender = a[id].from.id;
	console.log('Message id: '+id);
	console.log('Reply to: '+ sender);
    });
}