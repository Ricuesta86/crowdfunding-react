import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import api from "../../api";
import { amount, product } from "../../type";
import Modal from "../Modal/Modal";
import Thanks from "../Thanks/Thanks";
import "./BackThisProject.scss";
import { useAppSelector, useAppDispatch } from "../../reducers/hook";
import {
  backedAdded,
  backersIncremented,
} from "../../reducers/mastercraftReducer";
import { pledgeDecremented } from "../../reducers/pledgeReducer";

type props = {
  handleClose: any;
  pledgeProp: number | undefined;
};
const BackThisProject = ({ handleClose, pledgeProp }: props) => {
  const [products, setProducts] = useState<product[] | []>(api.data.list);
  const amount: amount = useAppSelector(state => state.pledge);
  const dispatch = useAppDispatch();
  const [pledge, setPledge] = useState<number | undefined>(pledgeProp);
  const [text, setText] = useState<number>(pledgeProp ? pledgeProp : 0);
  const [showThanks, setShowThanks] = useState(false);
  const arrayAmount = Object.values(amount);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 414px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(max-width: 414px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let nPledge = Number(event.target.pledge.value);
    let nPrice = Number(event.target.price.value);
    if (nPledge >= nPrice) {
      dispatch(backedAdded({ backed: nPledge }));
      dispatch(backersIncremented({}));
      dispatch(pledgeDecremented({ pledge }));
      // handleClose();
      setShowThanks(true);
    }
  };

  const handleSelect = (value: number) => {
    if (pledge === value) {
      setPledge(undefined)
    } else {
      setPledge(value);
      setText(value);
    }
  };

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  const handleNoReward = () => {
    dispatch(backersIncremented({}));
    setShowThanks(true);
  }

  return (
    <>
      {showThanks ? (
        <Modal handleClose={handleClose} >
          <Thanks handleClose={handleClose} />
        </Modal>
      ) : (
        <Modal close handleClose={handleClose}>
          <div className="thisproject">
            <h3 className="thisproject__title">Back this project</h3>
            <p className="text">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser out
              in the world?
            </p>
            <div className="thisproject__pledge border">
              <div className="group" onClick={() => handleNoReward()}>
                <div className="thisproject__circle">
                  <div className="thisproject__circle-select"></div>
                </div>
                <div className="thisproject__checked">Pledge with no reward</div>
              </div>
              <p className="thisproject__text text">
                Choose to support us without a reward if you simply believe in our
                project. As a backer, you will be signed up to receive product
                updates via email.
              </p>
            </div>


            <section className="pledge">
              {products.map((product, index) => (
                <div key={index} className={
                  arrayAmount[index] === 0 ? "pledge__content__disable border "
                    : product.pledge !== pledge ? "pledge__content border " : "pledge__content__select border"}>
                  <div className="pledge__group select">
                    <div>
                      <div className="pledge__content__circle" onClick={product.amount === 0 ? () => { return; } : () => handleSelect(product.pledge)}>
                        <div className={product.pledge !== pledge ? "" : "pledge__content__circle-select"}></div>
                      </div>
                    </div>
                    <div>
                      <div className="pledge__group">
                        <div onClick={arrayAmount[index] === 0 ? () => { return; } : () => handleSelect(product.pledge)} className="pledge__content__checked">
                          <h3 className="pledge__content__title">{product.title}</h3>
                          <p className="pledge__content__subtitle">Pledge ${product.pledge} or more</p>
                        </div>
                        {!matches && (
                          <div className="pledge">
                            <h4 className="pledge__number">
                              {arrayAmount[index]} <span className="text"> left</span>
                            </h4>
                          </div>
                        )}
                      </div>
                      {!matches && <p className="text">{product.text}</p>}
                    </div>
                  </div>
                  {matches && (
                    <>
                      <p className="text">{product.text}</p>
                      <div className="pledge">
                        <h4 className="pledge__number">
                          {arrayAmount[index]} <span className="text"> left</span>
                        </h4>
                      </div>
                    </>

                  )}
                  <div style={product.pledge !== pledge ? { display: "none" } : {}}>
                    <div className="pledge__line"></div>
                    <form className="pledge__form" onSubmit={(event) => handleSubmit(event)}>
                      <p className="pledge__form__text text">Enter your pledge</p>
                      <div className="pledge__group">
                        <div className="pledge__form__currency-wrap">
                          <span className="pledge__form__currency-code">$</span>
                          <NumericFormat
                            value={text}
                            name="pledge"
                            onChange={(event) => handleChange(event)}
                            className="pledge__form__currency-input"
                          />
                        </div>
                        <button className="btn">Continue</button>
                        <input type={"hidden"} value={product.pledge} name="price" />
                      </div>
                    </form>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BackThisProject;
