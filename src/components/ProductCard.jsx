import '../styles/market.css'
import {useEffect, useState} from 'react'
import { supabase } from '../data/productdata.js'



export default function ProductCard() {
    const  [fetchError, setFetchError] = useState(null)
    const [details, setDetails] = useState(null)


    useEffect(() => {
        const fetchDetails = async () => {
            const {data, error } =  await supabase
            .from('products')
            .select()

            if(error){
                setFetchError('COULD NOT FETCH')
                setDetails(null)
                console.log(error)
            }
            if(data){
                setDetails(data)
                setFetchError(null)
            }
        }
        fetchDetails()
    },[])
    
  return (
    <div className="basic_block w-[23em] ">
     
      <div className="div_content">
        <ul role="list" className="feat_list">
          <li>
            <div className="features_icon"></div>
          </li>
          <li className="about_caption">
            <div className="basic-text">Organization</div>
          </li>
          <li className="about_subtitle">
            <div className="subtitle-small">
              All slides were named and organized into separate files
            </div>
          </li>
        </ul>
      </div>
      <div>
        hey
            {fetchError && (<p>{fetchError}</p>)}
            {details && (<div>
                {details.map(details => (
                    <p>{details.title}</p>
                ))}
            </div>)}
        </div>
    </div>
  );
}
