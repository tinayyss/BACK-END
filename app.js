const express = require('express');
const bodyParser = require('body-parser');

//Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(bodyParser.json());
const cors = require ('cors');
app.use(cors());

app.get ('/', function(req, res){
    res.send('Christine Flor, ILY');
});

// Endpoint Here
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/dept', departmentRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/student', studentRoutes);

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT} `);

});