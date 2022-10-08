import React, { useState } from "react";
import "./App.scss";
import Backer from "./components/Backer/Backer";
import Header from "./components/Header/Header";
import Mastercraft from "./components/Mastercraft/Mastercraft";

const data={
  totalBacked:89914,
  totalBackers:5007,
  backed:100000,
  dayLeft:56,
}

const App = () => {
  return (
    <main className="main">
      <Header />
      <div className="main__section">
        <Mastercraft />
        <Backer />
        <section className="no-border">
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
