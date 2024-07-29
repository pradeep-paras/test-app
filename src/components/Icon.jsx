import React from 'react';

// styles
import styles from '../stylecss/footer.module.css'

const Icon = (props) => {
    return(
        <img className={styles.icons} src={props.image}  />
    )
}

export default Icon;