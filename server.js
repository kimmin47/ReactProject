const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
res.send([
    {
        'id': 1,
        'image': 'https://placeimg.com/64/64/any',
        'name': '박지민',
        'gender' : '남',
        'job': '가수'
        },
        {
        'id': 2,
        'image': 'https://placeimg.com/64/64/any',
        'name': '박지민',
        'gender' : '남',
        'job': '가수'
        },
        {
        'id': 3,
        'image': 'https://placeimg.com/64/64/any',
        'name': '박지민',
        'gender' : '남',
        'job': '가수'
        }  
]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
