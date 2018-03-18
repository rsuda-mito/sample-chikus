import express from 'express';

const app = express();
const port = 3001;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen (port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
});

app.get("/", (req, res, next) => {
    res.render('index');
});