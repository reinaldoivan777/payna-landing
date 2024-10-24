import Logo from "../assets/logo.svg";

function Header() {
  return (
    <nav className="pt-10 px-6 md:px-10 lg:px-120 flex justify-between items-center">
      <a href="#">
        <img src={Logo} alt="Payna logo" />
      </a>
      <div className="hidden lg:flex lg:w-435 lg:justify-between lg:items-center">
        <a href="#" className="font-semibold text-black">
          Home
        </a>
        <a href="#" className="text-black">
          Features
        </a>
        <a href="#" className="text-black">
          Showcase
        </a>
        <a href="#" className="text-black">
          Pricing
        </a>
      </div>
      <button className="hidden md:block w-150 h-12 rounded-50 bg-light-gray text-black">
        Sign In
      </button>
    </nav>
  );
}

export default Header;
