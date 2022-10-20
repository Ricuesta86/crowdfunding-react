import { useState } from "react";
import { NumericFormat } from "react-number-format";
import api from "../../api";
import { product } from "../../type";
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
  const products = useAppSelector((state) => state.pledge);
  const dispatch = useAppDispatch();
  const [pledge, setPledge] = useState<number | undefined>(pledgeProp);
  const [text, setText] = useState<number>(pledgeProp ? pledgeProp : 0);
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (event.target.pledge.value >= event.target.price.value) {
      let backed = Number(event.target.pledge.value);
      dispatch(backedAdded({ backed }));
      dispatch(backersIncremented({}));
      dispatch(pledgeDecremented({ pledge }));
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
  return (
    <>
      <Modal handleClose={handleClose}>
        <div className="thisproject">
          <h3 className="thisproject__title">Back this project</h3>
          <p className="text">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="thisproject__pledge border">
            <div className="thisproject__checked">Pledge with no reward</div>
            <p className="text">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>


          <section className="pledge">
            {products.map((product, index) => (
              <div key={index} className={product.pledge !== pledge ? "pledge__content border" : "pledge__content__select border"}>
                <div className="pledge__group">
                  <div onClick={() => handleSelect(product.pledge)} className="pledge__content__checked">
                    <h3 className="pledge__content__title">{product.title}</h3>
                    <p className="pledge__content__subtitle">Pledge ${product.pledge} or more</p>
                  </div>
                  <div className="pledge">
                    <h4 className="pledge__number">
                      {product.amount} <span className="text"> left</span>
                    </h4>
                  </div>
                </div>
                <p className="text">{product.text}</p>

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
      {showThanks ? <Thanks /> : ""}
    </>
  );
};

export default BackThisProject;
