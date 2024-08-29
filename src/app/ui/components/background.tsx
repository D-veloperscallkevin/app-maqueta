import Image from "next/image";
import background from "@/public/R.jpeg"

export default function Background() {
    return(
        <Image
        alt="background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
        objectFit: 'cover'
        }}
        className="backgroundImage"
        />
    )
}