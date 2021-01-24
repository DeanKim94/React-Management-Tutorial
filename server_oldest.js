const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([ 
        {
            'id': 1,
            'image':'https://placeimg.com/64/64/1',
            'name': '홍길숙',
            'birthday': '951222',
            'gender': '여자',
            'job': '중학생'
          },
          {
            'id': 2,
            'image':'https://placeimg.com/64/64/2',
            'name': '홍숙',
            'birthday': '951222',
            'gender': 'boy',
            'job': '선생님'
          },
          {
            'id': 3,
            'image':'https://placeimg.com/64/64/3',
            'name': '기길숙',
            'birthday': '941222',
            'gender': 'girl',
            'job': 'programmer'
          }
        ]);
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));