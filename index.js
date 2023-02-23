const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(express.json())

app.get('/',async(req,res)=>{
    res.send('Danriyal solution server is running.')
})
app.get('/test',async(req,res)=>{
    res.send('Danriyal solution server test is successful.')
})

app.listen(port,()=>console.log(`server running on port ${port}`))