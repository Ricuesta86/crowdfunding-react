import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import BackThisProject from '../BackThisProject/BackThisProject';

import './Mastercraft.scss';

const Mastercraft = () => {
    const [show, setShow] = useState<boolean>(false);
    const [bookmark, setBookmark] = useState<boolean>(false);
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 414px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 414px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
  
    const handleClose=()=>{
      setShow(false);
    }

    const notify = () => {
        setBookmark((bookmark)=>!bookmark)
        toast.success(!bookmark?'Add bookmark.':'Remove bookmark')
      };
    
    return (
        <>
            <section className="mastercraft__section">
                <img
                    className="mastercraft__section__logo"
                    src="./images/logo-mastercraft.svg"
                    alt="Logo mastercraft"
                />
                <h1 className="mastercraft__section__title">
                    Mastercraft Bamboo Monitor Riser
                </h1>
                <p className="mastercraft__section__text text">
                    A beautiful & handcrafted monitor stand to reduce neck and eye
                    strain.
                </p>
                <div className="mastercraft__section__group">
                    <button className="btn" onClick={() => setShow(true)}>Back this project</button>
                    <button onClick={notify} className={bookmark ? "mastercraft__section__btn select" : "mastercraft__section__btn"}>
                        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <circle
                                    className="mastercraft__section__btn__cicle"
                                    fill="#2F2F2F"
                                    cx="28"
                                    cy="28"
                                    r="28"
                                />
                                <path
                                    className="mastercraft__section__btn__path"
                                    fill="#B1B1B1"
                                    d="M23 19v18l5-5.058L33 37V19z"
                                />
                            </g>
                        </svg>
                        {!matches && 'Bookmark'}
                    </button>
                </div>
            </section>
            <Toaster />
            { show ? <BackThisProject handleClose={handleClose} pledgeProp={undefined}/>:'' }
        </>
    )
}

export default Mastercraft