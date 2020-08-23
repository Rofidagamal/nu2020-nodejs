//Write file  
// Data which will write in a file. 
const fs = require('fs') 

let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
fs.writeFile('text.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 
//Read file
  
fs.readFile('text.txt', (err, data) => { 
    if (err) throw err; 
  
    console.log(data.toString()); 
})
