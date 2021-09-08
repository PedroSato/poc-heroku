const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        hello: 'world'
    });
});

app.options('/register');
app.post('/register', (req, res) => {
    res.json({
        hello: 'world'
    });
});

app.listen(process.env.PORT || 3000);