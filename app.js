import express from 'express' //imp. server come, dove
import giochiRouter from './routers/giochiRouter.js';
import notFound from './middldewares/notFound.js';
import errorHandler from './middldewares/errorHandler.js';

const app = express()
const port = process.env.APP_PORT;

//abilitazione p.
app.use(express.json());

//rotta
app.get('/', (req, res) => {
    res.send('start server');
});
app.use('/giochi', giochiRouter);


//gestori di errore
app.use(notFound);//non trovato
app.use(errorHandler);//sv.
//start server
app.listen(port, () => {
    console.log(`start server http://localhost:${port}`);
    
});
