import React from 'react';
import Product from './Product';
import ijsblokjes from './assets/ijsblokjes.jpg';
import limoenen from './assets/limoenen.png';
import citroenen from './assets/citroenen.jpeg';
import { ReactComponent as ShoppingCart } from './assets/winkelmandje.svg';
import './App.css';

function App() {
    const [messageValue, setMessageValue] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    function sendForm() {
        console.log(`Het bericht: "${messageValue}" is succesvol verzonden.`);
        setSubmitted(true);
    }


  return (
      <>
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
          <footer>
                <div className="form-container">
                    <h2>Contactformulier</h2>
                    <form>
                        <input
                            name="message"
                            placeholder="Typ hier jouw bericht"
                            type="text"
                            className={messageValue.length > 20 ? 'input-error' : ''}
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />

                        <label htmlFor="terms-and-conditions">
                            <input
                                type="checkbox"
                                name="terms-and-conditions"
                                id="terms-and-conditions"
                                checked={checkedTerms}
                                onChange={() => toggleCheckedTerms(!checkedTerms)}
                            />
                            Ik ga akkoord met de algemene voorwaarden
                        </label>
                        {messageValue.length > 20 && <p className="error-message">Dit bericht is te lang!</p>}
                    </form>
                    <button
                        disabled={!checkedTerms}
                        type="submit"
                        onClick={sendForm}
                        >
                        Verstuur
                    </button>
                </div>
          </footer>
      </fragment>
      </>
  );
}

export default App;
