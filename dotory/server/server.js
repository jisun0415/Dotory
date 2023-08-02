const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));

app.post("/upload", (req, res) => {
  

  const newpath = __dirname + "/files/";
  console.log("path ="+newpath);
  
  const file = req.files.file;
  const filename = file.name;
  
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.send({ message: "File upload failed"});
    }
    res.send({ message: "File Uploaded"});
  });
});

app.listen(3001, () => {
  console.log("Server running successfully on 3001");
});