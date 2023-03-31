import '../styles/market.css'
import {useEffect, useState} from 'react'
import { supabase } from '../data/productdata.js'



export default function ProductCard() {
    const  [fetchError, setFetchError] = useState(null)
    const [details, setDetails] = useState(null)


    useEffect(() => {
        const fetchDetails = async () => {   
            let { data: products, error } = await supabase
            .from('products')
            .select()
            if(error){
                setFetchError('COULD NOT FETCH')
                setDetails(null)
                console.log(error)
            }
            if(products){
                setDetails(products)
                setFetchError(null)
                console.log(products)
            }
        }
        fetchDetails()
    },[])
    
  return (
    <>
            {fetchError && (<p>{fetchError}</p>)}
            {details && (<div className='flex flex-wrap px-8 w-full gap-12 mx-auto justify-center'>
                {details.map(details => (
                  
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img class="w-full" src={details.imgUrl} alt="product image" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{details.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">
          {details.desc}
        </p>
        <a href={details.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

                ))}
            </div>)}
     </>
  );
}
