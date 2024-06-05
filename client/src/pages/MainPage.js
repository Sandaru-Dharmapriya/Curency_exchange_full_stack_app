import React, { useState } from 'react'

export default function MainPage() {
    
    //states for form fields
    const[date, setDate]=useState(null);
    const[sourceCurrency, setSourceCurrency]=useState("");
    const[targetCurrency, setTargetCurrency]=useState("");
    const[amountInSourceCurrency, setAmountInSourceCurrency]=useState(0);
    const[amountIntargetCurrency, setAmountInTargetCurrency]=useState(0);

    //handle submite method
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };
    

  return (
    <div className='mt-5 flex items-center justify-center flex-col'>
        <h1 className=' lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies Today</h1>

        <p className='mt-10 text-3xl text-center text-gray-500 dark:text-gray-400' >
        "Step right into "Transform Your Currency Now"!</p>

        <p className='mt-10 text-2xl text-center text-gray-500 dark:text-gray-400 '>This platform offers seamless currency conversions using the most up-to-date exchange rates.
        Whether you're plotting a journey, organizing your finances, or just intrigued by the worth 
        of your money across various currencies, this utility is at your service."</p>

        <div className='mt-5 flex items-center justify-center flex-col'>
            <section className='w-full lg:w-99'>
                <form onSubmit={handleSubmit} >
                    <div class="mb-4">
                        <label htmlForfor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input 
                            onChange={(e)=>setDate(e.target.value)}
                            type="Date"
                            id={date}
                            name={date}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>

                    <div class="mb-4">
                        <label htmlForfor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                        <select type="text"
                            onChange={(e)=>setSourceCurrency(e.target.value)}
                            id={sourceCurrency}
                            name={sourceCurrency}
                            value={sourceCurrency}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                            placeholder="Select the source curruncy"
                            required
                        >
                            <option>
                                select the source currency
                            </option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label htmlForfor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Targer Currency</label>
                        <select type="text"
                        onChange={(e)=>setTargetCurrency(e.target.value)}
                            id={targetCurrency}
                            name={targetCurrency}
                            value={targetCurrency}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                            placeholder="Select targer currency"
                            required
                        >
                            <option>Select the targer currency</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label htmlForfor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source currency</label>
                        <input type="number"
                            onChange={(e)=>setAmountInSourceCurrency(e.target.value)}
                            id={amountInSourceCurrency}
                            name={amountInSourceCurrency}
                            value={amountInSourceCurrency}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                            placeholder="Amount in source currency"
                            required
                        />
        
                        <button  className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md'>
                            
                            Get the targer currency
                        </button>

                    </div>
                </form>
            </section>
        </div>
    </div>
    
    
  )
}
