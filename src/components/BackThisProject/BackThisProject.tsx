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
            <div>Pledge with no reward</div>
            <p className="text">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>


          <section className="pledge">
            {products.map((product, index) => (
              <div key={index} className="pledge__content border">
                <div className="pledge__group">
                  <div onClick={() => handleSelect(product.pledge)} className="pledge__content__checked">
                    <h3 className="plege__content__title">{product.title}</h3>
                    <p className="plege__content__subtitle">"Pledge ${product.pledge} or more"</p>
                  </div>
                  <div className="pledge">
                    <h4>
                      {product.amount} <span className="h4--span"> left</span>
                    </h4>
                  </div>
                </div>
                <p className="text">{product.text}</p>

                <div className="line"></div>
                <div style={product.pledge !== pledge ? { display: "none" } : {}}>
                  <form onSubmit={(event) => handleSubmit(event)}>
                    <p>Enter your pledge</p>
                    <NumericFormat
                      value={text}
                      name="pledge"
                      onChange={(event) => handleChange(event)}
                      thousandSeparator={true}
                    />
                    <input type={"hidden"} value={product.pledge} name="price" />
                    <button>Continue</button>
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
