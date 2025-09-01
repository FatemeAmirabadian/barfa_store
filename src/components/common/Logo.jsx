export default function Logo({ size = "h-10" }) {
    return (
      <a href="/" className={`inline-block ${size}`}>
        <img
          src="/images/logo.png" // مسیر لوگو
          alt="فروشگاه ما"
          className="w-auto h-full"
        />
      </a>
    );
  }
  