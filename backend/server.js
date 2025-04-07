const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('app corriendo!');
});

app.listen(port, () => {
    console.log(`la app esta corriendo en el puerto: ${port}`);
});
