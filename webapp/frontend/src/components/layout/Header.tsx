import Image from "next/image";
import Link from "next/link";

const navigationPages = [
  {
    name: "Demo",
    href: "/",
  },
  {
    name: "Live",
    href: "/live",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Header = () => {
  return (
    <nav className="max-w-7xl mx-auto mt-4 rounded shadow-md px-6 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/KwameAILogo.png"
            alt="Kwame AI Logo"
            width={20}
            height={20}
          />
          <span className="font-semibold text-xl tracking-tight">
            NSMQ - KWAME AI
          </span>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  text-white tracking-wide uppercase">
            {navigationPages.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.href}
                  className="block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
