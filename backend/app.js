import express from 'express';
import router from './router.js';
import cors from 'cors';

const app = express();
app.use(cors(
    {
        origin: ['http://localhost:5173', 'https://circular-economy.onrender.com'], // Permite requisições do frontend
        methods: ['GET', 'POST'], // Permite apenas métodos GET e POST
        allowedHeaders: ['Content-Type'] // Permite apenas o cabeçalho Content-Type
    }
));
app.use(express.json());
app.use('/formularios', router);

app.get('/', (req, res) => {
    res.send('API funcionando!');
});


app.listen(3000, () => {
    console.log('Server listening on port ', 3000);
})