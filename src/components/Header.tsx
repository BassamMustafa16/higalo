import Image from "next/image";
import Link from "next/link";
import SearchForm from "./SearchForm";
import Cart from "./Cart";
import imagePaths from "@/constants/imagePaths";

export default function Header() {
  return (
    <header className="bg-darkBlue flex flex-col items-center">
      {/* Top Bar */}
      <div className="h-[56px] px-5 flex flex-row gap-5 items-center justify-between text-white max-w-4xl w-full">
        {/* Social Icons */}
        <div className="flex flex-row gap-2">
          <Link href="https://www.facebook.com/" aria-label="Facebook">
            <Image
              width={16}
              height={16}
              src={`${imagePaths.icon}/facebook.svg`}
              alt="Facebook icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/" aria-label="LinkedIn">
            <Image
              width={16}
              height={16}
              src={`${imagePaths.icon}/linkedin.svg`}
              alt="LinkedIn icon"
            />
          </Link>
          <Link href="https://www.yahoo.com/" aria-label="Mail">
            <Image
              width={16}
              height={16}
              src={`${imagePaths.icon}/mail.svg`}
              alt="Mail icon"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-row gap-2 text-sm">
          <Link href="/">Promotion .</Link>
          <Link href="/">Contact .</Link>
          <Link href="/">Frequently asked questions</Link>
        </div>

        {/* Selectors */}
        <div className="flex flex-row gap-2 items-center justify-center">
          <select className="text-sm cursor-pointer" aria-label="Currency">
            <option className="text-black">USD</option>
            <option className="text-black">EGP</option>
            <option className="text-black">AED</option>
          </select>
          <select className="text-sm cursor-pointer" aria-label="Language">
            <option className="text-black">English</option>
            <option className="text-black">عربي</option>
          </select>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="h-[112px] flex flex-row gap-5 lg:gap-15 max-w-4xl w-full justify-between items-center px-5">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            width={92}
            height={62}
            src={`${imagePaths.image}/logo.svg`}
            alt="HIgalo logo"
          />
        </Link>

        {/* Search Bar */}
        <SearchForm />

        {/* Favorite & Cart Icons */}
        <div className="flex flex-row gap-2">
          <Link href="/" aria-label="Favorites">
            <Image
              width={24}
              height={24}
              src={`${imagePaths.icon}/favorite.svg`}
              alt="Favorite icon"
            />
          </Link>
          <Cart />
        </div>
      </div>

      {/* Bottom Bar (reserved for future content) */}
      <nav className="flex flex-row items-center justify-center px-5 h-[56px] bg-white w-full">
        <div className="max-w-4xl w-full">
          <div className="flex flex-row gap-3 items-center ">
            <Image
              width={24}
              height={24}
              src={`${imagePaths.icon}/list-category.svg`}
              alt="List Category Icon"
            />
            <span>Category</span>
            <div>
              <Image
                width={10}
                height={6}
                src={`${imagePaths.icon}/dropdownArrow.svg`}
                alt="dropdown Arrow Icon"
              />
            </div>
          </div>
          <div>
            <Link href="/">Home</Link>
            <Link href="/">
              New Products{" "}
              <span className="py-1 px-2 rounded-full bg-orange text-white">
                New
              </span>
            </Link>
            <Link href="/">Promotions</Link>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  );
}
