$(document).ready(function() {
  // Attach click event handler to the translate button
  $('#btn_translate').click(fetchTranslation);

  // Attach keypress event handler to the language code input field
  $('#language_code').keypress(function(event) {
    // Check if the Enter key was pressed
    if (event.which === 13) {
      fetchTranslation();
    }
  });

  // Function to fetch the translation
  function fetchTranslation() {
    // Get the language code entered by the user
    var languageCode = $('#language_code').val();

    // Perform an AJAX GET request to fetch the translation
    $.ajax({
      url: 'https://www.fourtonfish.com/hellosalut/hello/',
      method: 'GET',
      data: { lang: languageCode },
      success: function(response) {
        // Display the translation in the <div> element with the ID 'hello'
        $('#hello').text(response.hello);
      },
      error: function() {
        console.log('Error: Failed to fetch translation data.');
      }
    });
  }
});

