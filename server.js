const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/api/customers', (req,res) => {
    res.send([
            {
            
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동',
            'birthday' : '941215',
            'gender' : '남성',
            'job' : '학생'
            
          },
          
          {
            
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '문건우',
            'birthday' : '950601',
            'gender' : '남성',
            'job' : '프로그래머'
            
          },
          
          {
            
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '류기탁',
            'birthday' : '960301',
            'gender' : '남성',
            'job' : '회장'
            
          }
          
          
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));