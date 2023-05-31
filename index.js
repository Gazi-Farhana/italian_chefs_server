const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const chefs = require('./data/chefs.json')


//middleware
app.use(cors());
app.use(express.json());


app.get('/chefs', (req, res) => {
    res.send(chefs)
});
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    if (id <= chefs.length) {
        const singleChef = chefs.find(chef => chef.id == id)
        res.send(singleChef)
    } else {
            res.send('No Data Found')
    }


});
app.get('/', (req, res) => {
    res.send('The Web is running')
});


app.listen(port, () => {
    console.log(`listening port 5000`);
});