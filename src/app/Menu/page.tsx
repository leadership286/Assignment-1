import React from "react";
import Image from "next/image";
import image from "../public/pizza.jpeg"; 

export default function Menu() {
    return (
        <div>
            <div className="bg-fuchsia-400 min-h-screen p-4 flex justify-between items-start">
                
                <div>
                    <h1 className="font-serif text-6xl mb-4">Our Menu 🍕🌶️🧀🍅🍕</h1>
                    <ul className="text-4xl list-disc pl-5 mt-2">
                        <li>Margherita</li>
                        <li>Pepperoni</li>
                        <li>BBQ Chicken</li>
                        <li>Veggie</li>
                        <li>Meat Lovers</li>
                        <li>Sicilian</li>
                        <li>Philly Cheesesteak</li>
                        <li>Spinach and Feta</li>
                        <li>Pesto</li>
                        <li>Pesto Chicken</li>
                        <li>White Pizza</li>
                        <li>Taco Pizza</li>
                        <li>Tandoori Chicken</li>
                    </ul>
                </div>
                
                <div>
                    <Image
                        src="/pizza.jpeg" 
                        alt="Pizza"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
}
