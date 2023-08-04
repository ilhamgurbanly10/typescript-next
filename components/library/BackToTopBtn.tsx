import React, {useEffect, useRef, useState, memo} from "react";
import styles from './BackToTopBtn.module.scss';
import { UpOutlined } from '@ant-design/icons';
import useEvents from "../../hooks/useEvents";

const BackToTopBtn: React.FC = () => {

    const btn: React.RefObject<HTMLButtonElement> = useRef(null);

    const { backToTop, showBackToTopBtn } = useEvents();

    useEffect(() => {
        backToTop(btn.current);
    }, [btn.current]);

    return (
        <button ref={btn} className={`${styles.btn} ${showBackToTopBtn ? styles.show : ''}`}>
            <UpOutlined />
        </button>
    )

}

export default memo(BackToTopBtn);