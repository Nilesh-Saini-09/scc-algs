import express from 'express';
import algsRoutes from './routes/algs.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
})

app.use('/algs', algsRoutes);

app.listen(port, () => console.log('server active'));

// app.get('/algs', )

// app.get('/algs/:puzzle', )

// app.get('/algs/:puzzle/:algSet', )

// app.get('/algs/:puzzle/:algSet/:num', )

// app.get('/algs/oll/2x2', (req, res) => {
    
// })