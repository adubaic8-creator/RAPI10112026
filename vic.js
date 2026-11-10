const express=require ("express");
const app=express();
const PORT=3000;

const axios = require("axios");

app.get('/', (req,res)=>{
    res.send("Dobrodošli na API za chuk norrisove viceve!");
});

app.get('/chuck', async (req, res) => {
    try{
        const odgovor = await axios.get("https://api.chucknorris.io/jokes/random");
        res.json({šala: odgovor.data.value});
    }
    catch (error) {
        res.status(500).send("Dogodila se greška");
    }
});

app.listen(PORT,()=>{
    console.log(`Server je pokrenut na portu ${PORT}`);
});