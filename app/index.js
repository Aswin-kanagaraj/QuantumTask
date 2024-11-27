const express = require('express')
const app = express();
const db_config = require('./components/dbConfig')
const cors = require('cors');
const auth = require('./components/routes/authRoutes')
db_config();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use('/quantum', auth);
const port = 8080;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
