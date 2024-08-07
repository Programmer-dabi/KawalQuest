const app = require('express')();
const PORT = 8000;

var name = "melqui";
app.listen(
    PORT,
    () => console.log(`running on http://localhost:${PORT}`)
)

app.get('/sayhello', (req , res) => {
    res.status(200).send({
        name:name,
        message:`hello ${name}`
    })
});

