const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// All currencies
app.get("/getAllCurrencies", async (req, res) => {
    const nameURL = `https://openexchangerates.org/api/currencies.json?app_id=e70e24e39680415a892438719c359c62`;
    
    try {
        const namesResponse = await axios.get(nameURL);
        const nameData = namesResponse.data;
        return res.json(nameData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch currency names" });
    }
});

//get the target amount
app.get("/convert",async (req,res)=>{

    const{date,
        sourceCurrency,
        targetCurrency,
        amountInSourceCurrency,}=req.query;

        try {
            
            const dataURL=`https://openexchangerates.org/api/historical/${date}.json?app_id=e70e24e39680415a892438719c359c62`;

            const dataResponse = await axios.get(dataURL);
            const rates= dataResponse.data.rates;

            //rates
            const sourceRate = rates[sourceCurrency];
            const targetRate = rates[targetCurrency];

            const targetAmount = (targetRate/sourceRate)* amountInSourceCurrency;

            return res.json(targetAmount);


        } catch (error) {
            console.log(error);
        }
})

// Listen to a port
app.listen(5000, () => {
    console.log("SERVER STARTED");
});
