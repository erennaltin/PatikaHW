const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });

fs.readFile("employees.json", "utf8", (err, data) => {
    console.log(data);
})

fs.appendFile('employees.json', ',\n{"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err) => {
    if (err) console.log(err)
})

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});
