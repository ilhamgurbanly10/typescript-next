import React, {useEffect} from "react";
import styles from './Header.module.scss'
import { useRecoilState, useRecoilValue } from 'recoil';
import { socialsState } from '../../state/atoms';
import { socialsSelector } from '../../state/selectors';
import {getSocials} from '../../utils/getCommonDatas' 
import {Socials} from '../../interfaces/CommonDatas'

const Header: React.FC<any> = () => {

    // recoil-common-datas
    const recoilGetSocials = async (): Promise<void> => setSocials(await getSocials());
    const [socials, setSocials] = useRecoilState<Socials[]>(socialsState);
    const socialsData = useRecoilValue<Socials[]>(socialsSelector);

    useEffect(() => {
        recoilGetSocials();
    }, [])

    return (
        <header className={styles.header}>
        </header>
    )
}

export default Header;