import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#171d22] text-white py-10 px-6 md:px-10 lg:px-18">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <h2 className="text-xl md:text-4xl font-semibold mb-4 md:mb-0">
            {" "}
            Cine<span className="text-[#E2D609]">Seek</span>
          </h2>
          <nav className="flex-1 flex justify-center  space-x-6 mb-4 md:mb-0">
            {["Home", "Movies", "Contact", "Privacy Policy"].map(
              (movies, index) => (
                <Link
                  key={index}
                  href={`/${movies.toLowerCase()}`}
                  className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold"
                >
                  {movies}
                </Link>
              )
            )}
          </nav>
          <div className="flex space-x-4">
            <a
              href="http://twitter.com"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-[#e2d609]"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="http://facebook.com"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-[#e2d609]"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="http://instagram.com"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-[#e2d609]"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy;2025 CineSeek.All rights reserved</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
