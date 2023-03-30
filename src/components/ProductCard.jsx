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
            {details && (<div>
                {details.map(details => (
                    <div className="div_content w-[29em]">
                    <ul role="list" className="feat_list">
                      <li>
                        <div className="features_icon"></div>
                      </li>
                      <li className="about_caption">
                        <div className="basic-text">{details.title}</div>
                      </li>
                      <li className="about_subtitle">
                        <div className="subtitle-small">
                          {details.desc}
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
            </div>)}
     </>
  );
}
