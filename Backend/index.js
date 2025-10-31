const express = require('express');
const cors = require('cors');  
const app = express();

app.use(cors());

var email = "roozo@123.com";
var password = 123;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {

    if(req.body.email === email && req.body.password == password){
        res.send(true);
    }else{
        res.send(false);
    }
});

// app.listen(3000, () => {
//     console.log('Server is started...');
// }); 

export default app;