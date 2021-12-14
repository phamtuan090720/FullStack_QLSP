const express = require('express');
const cors = require('cors')
const router = require('./routers/index.js');
const app = express();
const port = 8000;

// set up cors để FE Reactjs có thể truy cập API
app.use(cors());

app.use(express.json());

app.use('/api',router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/`);
});