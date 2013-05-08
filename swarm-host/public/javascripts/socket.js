var socket = io.connect("//" + location.host);

socket.on('stats', function (data) {
  $.each(data, function(id, values) {
    $.each(values, function(key, value) {
      if(key.match(/strategy$/)) {
        if(value == "hidden") {
          $('#' + id.replace(/\./g,'\\.') + " .screen_strategy").fadeOut('slow');
        }
        else {
          $('#' + id.replace(/\./g,'\\.') + " .screen_strategy").fadeIn('slow');
        }
      }
      else {
        if(key.match(/status$/)) {
          $('#' + id.replace(/\./g,'\\.') + " ."+ key).removeClass().addClass(value).addClass('status').html(value);
        }
        else {
          $('#' + id.replace(/\./g,'\\.') + " ."+ key).html(value);
        }
      }
    });
  });
});
