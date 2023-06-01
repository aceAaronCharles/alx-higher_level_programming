$(document).ready(function() {
  // Perform an AJAX GET request to fetch the translation
  $.ajax({
    url: 'https://fourtonfish.com/hellosalut/?lang=fr',
    method: 'GET',
    success: function(response) {
      // Extract the translation of "hello" from the response
      var translation = response.hello;

      // Display the translation in the <div> element with the ID 'hello'
      $('#hello').text(translation);
    },
    error: function() {
      console.log('Error: Failed to fetch translation data.');
    }
  });
});

