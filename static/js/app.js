// from data.js
var tableData = data;
console.log(tableData);

// Table References
var tbody = d3.select("tbody");

// Define functions
var inputDate = d3.select("#datetime");
var filtButton = d3.select("#filter-btn");


function buildTable(data) {
    // Clear existing data
    tbody.html("");
  
    // Loop through each object in the data
    // Append a row and cells for each value
    data.forEach((dataRow) => {
      // Append a row to the table body
      var row = tbody.append("tr");
      console.log("Inside buildTable");    
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);
        console.log("Filling the TableData"); 
      });
    });
  }

// Call the Function
buildTable(tableData);

// On click filter the data and redisplay the data on the page
filtButton.on("click", function() {
    // Prevent refresh
    d3.event.preventDefault();
    // Retrieve input date
    var dateValue = inputDate.property("value");
    // Filtering table data by the input date
    var filtData = tableData.filter(fData => (fData.datetime == dateValue));
    console.log(filtData);
    //Clear all previuos data from UFO table
    tbody.html("");
    buildTable(filtData);
});





  
