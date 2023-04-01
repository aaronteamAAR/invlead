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
            {details && (<div className='content grid grid-cols-2 gap-x-[5em] gap-8 item-center place-items-center px-8 mx-auto justify-center'>
            {details.map(details => (
        <a href={details.link} className="cards block w-[26em] py-2 rounded-lg ">
        <p className="my-6 py-4 text-2xl text-center font-medium  text-army ">{details.title}.</p>
        <img className='img-size ' src={details.imgUrl} alt="product image" />
        <p className="font-normal text-army text-center font-normal px-6 py-2">{details.desc}</p>
        </a>
                ))}
            </div>)}
     </>
  );
}
