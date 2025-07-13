import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hfeatures = () => {
  return (
    <div className="w-[500px] mx-auto mt-4 bg-gray-200 text-black py-4 px-4 text-center rounded-t-md rounded-b-lg text-base font-bold">
      <Typewriter
        words={[
          '⚡ Fast Delivery for All Orders',
          '🔥 Up to 50% Off on Electronics',
          '🛍️ Trusted by 10,000+ Sellers',
          '💳 Secure Payments & Easy Returns',
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={40}
        deleteSpeed={20}
        delaySpeed={1500}
      />
    </div>
  );
};

export default Hfeatures;
