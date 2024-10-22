import React from "react";


export default function Contact(){
    return(
        <div className="bg-red-300 min-h-screen justify-center items-center text-center">
            <h1 className="bg-amber-300 font-semibold rounded-md text-6xl mb-4 p-7">Contact Us</h1>
            <h2 className="text-orange-700 text-4xl">Get In Touch with Pizza Paradise</h2>
            <ul className="text-2xl font-bold p-3">
                <li>Phone: "Call us at (123) 456-7890 for quick orders or inquiries."</li>
                <li>Email: "Send us an email at contact@pizzaparadise.com."</li>
                <li>Location: "Visit us at Pizza Paradise, 123 Flavor Street, Tasty Town."</li>
            </ul>
          <h3 className="text-9xl ">📱📧🗺️</h3>
        </div>
        
    )
}