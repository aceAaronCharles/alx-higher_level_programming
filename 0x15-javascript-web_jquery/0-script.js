<!DOCTYPE html>
<html>
<head>
    <title>Update the Header Text Color</title>
    <style>
	/*Optinal CSS styles for the header element*/
	header {
	   font-size: 24px;
	   font-weight: bold;
	}
    </style>
</head>
<body>
   <header>
	This is the header text
   </header>

   <script>
	// Select the <header> element using document.querySelector 
	var headerElement = document.querySelector('header');
       // Update the Text Color to red
       headerElement.style.color = '#FF0000';
   </script>
</body>
</html>

