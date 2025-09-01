import Navigation from "../navigation/Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* لوگو */}
        <Logo size="h-12" />

        {/* اسم فروشگاه (اختیاری اگر لوگو کافی است می‌توان حذف کرد) */}
        <h1 className="text-xl font-bold text-gray-800 hidden md:block">
          فروشگاه ما
        </h1>

        {/* منو */}
        <Navigation />
      </div>
    </header>
  );
}
