import HeaderTopBar from "./HeaderTopBar";
import HeaderMiddleBar from "./HeaderMiddleBar";

import Navbar from "./NavBar";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      {/* Top Bar */}
      <HeaderTopBar />

      {/* Middle Bar */}
      <HeaderMiddleBar />

      {/* Bottom Bar */}
      <Navbar />
    </header>
  );
}
