import React from "react";

export default function Home() {
  return (
    <div className="bg-orange-400 min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="bg-lime-400 font-semibold rounded-md text-7xl mb-4 p-4">
      🍕 Welcome to Pizza Paradise! 🍕
      </h1>
      <p className="text-5xl max-w-2xl">
        "Experience the joy of handcrafted pizzas, made with the freshest ingredients. 
        From classic Margherita to gourmet toppings, we have something for everyone. 
        Join us for a slice of happiness or order online for quick delivery!""
      </p>
    </div>
  );
}
