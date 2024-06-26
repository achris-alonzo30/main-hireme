import Link from "next/link";
import Image from "next/image";

type AppLogoProps = {
    href: string;
    width: number;
    height: number;
}

export const AppLogo = ({
    href,
    width,
    height,
} : AppLogoProps ) => {
    return (
        <Link href={href} className="flex items-center gap-1">
            <Image src="/svg/logo.svg" alt="Letter H Logo & App Logo for the website HireMe" width={width} height={height} />
            <p className="text-white text-sm font-semibold">HireMe</p>
        </Link>
    )
}