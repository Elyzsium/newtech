import React from 'react';
import styles from "./Loader.module.scss";
import { images } from '../../constants';
import ReactDOM from "react-dom";

const loader = () => {
    return ReactDOM.createPortal(
        <div className={styles.wrapper}>
          <div className={styles.loader}>
            <img src={images.loader} alt="Loading..." />
          </div>
        </div>,
        document.getElementById("loader")
      );
    };

export default loader