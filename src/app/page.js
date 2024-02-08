import Image from "next/image";
import cover1 from "@/../public/Beige_Modern_Mindfulness_Book_Cover/1.png";
import cover2 from "@/../public/Under_The_Sea_Coloring_/1.png";
import cover3 from "@/../public/What_we_can_sell_1/1.png";
import Link from "next/link";

export default function BookPage() {
    return (
        <div className="flex justify-center items-center h-[100vh] w-[100vw] flex-row gap-16">
            <Link href="books/1">
                <Image src={cover1} alt="front cover" height={300}></Image>
            </Link>
            <Link href="books/2">
                <Image src={cover2} alt="front cover" height={300}></Image>
            </Link>
            <Link href="books/3">
                <Image src={cover3} alt="front cover" height={300}></Image>
            </Link>
            <div className=""></div>
        </div>
    );
}
