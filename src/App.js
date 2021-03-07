import React from 'react';
import Product from './Product';
import ijsblokjes from './assets/ijsblokjes.jpg';
import limoenen from './assets/limoenen.png';
import citroenen from './assets/citroenen.jpeg';
import { ReactComponent as ShoppingCart } from './assets/winkelmandje.svg';
import './App.css';

function App() {
  return (
      <fragment>
          <nav>
          <ul>
              <li >
                  <a href="/">Shop</a>
              </li>
              <li>
                  <a href="/">Ons verhaal</a>
              </li>
              <li>
                  <a href="/">Blog</a>
              </li>
          </ul>
          <ShoppingCart className ="shopping-cart-icon" />
          </nav>
          <header>
              <h1>Fruit perfection</h1>
              <button type="button"
              onClick={() => console.log("Jij wil shoppen")}>
                  Shop nu
              </button>
                <main>
                    <Product
                        image={citroenen}
                        title="Citroen"
                        description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                    />
                    <Product
                        image={limoenen}
                        title="Limoenen"
                        description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                    />
                    <Product
                        image={ijsblokjes}
                        title="Ijsblokjes"
                        description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                    />
                </main>
          </header>
      </fragment>
  );
}

export default App;
