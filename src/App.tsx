import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <main className="main">
      <Header />
      <div className="main__mastrercraft">
        <section className="main__mastrercraft__section">
          <img
            className="main__mastrercraft__section__logo"
            src="./images/logo-mastercraft.svg"
            alt="Logo mastercraft"
          />
          <h1 className="main__mastrercraft__section__title">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="main__mastrercraft__section__group">
            <button className="btn">Back this project</button>
            <button className="main__mastrercraft__section__btn">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle
                    className="main__mastrercraft__section__btn__cicle"
                    fill="#2F2F2F"
                    cx="28"
                    cy="28"
                    r="28"
                  />
                  <path
                    className="main__mastrercraft__section__btn__path"
                    fill="#B1B1B1"
                    d="M23 19v18l5-5.058L33 37V19z"
                  />
                </g>
              </svg>
              Bookmark
            </button>
          </div>
        </section>
        <section>
          <div>
            <div>
              <h2>$89,914</h2>
              <p>of $100,000 backed</p>
            </div>
            <div className="line"></div>
            <div>
              <h2>5,007</h2>
              <p>total backers</p>
            </div>
            <div className="line"></div>
            <div>
              <h2>56</h2>
              <p>days left</p>
            </div>
          </div>
          <div className="barra-progreso"></div>
        </section>

        <section className="no-border ">
          <h3>About this project</h3>
          <p>
            {" "}
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand. Featuring artisan
            craftsmanship, the simplicity of design creates extra desk space
            below your computer to allow notepads, pens, and USB sticks to be
            stored under the stand.
          </p>
        </section>

        <section>
          <div>
            <h3>Bamboo Stand</h3>
            <p>Pledge $25 or more</p>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and youâ€™ll be added to a special
            Backer member list.
          </p>

          <div>
            <h4>
              101 <span className="h4--span">left</span>
            </h4>
            <button>Select Reward</button>
          </div>
        </section>

        <section>
          <div>
            <h3>Black Edition Stand</h3>
            <p>Pledge $75 or more</p>
          </div>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. Youâ€™ll be added to our Backer member list. Shipping is
            included.
          </p>

          <div>
            <h4>
              64 <span className="h4--span">left</span>
            </h4>
            <button>Select Reward</button>
          </div>
        </section>

        <section>
          <div>
            <h3>Mahogany Special Edition</h3>
            <p>Pledge $200 or more</p>
          </div>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. Youâ€™ll be added to our Backer member list.
            Shipping is included.
          </p>

          <div>
            <h4>
              0 <span className="h4--span">left</span>
            </h4>
            <button>Select Reward</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
