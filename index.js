const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: 'Pokemon',
    size: 'Large'
  })
});

app.post("/tshirt/:id", (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        req.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `Tshirt with your ${logo} and ID of ${id}`,
    })

})