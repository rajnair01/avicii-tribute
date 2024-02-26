function Menu() {
  return (
    <div className="bg-black text-gray-300">
      <div className="">
        <p className="text-center p-10 text-5xl font-caveat">Menu</p>
        <p className="text-2xl px-2 py-5 ">Coffee Selections</p>
      </div>

      <div className="md:flex flex-row">
        <div className="text-gray-300 border md:w-1/2 mx-2 border-gray-100 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Espresso</p>
          <p className="px-2">
            A bold and intense shot of espresso made with our signature blend of
            Arabica beans.
          </p>
          <p className="font-bold px-2 py-4">
            Single Shot: $2.50 | Double Shot: $3.50
          </p>
        </div>

        <div className="text-gray-300 border border-gray-100 md:w-1/2 mx-2 my-6 md:my-0 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Cappuccino</p>
          <p className="px-2">
            A classic Italian favorite, featuring equal parts espresso, steamed
            milk, and foamed milk.
          </p>
          <p className="font-bold px-2 py-4">
            Small: $3.50 | Medium: $4.50 | Large: $5.50
          </p>
        </div>
      </div>

      <div className="md:flex flex-row">
        <div className="text-gray-300 border border-gray-100 md:w-1/2 mx-2 my-6 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Latte</p>
          <p className="px-2">
            Smooth espresso paired with velvety steamed milk, finished with a
            dollop of foam.
          </p>
          <p className="font-bold px-2 py-4">
            Small: $4.00 | Medium: $5.00 | Large: $6.00
          </p>
        </div>

        <div className="text-gray-300 border border-gray-100 md:w-1/2 mx-2 my-6 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Mocha</p>
          <p className="px-2">
            Indulge in the rich flavors of espresso, chocolate, and steamed
            milk, topped with whipped cream.
          </p>
          <p className="font-bold px-2 py-4">
            Small: $4.50 | Medium: $5.50 | Large: $6.50
          </p>
        </div>
      </div>

      <p className="text-2xl px-2 py-5 ">Tea Selections</p>
      <div className="md:flex flex-row">
        <div className="text-gray-300 border border-gray-100 md:w-1/2 mx-2 my-6 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Chai Latte</p>
          <p className="px-2">
            A comforting blend of black tea, spices, and steamed milk, lightly
            sweetened to perfection.
          </p>
          <p className="font-bold px-2 py-4">
            Small: $4.00 | Medium: $5.00 | Large: $6.00
          </p>
        </div>

        <div className="text-gray-300 border border-gray-100 md:w-1/2 mx-2 my-6 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Matcha Latte</p>
          <p className="px-2">
            Energize your day with this vibrant green tea latte, made with
            ceremonial-grade matcha powder.
          </p>
          <p className="font-bold px-2 py-4">
            Small: $4.50 | Medium: $5.50 | Large: $6.50
          </p>
        </div>
      </div>

      <p className="text-2xl px-2 py-5 ">Specialty Drinks</p>
      <div className="md:flex flex-row">
        <div className="text-gray-300 border border-gray-100 md:w-1/2 mx-2 my-6 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Affogato</p>
          <p className="px-2">
            A delightful treat featuring a scoop of vanilla gelato drowned in a
            shot of hot espresso.
          </p>
          <p className="font-bold px-2 py-4">$6.00</p>
        </div>

        <div className="text-gray-300 border border-gray-100 md:w-1/2 mx-2 my-6 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Cold Brew</p>
          <p className="px-2">
            Refreshingly smooth and bold, our cold brew coffee is steeped for 24
            hours and served over ice.
          </p>
          <p className="font-bold px-2 py-4">
            Small: $4.00 | Medium: $5.00 | Large: $6.00
          </p>
        </div>
      </div>

      <p className="text-2xl px-2 py-5 ">Pastries & Snacks</p>
      <div className="md:flex flex-row">
        <div className="text-gray-300 border border-gray-100 md:w-1/2 mx-2 my-6 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Croissant</p>
          <p className="px-2">
            Freshly baked buttery croissant, perfect for pairing with your
            favorite coffee or tea.
          </p>
          <p className="font-bold px-2 py-4">$3.00</p>
        </div>

        <div className="text-gray-300 border border-gray-100 md:w-1/2 mx-2 my-6 rounded-xl hover:bg-gray-300 hover:text-black transition ease-in duration-75">
          <p className="font-bold px-2 py-4">Blueberry Muffin</p>
          <p className="px-2">
            Bursting with juicy blueberries, our homemade muffins are a
            delightful morning treat.
          </p>
          <p className="font-bold px-2 py-4">$3.50</p>
        </div>
      </div>
    </div>
  );
}
export default Menu;
