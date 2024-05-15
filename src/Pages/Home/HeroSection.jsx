import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="hero_section">
        <div className="hero_section_image">
          <img src="./Pump.png" alt="" />
          <h1>PUMP & ROLL</h1>
          <p>THE KING OF PUMP</p>
        </div>
        <div className="hero_section_links">
          <div>
            <button className="btn">
              <a
                className="social_icons"
                href="https://x.com/pumprollonsol?s=21"
              >
                X
              </a>
            </button>
          </div>
          <div>
            <button class="btn">DEXTOOL</button>
          </div>
          <div>
            <button class="btn">
              <a
                className="social_icons"
                href="https://www.pump.fun/8dg9zKfi5VgZDH6syyw7U9VN2YKyybbgeE15epNwHkTN"
              >
                PUMP FUN
              </a>
            </button>
          </div>
        </div>
        <div className="hero_section_links">
          <div style={{ marginTop: "20px" }}>
            <button class="btn">
              <a className="social_icons" href="https://t.me/PumpRollOnSol">
                TELEGRAM
              </a>
            </button>
          </div>
          <div>
            <button class="btn">SOLSCAN</button>
          </div>
          <div>
            <button class="btn">COIN GECKO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
