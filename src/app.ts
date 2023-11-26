import express from 'express';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const app = express();

app.get('/', (req, res) => {
    return res.send('welcome to auth service');
});

export default app;
