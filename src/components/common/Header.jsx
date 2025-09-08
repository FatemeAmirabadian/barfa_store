import Logo from "./Logo";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="bg-gray-50 shadow top-0 z-50">
      <TopBar/>
      <div className="mx-auto flex justify-center items-center h-18">
        <Logo />
      </div>
    </header>
  );
}
