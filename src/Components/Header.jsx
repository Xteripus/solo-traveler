import { BiWorld } from "react-icons/bi";
function Header() {
  return (
    <header className="flex items-center justify-center gap-3 text-xl py-4 bg-[#F55A5A] text-white">
      <BiWorld />
      <h1>my travel journal.</h1>
    </header>
  );
}

export default Header;
