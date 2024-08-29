import Image from "next/image";
import LogoTest from "@/public/logo-testing.png"

export default function Logo() {
    return(
        <Image
        src={LogoTest}
        alt="logo"
        width={30}
        className="logo"
        />
    )
}