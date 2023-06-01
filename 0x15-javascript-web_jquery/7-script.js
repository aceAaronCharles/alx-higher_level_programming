// Perform an AJAX GET request to fetch the character data
$.ajax({
  url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
  method: 'GET',
  success: function(response) {
    // Extract the character name from the response
    var characterName = response.name;

    // Display the character name in the <div> element with the ID 'character'
    $('#character').text(characterName);
  },
  error: function() {
    console.log('Error: Failed to fetch character data.');
  }
});

