import React, { useEffect, useState } from "react";
import "./content.css";
import star from '../images/white-star.png';
import { getTopZoos, parsePlaceResults } from "./map";
import Categories from "./Categories";

// setAttractionArr([
//     {
//         name: "Sydney Zoo",
//         rating: 5,
//         user_ratings_total: 36,
//         photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
//         formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia",
//         types: [ "zoo", "tourist_attraction", "point_of_interest", "establishment" ],
//     },
//     {
//         name: "Zoo1",
//         rating: 5,
//         photo: "https://lh3.googleusercontent.com/p/AF1QipMHnu0CodKauJMYKhPIzbIami28iinAXkmFhR5M=s1360-w1360-h1020" 
//     },
//     {
//         name: "Sydney Zoo",
//         rating: 5,
//         user_ratings_total: 36,
//         photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
//         formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia"
//     },
//     {
//         name: "Sydney Zoo",
//         rating: 5,
//         user_ratings_total: 36,
//         photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
//         formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia"
//     },
//     {
//         name: "Sydney Zoo",
//         rating: 5,
//         user_ratings_total: 36,
//         photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
//         formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia"
//     },
//     {
//         name: "Sydney Zoo",
//         rating: 5,
//         user_ratings_total: 36,
//         photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
//         formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia"
//     },
// ])

const Content = () => {

    const [attractionArr, setAttractionArr] = useState([]);
    const [placeLoaded, setPlaceLoaded] = useState(false);

    useEffect(() => {
        function callback(results, status) {
            if (status == window.google.maps.places.PlacesServiceStatus.OK) {
                if (Array.isArray(results) && results.length > 0) {
                    console.log(results);
                    setAttractionArr(parsePlaceResults(results));
                    setPlaceLoaded(true);
                }
            }
        }
        getTopZoos(callback);
    }, [])

    useEffect(() => {
        
    }, [placeLoaded]);


    return (
        <div>
            <h1>Check out Sydney's Top Zoos!</h1>
            <div id="map"></div>
            <div className="attractions">
                {displayAttractions(attractionArr)}
            </div>
        </div>
    )
}

function LineInfo( {field, value} ) {
    return (
        <div className="body-info-line" key={field}>
            <span>
                {`${field}: `}
            </span>
            <div
                style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "white",
                    marginBottom: "5px"
                }}>
                {value? value.split(", ").map((line, index) => <div key={index}>{line}</div>) : "N/A"}
            </div>
            <hr/>
        </div>
    )
}



function displayAttractions(attractionArr) {
    const attractions = attractionArr.map((attraction, index) => {
    
        return (
            <div className="attraction" key={index}>
                <div className="overlay"></div>
                <div className="attraction-image-container">
                    <img 
                        className="attraction-image"
                        src={attraction.photo} 
                        alt={`A picture of ${attraction.name}`}
                    />
                </div>
                <div className="attraction-body">
                    <span 
                        style={{
                            display:"flex", 
                            justifyContent:"space-between",
                            padding: "5px 0px 5px 0px",
                            margin: "10px 0px 0px 0px",
                        }}>
                        <span>{attraction.name}</span>
                        <div
                            style={{
                                display:"flex",
                                flexDirection:"row",
                                gap: "5px",
                                alignItems:'center'
                            }}>
                            <img 
                                src={star}
                                style={{
                                    width: "20px",
                                    height: "20px"
                                }}
                            />
                            {attraction.rating.toFixed(2)}
                            <span
                                className="no-ratings"
                            >
                                {attraction.userRatingsTotal && 
                                `(${attraction.userRatingsTotal})`}
                            </span>
                        </div>
                    </span>
                    <div className="body-more-info">
                        <LineInfo 
                            field="Address"
                            value={attraction.formattedAddress}
                        />
                        <LineInfo 
                            field= "Status"
                            value={attraction.status}
                        />
                        <Categories types={attraction.types}/>
                        {/* <LineInfo field="Contact" value={"0123456789"}/> */}
                    </div>
                </div>
            </div>
        )
    })
    return attractions;
}

export default Content;