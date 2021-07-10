import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import {PATH} from "./Routes"
import styles from "./Header.module.css"

function Header() {
    const [style, setStyle] = useState(false)

    const openMenuStyle = () => {
        if (style) {
            return styles.bread_crumbs__box
        }
        if (!style) {
            return styles.bread_crumbs_hoveredEl
        }
    }

    return (
        <div className={styles.bread_crumbs}>
            <div className={openMenuStyle()}>
                <div className={styles.hovered}
                     onClick={() => setStyle(!style)}>
                </div>
                <div className={styles.b_menu}>
                    <NavLink className={styles.link}
                             activeClassName={styles.activeLink}
                             to={PATH.PRE_JUNIOR}>
                        pre
                    </NavLink>
                    <NavLink className={styles.link}
                             activeClassName={styles.activeLink}
                             to={PATH.JUNIOR}>
                        jun
                    </NavLink>
                    <NavLink className={styles.link}
                             activeClassName={styles.activeLink}
                             to={PATH.JUNIOR_NEXT_LEVEL}>
                        junNL
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
