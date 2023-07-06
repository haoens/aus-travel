import React from "react";
import "./content.css";

const attractionArr = [
    {
        name: "Zoo1",
        rating: 5,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg" 
    },
    {
        name: "Zoo1",
        rating: 5,
        photo: "https://lh3.googleusercontent.com/p/AF1QipMHnu0CodKauJMYKhPIzbIami28iinAXkmFhR5M=s1360-w1360-h1020" 
    },
    {
        name: "Zoo1",
        rating: 5,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg" 
    },
    {
        name: "Zoo1",
        rating: 5,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg" 
    },
    {
        name: "Zoo1",
        rating: 5,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg" 
    },
    {
        name: "Zoo1",
        rating: 5,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg" 
    },
]

const attractions = attractionArr.map((attraction) => {
    return (
        <div className="attraction">
            <div className="attraction-image-container">
                <img 
                    className="attraction-image"
                    src={attraction.photo} 
                    alt="picture of two giraffes at Sydney Zoo"
                />
            </div>
            <div classname="attraction-body">
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <span><strong>{attraction.name}</strong></span>
                    <span>{attraction.rating.toFixed(2)}</span>
                </span> 
                <br/>
                
            </div>
        </div>
    )
})

const Content = () => {
    return (
        <div className="attractions">
            {attractions}
        </div>
    )
}

export default Content;