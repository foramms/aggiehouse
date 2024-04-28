// JavaScript for typewriter effect
function displayTime(){
   var d = new Date();
   var hour = d.getHours(); // 0-23
   var min = d.getMinutes(); // 0-59
   var sec = d.getSeconds(); // 0-59
   var amOrPm = "AM";
   if(hour >= 12)
   {
     amOrPm = "PM";
   }
   if(hour > 12)
   {
     hour = hour - 12;
   }
   if(hour < 10)
     hour = "0" + hour;
   if(min < 10)
     min = "0" + min;
   if(sec < 10)
     sec = "0" + sec;
   var month = d.getMonth() + 1; // Months are zero-based
   var day = d.getDate();
   var year = d.getFullYear();
      var dateString = month + "/" + day + "/" + year;
   document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + amOrPm;
   document.getElementById("date").innerHTML = dateString; // Display the date
 }
 setInterval(displayTime, 1000);


 function uploadFile() {
   var fileInput = document.getElementById('fileInput');
  
   if (fileInput.files.length > 0) {
       var file = fileInput.files[0];
       var reader = new FileReader();
      
       reader.onload = function(e) {
           var csvContent = e.target.result;
           var filteredData = filterCSV(csvContent, filterCriteria);
          
           // Process or display the filtered data here
           console.log(filteredData);
           checkTimeAndDate();
       };
      
       reader.readAsText(file);
   } else {
       alert('Please select a file.');
   }
}

function filterAndProcessCSV(csvData) {
  // Implement your logic to filter and process the CSV data here
  // For example, you can split the CSV data into rows and process each row
  // This function should return the filtered data or null if no data is found
  return csvData; // Placeholder, replace with your actual filtering and processing logic
}

const fs = require('fs');

function checkTimeAndDate() {
  var d = new Date();
  var hour = d.getHours(); // 0-23
  var min = d.getMinutes(); // 0-59
  // Add your condition here to check if the current time matches your criteria
  // For example, if you want to check if it's 1 hour before 7pm
  if (hour === 18 && min === 0) {
      // Call function to alert volunteers
      alertVolunteers();
  }
}

function alertVolunteers() {
  // Get person's name and find corresponding email address
  var personName = "John Doe"; // Example name, replace with actual name
  var emailAddress = "john@example.com"; // Example email, replace with actual email

  // Send email (code to send email would go here, this is just a placeholder)
  // For demonstration purposes, we'll just show an alert
  alert("Email sent to " + personName + " at " + emailAddress);
}

// Function to read and log CSV data
function readAndLogCSV() {
   try {
       // Read the CSV file synchronously
       const content = fs.readFileSync('/Users/Meigan/Downloads/volunteer.csv', 'utf8');


       // Split the content into rows and then into arrays of values
       const rows = content.split('\n').map(row => row.split(','));


       // Log each row to the console
       for (let i = 0; i < rows.length; i++) {
           console.log(rows[i]);
       }


   } catch (error) {
       console.error('Error reading the file:', error);
   }
}


// Call the function to read and log CSV data
readAndLogCSV();


function filterCSV(csvData, filterCriteria) {
   var rows = csvData.split('\n');
   var filteredRows = [];
  
   for (var i = 0; i < rows.length; i++) {
       var columns = rows[i].split(',');
      
       if (filterCriteria(columns)) {
           filteredRows.push(columns);
       }
   }
  
   return filteredRows;
}


function filterCriteria(row) {
   // Implement your filtering criteria here
   // For example, filter rows where the age (column index 1) is greater than 25
   return parseInt(row[1]) > 25;
}
