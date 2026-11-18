import express from 'express' //imp. server come, dove

const app = express()
const port = process.env.APP_PORT

//rotta
app.get('/', (req, res) => {
    res.send('start server');
});

//start server
app.listen(port, () => {
    console.log(`start server http://localhost:${port}`);
    
});
