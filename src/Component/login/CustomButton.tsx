import styles from '../../styles/Component/login/CustomButton.module.css';
import React from "react";

export interface text {
    Text: string;
}

const CustomButton: React.FC<text> = ({Text}) => {
        return (
            <>
              <button type="submit" className={styles.submit}>
            {Text}
          </button>
            </>
        )
}

export default CustomButton;