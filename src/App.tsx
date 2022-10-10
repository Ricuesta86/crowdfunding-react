import React, { useState } from "react";
import api from "./api";
import "./App.scss";
import Backer from "./components/Backer/Backer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Mastercraft from "./components/Mastercraft/Mastercraft";
import type { dataType } from './type';
import { product } from './type';



const App = () => {
  const [data, setData] = useState<dataType>(api.data.data);
  const [products, setProducts] = useState<product[]>(api.data.list||[]);
  return (
    <main className="main">
      <Header />
      <div className="main__section">
        <Mastercraft />
        <Backer dataInfo={data}/>
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
        <GetStarted products={products}/>        
      </div>
    </main>
  );
};

export default App;
