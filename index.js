const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//static folder 
app.use(express.static('public'));
// view engine 
app.set('view engine', 'ejs');

// dashboard homepage 
app.get('/',(req, res)=>{
    res.render('index')
});

app.get('/pitch', (req, res)=>{
    res.render('pitch')
});


app.listen( port, ()=>{
    console.log(`server has started on port ${port}`)
});

