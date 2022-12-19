const { Datastore } = require('@google-cloud/datastore')
const express = require('express');
const app = express();

const datastore = new Datastore()

async function quickstart() {
    const kind = 'Task'
    const name = 'Task1'
    const taskKey = datastore.key([kind, name])
    let p = datastore.get(taskKey)
    p.then(v => {
        debugger
        console.log(v.description)
    })

    // console.log(`saved `)
}
quickstart()

app.get('/', (req, res) => {
    const name = process.env.NAME || 'World';
    res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`helloworld: listening on port ${port}`);
});