// importing
const express = require("express")
const port = 8080;
const studentModel = require("./model/studentdb")
const cors = require("cors")



// iniitialise

const app = new express()


//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()); 

// api create
// post data

app.post("/create", (req, res) => {
    var result = new studentModel(req.body);
    result.save();
    res.send("data added")
})

// to see
app.get("/see",async(req,res)=>{
    var data = await studentModel.find()
    res.json(data)
})

// delete
app.delete('/delete/:id', async(req,res)=>{
    let id = req.params.id
    await studentModel.findByIdAndDelete(id)
    res.send("deleted")
})

// update

app.put("/edit/:id",async(req,res)=>{
    var id = req.params.id
    console.log(req.body);
    await studentModel.findByIdAndUpdate(id,req.body)
    res.send("updated")
})

// app.get(url,callback)

app.get("/view", (req, res) => {
    res.json({
        "name": "jebin",
        "age": 20
    })
})


app.listen(port, () => {
    console.log("app is runnnig in port", port);
})
