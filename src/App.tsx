import "./App.scss";
import Backer from "./components/Backer/Backer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Mastercraft from "./components/Mastercraft/Mastercraft";



const App = () => {
 
  return (
    <main className="main">
      <Header />
      <div className="main__section">
        <Mastercraft />
        <Backer />
        <section className="main__about">
          <h3 className="main__about__title">About this project</h3>
          <p className="main__about__text text">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand. 
            </p>
            <p className="main__about__text text">
            Featuring artisan
            craftsmanship, the simplicity of design creates extra desk space
            below your computer to allow notepads, pens, and USB sticks to be
            stored under the stand.
          </p>
        <GetStarted />        
        </section>
      </div>
    </main>
  );
};

export default App;
