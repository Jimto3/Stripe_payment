"use client";
import { useState } from "react";
import Image from "next/image";
import PicImage from "@/app/components/PicImage";
import { checkout } from "../../../../checkout";

const images = {
    1: {
        content0: require("@/../public/Beige_Modern_Mindfulness_Book_Cover/1.png"),
        content1: require("@/../public/Beige_Modern_Mindfulness_Book_Cover/2.png"),
        content2: require("@/../public/Beige_Modern_Mindfulness_Book_Cover/3.png"),
        content3: require("@/../public/Beige_Modern_Mindfulness_Book_Cover/4.png"),
        content4: require("@/../public/Beige_Modern_Mindfulness_Book_Cover/5.png"),
        content5: require("@/../public/Beige_Modern_Mindfulness_Book_Cover/6.png"),
        content6: require("@/../public/Beige_Modern_Mindfulness_Book_Cover/7.png"),
    },
    2: {
        content0: require("@/../public/Under_The_Sea_Coloring_/1.png"),
        content1: require("@/../public/Under_The_Sea_Coloring_/2.png"),
        content2: require("@/../public/Under_The_Sea_Coloring_/3.png"),
        content3: require("@/../public/Under_The_Sea_Coloring_/4.png"),
        content4: require("@/../public/Under_The_Sea_Coloring_/5.png"),
        content5: require("@/../public/Under_The_Sea_Coloring_/6.png"),
        content6: require("@/../public/Under_The_Sea_Coloring_/7.png"),
    },
    3: {
        content0: require("@/../public/What_we_can_sell_1/1.png"),
        content1: require("@/../public/What_we_can_sell_1/2.png"),
        content2: require("@/../public/What_we_can_sell_1/3.png"),
        content3: require("@/../public/What_we_can_sell_1/4.png"),
        content4: require("@/../public/What_we_can_sell_1/5.png"),
        content5: require("@/../public/What_we_can_sell_1/6.png"),
        content6: require("@/../public/What_we_can_sell_1/7.png"),
    },
};

export default function BuyBooks({ params }) {
    // Generate image source dynamically based on params.id
    const src0 = images[params.id]?.content0;
    const src1 = images[params.id]?.content1;
    const src2 = images[params.id]?.content2;
    const src3 = images[params.id]?.content3;
    const src4 = images[params.id]?.content4;
    const src5 = images[params.id]?.content5;
    const src6 = images[params.id]?.content6;
    const [main, setMain] = useState(src0);

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="flex justify-center mt-8">
                <Image src={main} alt="front cover" height={300}></Image>
            </div>
            <div className="border-2 border-black rounded h-auto min-h-[200px] flex flex-row justify-center items-center mt-16 gap-2 bg-teal-300">
                <PicImage src={src0} changeMain={changeMain} />
                <PicImage src={src1} changeMain={changeMain} />
                <PicImage src={src2} changeMain={changeMain} />
                <PicImage src={src3} changeMain={changeMain} />
                <PicImage src={src4} changeMain={changeMain} />
                <PicImage src={src5} changeMain={changeMain} />
                <PicImage src={src6} changeMain={changeMain} />
            </div>
            <button
                className="mt-4 bg-green-500 p-2 border-2 border-white font-bold font-mono hover:bg-green-600 hover:text-black transition-colors"
                onClick={() =>
                    checkout({
                        lineItems: [
                            {
                                price: "price_1OhDQEDej9x0gzNhUObaHStw",
                                quantity: 1,
                            },
                        ],
                    })
                }
            >
                Buy Now!
            </button>
        </div>
    );

    function changeMain(src) {
        setMain(src);
    }
}
