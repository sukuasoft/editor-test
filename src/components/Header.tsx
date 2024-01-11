import { logo } from "@/assets";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 border-b border-b-[#e6ebf4]">
            <Link href="/">
                <img src={logo.src} alt="logo" className="w-28 object-contain" />
            </Link>

            <a className="font-inter font-medium bg-[#000000] text-white text-sm px-6 py-3 rounded-md" target="_blank" href="https://github.com/SacredDoggo/online-code-editor-compiler" rel="noopener noreferrer">
                {/* <FaGithub /> */}
                Github
            </a>
        </header>
    )
};

export default Header;