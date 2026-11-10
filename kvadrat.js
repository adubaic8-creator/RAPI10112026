const express=require ("express");
const app=express();
const PORT=3000;

app.get("/kvadrat/:n", (req, res) => {
    const broj = Number(req.params.n);

    if (!Number.isInteger(broj)) {
        return res.status(400).json({ error: "Nije unesen ispravan broj" });
    }

    res.json({ rezultat: broj * broj });
});
app.listen(PORT,()=>{
    console.log(`Server je pokrenut na portu ${PORT}`);
});