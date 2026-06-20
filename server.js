require("dotenv").config();

const express = require("express")
const app = express()
const path = require("path");
const PORT = process.env.PORT;

app.use(express.json())

app.use((req, res, logRequest)=>{
    console.log(`The method is ${req.method} while the url is ${req.url} ping at ${new Date()}`)

    logRequest()
})


// app.get("/" ,(req, res)=>{
//     res.send("My Week 2 API")
// })

app.post("/user", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({
            error: "Please provide name and email"
        });
    }
    res.status(200).json({
        responseMessage: `Hello ${name}`
    });
});

app.get("/user/:id", (req, res) => {
    const { id } = req.params;

    res.send(`User ${id} Profile`);
});

app.get("/test", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});




app.listen(PORT, ()=>{
    console.log(`App is listening at port ${PORT}`)
})