import {
  faEraser,
  faFileArrowDown,
  faPencil,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./menu.module.css";
import { menuItemClick } from "../../slice/menuSlice";
import { MENU_ITEMS } from "../../constants";
import cx from "classnames";

const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  return (
    <div>
      <div className={styles.menuContainer}>
        <div
          className={cx(styles.iconWrapper, {
            [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
          })}
          onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
        >
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
        </div>
        <div
          className={cx(styles.iconWrapper, {
            [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
          })}
          onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
        >
          <FontAwesomeIcon icon={faEraser} className={styles.icon} />
        </div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
        </div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
        </div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
