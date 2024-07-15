import React, { useState, useEffect } from 'react';
import api from "../api";
import Card from '../components/Card';
import "../styles/Listing.css"

const Listing= () => {
    const [listings, setListings] = useState([]);
   

    useEffect(() => {
        getproducts();
    }, []);

    const getproducts = () => {
        api.get("/api/products/")
        
            .then((res) => res.data)
            .then((data) => {
                setListings(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };



    const displayListings = () => {
        let display = [];
        let result = [];

        listings.map(listing => {
            return display.push(
                <Card     
                title={listing.title}
                price={listing.price}
                discount_price={listing.discount_price}
                category={listing.category}
            
              
                description={listing.description}
                photo_main={listing.photo_main }
              
              /> 
                
            );
        });
        console.log(display.length)
         let j=0;
        for (let i = 0; i < listings.length; i++) {
            result.push(
                <div key={i+j} className='row'>
                    <div className='col-1-of-6'>
                        {display[i+j]}
                    </div>
                    <div className='col-1-of-6'>
                        {display[i+1+j] ? display[i+1+j] : null}
                    </div>
                    <div className='col-1-of-6'>
                        {display[i+2+j] ? display[i+2+j] : null}
                    </div>
                    <div className='col-1-of-6'>
                        {display[i+3+j] ? display[i+3+j] : null}
                    </div>
                    <div className='col-1-of-6'>
                        {display[i+4+j] ? display[i+4+j] : null}
                    </div>
                    <div className='col-1-of-6'>
                        {display[i+2+j] ? display[i+2+j] : null}
                    </div>

                </div>
            );
            j+=2
        }
        console.log(result.length)

        return result;
    };





    return (
        <main className='listings'>

            <section className='listings__listings'>
                {displayListings()}
            </section>
     
        </main>
    );
};

export default Listing;