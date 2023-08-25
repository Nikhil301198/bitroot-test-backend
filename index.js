const express=require('express');
const app = express();
const route = require('./contactRoutes');

app.use(express.json());
app.use('/', route);
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});