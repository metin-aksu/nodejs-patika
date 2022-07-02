
import fs from "fs";

const filePath = "employees.json";
const data1 = '{"name":"Employee 1 Name","salary":1000}';
const data2 = '{"name":"Employee 2 Name","salary":2000}';

// CREATING FILE
fs.writeFile(filePath, data1, (err) => {
    if (err) console.log("Error occured while creating file");
    else console.log("File successfully created");
});

// READING FILE
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) console.log("Error occured while reading file");
    else console.log(data);
});

// APPENDING FILE

fs.appendFile(filePath, ",\n" + data2, (err) => {
    if (err) console.log("Error occured while appending file");
    console.log("New data successfully appended to file");
});

// CHECKING FILE EXISTENCE AND DELETE FILE
fs.exists(filePath, (result) => {
    if (result) {
        fs.unlink(filePath, (err) => {
            if (err) console.log("Error occured while deleting file");
            else console.log("File successfully deleted");
        });
    }
});
