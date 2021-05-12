const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to database in memory sequelize
// Get routes
const ticketsRouter = require('./routes/ticket');

app.use('/ticket', ticketsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
