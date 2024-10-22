import React from "react";


export default async function About(){
    await new Promise((resolve) => {
        setTimeout(resolve,5000);
    }
)
    return ( 
        <div className="bg-green-300 min-h-screen  items-center justify-center text-center p-4">
            <h1 className="text-7xl font-serif">About Us</h1>
            <p className="text-3xl text-indigo-800 font-serif p-4 text-justify">At Pizza Paradise, we believe that pizza is more than just food—it's a celebration of flavors, a gathering of friends and family, and a canvas for culinary creativity. Established in 1999, our passion for pizza started with a simple goal to create the best pizza experience in town.</p>
           <p className="text-3xl text-indigo-800 font-serif text-justify"> Our commitment to quality begins with our ingredients. We source fresh, locally grown produce and the finest cheeses to craft our dough and sauces from scratch. Each pizza is made to order, ensuring that every slice is as delicious as the last.</p>
           <p className="text-3xl text-indigo-800 font-serif text-justify">Join us on our journey to make every meal memorable and experience the paradise of flavors that awaits you!</p>
            </div>
        
    )
}