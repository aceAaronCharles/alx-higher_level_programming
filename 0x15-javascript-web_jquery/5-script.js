// Attach a click event handler to the <div> element with the ID 'add_item'
$('#add_item').click(function() {
  // Create a new <li> element
  var newItem = $('<li>Item</li>');
  
  // Append the new element to UL.my_list
  $('ul.my_list').append(newItem);
});

