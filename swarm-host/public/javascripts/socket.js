


var socket = io.connect('http://localhost:3000');
socket.on('stats', function (data) {
    $.each(data, function(id, values) {
    $.each(values, function(key, value) {

        if(key.match(/strategy$/)) {
            if(value == "hidden") {
            	$('#' + id + " .screen_strategy").fadeOut('slow');
            }
            else {
            	$('#' + id + " .screen_strategy").fadeIn('slow');
            }
        }
        else {
            if(key.match(/status$/)) {
                $('#' + id + " ."+ key).removeClass().addClass(value).addClass('status').html(value);
            }

        else {
        	   $('#' + id + " ."+ key).html(value);
        	}
        }
    });
});
});
