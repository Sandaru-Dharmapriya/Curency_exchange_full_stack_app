import React from 'react'

export default function MainPage() {
  return (
    <div className='mt-5 flex items-center justify-center flex-col'>
        <h1 className=' lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies Today</h1>

        <p>
        "Step right into "Transform Your Currency Now"!
        This platform offers seamless currency conversions using the most up-to-date exchange rates.
        Whether you're plotting a journey, organizing your finances, or just intrigued by the worth 
        of your money across various currencies, this utility is at your service."
        </p>

        <div>
            <section className='w-full lg:w-1/2'>
                <form>
                    <div className='mb-4'>
                    <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                     <input type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                    </div>
                </form>
            </section>
        </div>
    </div>
    
    
  )
}
