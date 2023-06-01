$(document).ready(function() {
  // Add item to the list
  $('#add_item').click(function() {
    $('<li>').text('Item').appendTo('ul.my_list');
  });

  // Remove last item from the list
  $('#remove_item').click(function() {
    $('ul.my_list li:last-child').remove();
  });

  // Clear the entire list
  $('#clear_list').click(function() {
    $('ul.my_list').empty();
  });
});

