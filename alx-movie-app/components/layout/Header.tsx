import React from "react";
import Link from "next/link";
import Button from "../commons/Button";
const Header: React.FC = () => {
  return (
    <div className="">
      <header className="h-28 flex-center bg-[#171d22]  px-4 md:px-16 lg:px-44 text-white">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl md:text-4xl font-semibold">
            Cine <span className="text-[#e2d609]">Seek</span>
          </h2>
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {["Home", "Movies", "Contact"].map((movies, index) => (
              <Link
                key={index}
                href={`/${movies.toLowerCase()}`}
                className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold"
              >
                {movies}
              </Link>
            ))}
          </nav>
          <div className="flex md:hidden">
            <Button title="Sign in" />
          </div>
          <div className="hidden md:flex">
            <Button title="Sign in" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
