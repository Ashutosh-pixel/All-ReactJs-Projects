import './Card.css'
import { useState } from "react";

function Card({id, image, info, price, name, removeCard}) {

    let updatedinfo = info;

    let [readinfo, setReadinfo] = useState(false); //state variable

    const readMore = () =>{
        setReadinfo(!readinfo);
        // console.log(readinfo);
    }

    // console.log(id , image);
    return (
        <div className="card">

            <img src={image} className="image" alt="" />

            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>₹ {price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>

                <div className='description'>
                    {readinfo ?info : `${info.substring(0,200)}...`}
                    <span className='read-more' onClick={readMore}>
                        {readinfo ? 'Show Less':'Read More'}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeCard(id)}>
                Not Intrested
            </button>
        </div>  
    );
}


export default Card;


