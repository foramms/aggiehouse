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
        };
        
        reader.readAsText(file);
    } else {
        alert('Please select a file.');
    }
}

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
