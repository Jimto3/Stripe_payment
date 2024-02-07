import Image from "next/image";

export default function PicImage({ src, changeMain }) {
    return (
        <Image
            src={src}
            alt="image"
            height={300}
            width={200}
            onClick={() => changeMain(src)}
        ></Image>
    );
}
