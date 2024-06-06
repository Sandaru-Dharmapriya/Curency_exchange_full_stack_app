import React, { useEffect, useState } from 'react';
import axios from "axios";



export default function MainPage() {
    
    // States for form fields
    const [date, setDate] = useState(null);
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [currencyNames, setCurrencyNames] = useState([]);

    // Handle submit method
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("http://localhost:5000/convert", {
                params: {
                    date,
                    sourceCurrency,
                    targetCurrency,
                    amountInSourceCurrency,
                },
            });
            setConvertedAmount(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Get all currency names
    useEffect(() => {
        const getCurrencyNames = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/getAllCurrencies"
                );
                setCurrencyNames(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getCurrencyNames();
    }, []);

    return (
        

        <div
        className='mt-5 flex items-center justify-center flex-col min-h-screen' 

        style={{ 
            backgroundImage: `url('/2.jpg')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
    
        >
            <h1 className='lg:mx-32 text-5xl font-bold text-green-700 '>Convert Your Currencies Today</h1>

            <p className='mt-10 text-3xl text-center text-gray-500 dark:text-gray-400' >
                "Step right into "Transform Your Currency Now"!</p>

            <p className='mt-10 text-2xl text-center text-gray-500 dark:text-gray-400 '>This platform offers seamless currency conversions using the most up-to-date exchange rates.
            Whether you're plotting a journey, organizing your finances, or just intrigued by the worth 
            of your money across various currencies, this utility is at your service."</p>

            <div className='mt-5 flex items-center justify-center flex-col'>
                <section className='w-full lg:w-99'>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-4">

                            

                            <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <input 
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                                id={date}
                                name={date}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                            <select
                                onChange={(e) => setSourceCurrency(e.target.value)}
                                id={sourceCurrency}
                                name={sourceCurrency}
                                value={sourceCurrency}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="Select the source currency"
                                required
                            >
                                <option>Select the source currency</option>
                                {Object.keys(currencyNames).map((currency) => (
                                    <option className='p-1' key={currency} value={currency}>
                                        {currencyNames[currency]}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                            <select
                                onChange={(e) => setTargetCurrency(e.target.value)}
                                id={targetCurrency}
                                name={targetCurrency}
                                value={targetCurrency}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="Select target currency"
                                required
                            >
                                <option>Select the target currency</option>
                                {Object.keys(currencyNames).map((currency) => (
                                    <option className='p-1' key={currency} value={currency}>
                                        {currencyNames[currency]}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source currency</label>
                            <input
                                type="number"
                                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                                id={amountInSourceCurrency}
                                name={amountInSourceCurrency}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="Amount in source currency"
                                required
                            />
        
                            <button className='mt-5 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md'>
                                Get the target currency
                            </button>
                        </div>
                    </form>
                    {/* Display the converted amount */}
                    <p class="max-w-lg text-2xl font-semibold leading-loose text-gray-900 dark:text-white">
                        {amountInSourceCurrency} {currencyNames[sourceCurrency]} is equal to {" "} 
                        {convertedAmount} {currencyNames[targetCurrency]}
                    </p>     </section>
            </div>
        </div>
    );
}
