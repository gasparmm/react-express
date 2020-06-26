const express = require('express');
const app = express();

const customers = [
    {id: 1, firstName: 'Miguel', lastName: 'Gaspar'},
    {id: 2, firstName: 'Peter', lastName: 'Parker'},
    {id: 3, firstName: 'Megan', lastName: 'Fox'}
]

app.get('/api/customers', (req, res) => {
    res.json(customers);
});

app.post('/api/addNewCustomer', (req, res) => {
    //implement POST method
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});