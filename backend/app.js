import express from 'express';
import router from './router.js';

const app = express();
app.use(express.json());
app.use('/formularios', router);

app.get('/', (req, res) => {
    res.send('API funcionando!');
});


app.listen(3000, () => {
    console.log('Server listening on port ', 3000);
})