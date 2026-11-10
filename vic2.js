const express=require ("express");
const app=express();
const axios = require("axios");
const PORT=3000;

app.get('/', (req,res)=>{
    res.send("Dobrodošli na API za viceve!");
});

app.get('/vicevi', async (req, res) => {
    try{
        const odgovor = await axios.get("https://v2.jokeapi.dev/joke/Any?format=json");
        res.json({šala: odgovor.data.setup + " " + odgovor.data.delivery});
       
    }
    catch (error) {
        res.status(500).send("Dogodila se greška");
    }
});


app.listen(PORT,()=>{
    console.log(`Server je pokrenut na portu ${PORT}`);
});