import Image from "next/image";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaPinterestP,
    FaLinkedinIn,
} from "react-icons/fa";

const socialIcons = [
    { name: "Facebook", Icon: FaFacebookF },
    { name: "Twitter", Icon: FaTwitter },
    { name: "Instagram", Icon: FaInstagram },
    { name: "YouTube", Icon: FaYoutube },
    { name: "Pinterest", Icon: FaPinterestP },
    { name: "LinkedIn", Icon: FaLinkedinIn },
];

export default function Footer() {
    return (
        <footer className="bg-[#333338] px-4 py-10 text-grey-400">
            <div className="mx-auto max-w-7xl">
                {/* Logo between horizontal lines */}
                <div className="flex items-center gap-6">
                    <div className="h-px flex-1 bg-gray-600" />

                    <Image
                        src="/main-icon-white.png"
                        alt="Book My Screen"
                        width={160}
                        height={40}
                        className="h-10 w-auto"
                    />

                    <div className="h-px flex-1 bg-gray-600" />
                </div>

                {/* Social icons */}
                <div className="my-8 flex flex-wrap justify-center gap-4">
                    {socialIcons.map(({ name, Icon }) => (
                        <span
                            key={name}
                            role="img"
                            aria-label={name}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-[#333338]"
                        >
              <Icon aria-hidden="true" className="text-xl" />
            </span>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-center text-xs leading-6">
                    Copyright © {new Date().getFullYear()} Book My Screen.
                    All rights reserved .
                </p>
            </div>
        </footer>
    );
}