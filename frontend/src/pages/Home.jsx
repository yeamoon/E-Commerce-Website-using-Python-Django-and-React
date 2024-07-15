import React, { useState, useEffect } from 'react';
import api from "../api";
import axios from 'axios';


const Home= () => {
    const [listings, setListings] = useState([]);
   

    useEffect(() => {
        getowners();
    }, []);

    const getowners = () => {
        api.get("/api/owners/")
        
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
               
                  listing.name,
                    listing.email,
                    listing.phone,
                   
                
            );
        });
        console.log(display.length)
         let j=0;
        for (let i = 0; i < listings.length; i++) {
            result.push(
                <div key={i+j} className='row'>
                    <div className='col-1-of-3'>
                        {display[i+j]}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+1+j] ? display[i+1+j] : null}
                    </div>
                    <div className='col-1-of-3'>
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

export default Home;