import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        <div className="palette">
          <div className="palette-scheme palette-scheme--vertical">
            <img className="scheme-image" src="/img/mimosa-retreat.jpg" alt="Mimosa Retreat" />
            <div className="scheme-colors">
              <div className="scheme-color" style={{ backgroundColor: '#583e26' }} >#583e26</div>
              <div className="scheme-color" style={{ backgroundColor: '#a78b71' }} >#a78b71</div>
              <div className="scheme-color" style={{ backgroundColor: '#f7c815' }} >#f7c815</div>
              <div className="scheme-color" style={{ backgroundColor: '#ec9704' }} >#ec9704</div>
              <div className="scheme-color" style={{ backgroundColor: '#9c4a1a' }} >#9c4a1a</div>
            </div>
          </div>
          <div className="palette-info">
            <h2>Mimose Retreat</h2>
            <p>Brown, combined with shades of yellow, is a rather unusual combination that can be called really sweet. It is both citrusy, caramel, and has a slight hint of cinnamon, which gives it a special versatility. In summer it will invigorate, make you act and move, and in winter it will warm and relax.</p>

            <p>Photo by <a href="https://unsplash.com/photos/XkiONXX7i4o" target="_blank">Sara Cervera</a>.</p>
          </div>
        </div>
        
        <div className="palette">
          <div className="palette-scheme palette-scheme--horizontal">
            <img className="scheme-image" src="/img/ocean-waves.jpg" alt="Ocean Waves" />
            <div className="scheme-colors">
              <div className="scheme-color" style={{ backgroundColor: '#012e4a' }} >#012e4a</div>
              <div className="scheme-color" style={{ backgroundColor: '#036280' }} >#036280</div>
              <div className="scheme-color" style={{ backgroundColor: '#378ba4' }} >#378ba4</div>
              <div className="scheme-color" style={{ backgroundColor: '#81bece' }} >#81bece</div>
              <div className="scheme-color" style={{ backgroundColor: '#e8ede7' }} >#e8ede7</div>
            </div>
          </div>
          <div className="palette-info">
            <h2>Ocean Waves</h2>
            <p>Wildlife has given humanity an indescribable variety of color shades that, at first glance, cannot be combined for balance. However, the combination of dark greens canonically turns into a bright light green shade, growing into banana yellow. From the yellow tones, a sudden rich pink breaks through.</p>

            <p>Photo by <a href="https://unsplash.com/photos/wc9avd2RaN0" target="_blank">Christoffer Engström</a>.</p>
          </div>
        </div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
