const app = require('express')();
const PORT = 8000;

var name = "melqui";
app.listen(
    PORT,
    () => console.log(`running on http://localhost:${PORT}`)
)

