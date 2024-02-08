import Image from "next/image";

export default function PicImage({ src, changeMain }) {
    return (
        <Image
            src={src}
            alt="image"
            height={200}
            width={150}
            onClick={() => changeMain(src)}
        ></Image>
    );
}
