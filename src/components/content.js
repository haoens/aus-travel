import React, { useState, useEffect } from "react";
import "./content.css";
import star from '../images/white-star.png';
import {GoogleMap, useLoadScript, Marker} from '@react'


let attractionArr = [];

attractionArr = [
    {
        name: "Sydney Zoo",
        rating: 5,
        user_ratings_total: 36,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
        formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia",
        types: [ "zoo", "tourist_attraction", "point_of_interest", "establishment" ],
    },
    {
        name: "Zoo1",
        rating: 5,
        photo: "https://lh3.googleusercontent.com/p/AF1QipMHnu0CodKauJMYKhPIzbIami28iinAXkmFhR5M=s1360-w1360-h1020" 
    },
    {
        name: "Sydney Zoo",
        rating: 5,
        user_ratings_total: 36,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
        formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia"
    },
    {
        name: "Sydney Zoo",
        rating: 5,
        user_ratings_total: 36,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
        formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia"
    },
    {
        name: "Sydney Zoo",
        rating: 5,
        user_ratings_total: 36,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
        formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia"
    },
    {
        name: "Sydney Zoo",
        rating: 5,
        user_ratings_total: 36,
        photo: "https://taronga.org.au/sites/default/files/2023-02/TCSA_buy_tickets_1000x818_0.jpg",
        formattedAddress: "50 Peter Brock Dr, Eastern Creek NSW 2766, Australia"
    },
]

const attractions = attractionArr.map((attraction) => {
    
    return (
        <div className="attraction">
            <div className="overlay"></div>
            <div className="attraction-image-container">
                <img 
                    className="attraction-image"
                    src={attraction.photo} 
                    alt="picture of two giraffes at Sydney Zoo"
                />
            </div>
            <div className="attraction-body">
                <span 
                    style={{
                        display:"flex", 
                        justifyContent:"space-between",
                        padding: "5px 0px 5px 0px",
                        // fontWeight: "normal",
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
                            {attraction.user_ratings_total && 
                            `(${attraction.user_ratings_total})`}
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
                        value={"Open Now"}
                    />
                    <Categories types={attraction.types}/>
                    {/* <LineInfo field="Contact" value={"0123456789"}/> */}
                </div>
            </div>
        </div>
    )
})

const Content = () => {

    useEffect(() => {

    })


    return (
        <div>
            <h1>Check out Sydney's Top Zoos!</h1>
            <div className="attractions">
                {attractions}
            </div>
        </div>
    )
}

function LineInfo( {field, value} ) {
    return (
        <div className="body-info-line">
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
                {value? value.split(", ").map((line) => <div>{line}</div>) : "N/A"}
            </div>
            <hr/>
        </div>
    )
}

function Categories( {types} ){

    let formatted_types = null;
    if (types) {
        if (Array.isArray(types)) {
            formatted_types = types.map((type) => {
                return (
                    <div className="category">
                        {formatCategory(type)}
                    </div>
                );
            })
        }
    }
    
    return (
        <div className="body-info-line">
            <span>
                Categories:
            </span>
            <div className="categories-container">
                {formatted_types}
            </div>
            {/* <div
                style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "white",
                    marginBottom: "5px"
                }}>
                {value? value.split(", ").map((line) => <div>{line}</div>) : "N/A"}
            </div>
            <hr/> */}

        </div>
    )
}

function formatCategory(categoryName){
    if (typeof categoryName === "string") {
        categoryName = categoryName.split("_").map((word) => {
            return word.length > 2 ? 
                word.charAt(0).toUpperCase() + word.slice(1) :
                word;
        }).join(" ");
        return categoryName
    }
    else {
        return "N/A"
    }
}

export default Content;