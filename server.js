const express = require('express') // now application has access to express 
const app = express() // using express 
const PORT = 8000

const rappers = { // creating an object
    '21 savage':{
        'age': 29, // comma is necessary 
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation':'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chanelor Bennett',
        'birthLocation':'Chicago, Illinois'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation':'Dylan'
    },
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname +'/index.html')
})

app.get('/api/:rapperName', (request,response)=>{ // : lets us know it's a query parameter
    const rappersName = request.params.rapperName.toLowerCase()//convert to lowercase
    if(rappers[rappersName]){ //using[] instead of .(dot notation) because some rapperNames contain spaces
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
    //response.json(rappers)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})

