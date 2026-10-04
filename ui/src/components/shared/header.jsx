import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaBars, FaChevronDown } from "react-icons/fa";

const categories = [
    "Movies",
    "Stream",
    "Events",
    "Plays",
    "Sports",
    "Activities",
];

export default function Header() {
    return (
        <header className="w-full text-gray-800">
            {/* Top navigation */}
            <div className="bg-white px-4 py-4">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
                    {/* Logo and search */}
                    <div className="flex flex-1 items-center gap-6">
                        <Link href="/" aria-label="Go to homepage">
                            <Image
                                src="/main-icon.png"
                                alt="Book My Screen"
                                width={160}
                                height={40}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>

                        <div className="relative hidden w-full max-w-xl sm:block">
                            <FaSearch
                                aria-hidden="true"
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="search"
                                aria-label="Search"
                                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                                className="w-full rounded border border-gray-300 py-2 pl-10 pr-3 text-sm outline-none focus:border-rose-500"
                            />
                        </div>
                    </div>

                    {/* Static controls */}
                    <div className="flex items-center gap-5">
                        <button
                            type="button"
                            className="flex items-center gap-2 text-sm"
                        >
                            Mumbai
                            <FaChevronDown
                                aria-hidden="true"
                                className="text-xs"
                            />
                        </button>

                        <button
                            type="button"
                            className="rounded bg-rose-500 px-5 py-1.5 text-sm text-white"
                        >
                            Sign in
                        </button>

                        <button type="button" aria-label="Open menu">
                            <FaBars className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom navigation */}
            <nav
                aria-label="Categories"
                className="bg-gray-100 px-4 py-3"
            >
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-5 text-sm">
                        {categories.map((category) =>
                            category === "Movies" ? (
                                <Link key={category} href="/movies">
                                    {category}
                                </Link>
                            ) : (
                                <span key={category}>{category}</span>
                            )
                        )}
                    </div>

                    <div className="flex items-center gap-5 text-xs">
                        <span>List Your Show</span>
                        <span>Corporates</span>
                        <span>Offers</span>
                        <span>Gift Cards</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}