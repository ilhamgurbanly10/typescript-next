import React from "react";
import styles from './Footer.module.scss'
import { socialsSelector } from '../../state/selectors';
import { useRecoilValue } from 'recoil';
import {Socials} from '../../interfaces/CommonDatas'

const Footer: React.FC<any> = () => {

    const socialsData = useRecoilValue<Socials[]>(socialsSelector);

    return (
        <footer className={styles.footer}>
        </footer>
    )
}

export default Footer;