export default function CartPage() {
    const cartItems = [
      { id: 1, name: "کفش ورزشی", price: 120000, quantity: 1 },
      { id: 2, name: "هدفون", price: 85000, quantity: 2 },
    ];
  
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <main className="p-4 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">سبد خرید</h1>
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between border p-2 rounded">
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>تعداد: {item.quantity}</p>
              </div>
              <p>قیمت: {(item.price * item.quantity).toLocaleString()} تومان</p>
            </div>
          ))}
        </div>
        <div className="mt-4 font-bold text-xl">
          جمع کل: {totalPrice.toLocaleString()} تومان
        </div>
      </main>
    );
  }
  