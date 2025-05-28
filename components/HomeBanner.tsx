import React from "react";
import Title from "./Title";

const HomeBanner = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <Title className="text-3xl md:text-4xl uppercase font-bold text-center text-pink-600">
                From Our Garden to Your Heart
            </Title>
            <p className="text-sm text-center text-pink-400 font-medium max-w-[480px]">
                Discover fresh, handcrafted bouquets for every mood and moment. At our flower shop, beauty blooms daily — perfect for gifts, celebrations, or simply to brighten your day
            </p>
        </div>
    );
};

export default HomeBanner;