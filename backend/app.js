import express from 'express';
import router from './router.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/formularios', router);

app.get('/', (req, res) => {
    res.send('API funcionando!');
});


app.listen(3000, () => {
    console.log('Server listening on port ', 3000);
})