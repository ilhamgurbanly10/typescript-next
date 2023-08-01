import React, {useMemo, memo, useState, useCallback} from "react";
import styles from './HamburgerMenu.module.scss';
import useDarkMode from '../../hooks/useDarkMode';
import { ModeClasses } from "../../interfaces/Mode";
import Link from "next/link";
import { BarsOutlined, CloseOutlined } from '@ant-design/icons';
import { NextRouter, useRouter } from 'next/router';
import { UserOutlined, HeartFilled, PlusOutlined } from '@ant-design/icons';
import { useRecoilValue } from 'recoil';
import {Socials} from '../../interfaces/CommonDatas';
import { socialsSelector } from '../../state/selectors';

const HamburgerMenu: React.FC = () => {

    const router: NextRouter = useRouter();

    const [show, setShow] = useState<string>('close');

    const close = useCallback((): void => { setShow('close'); }, [])

    const { mode } = useDarkMode();

    const socialsData = useRecoilValue<Socials[]>(socialsSelector);

    const modeClasses = useMemo<ModeClasses>(() => { return {
        'light': null,
        'dark': styles.darkMode
    }}, [])

    const showClasses = useMemo<ModeClasses>(() => { return {
        'close': null,
        'open': styles.show
    }}, [])


    const toggle = (): void => {
        setShow(show == "open" ? 'close' : 'open');
    }

    return (
        <div className={`${styles.container} ${showClasses[show]} ${modeClasses[mode]} lg:hidden`}>
            
            <button className={`${styles.toggler} iconic-btn`} onClick={() => { toggle(); }}>
                {show == 'close' ? <BarsOutlined /> : <CloseOutlined />}
            </button>

            <div className={styles.menu}>
                
                <nav className={`${styles.nav} flex flex-col`}>

                        <Link href={`/${process.env.NEXT_PUBLIC_FILTER_PAGE}/sell`} passHref>
                            <span onClick={() => { close(); }} className={`${styles.navLink} ${`/${process.env.NEXT_PUBLIC_FILTER_PAGE}/sell` == router.asPath ? styles.active : ''}`}>Satış</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_FILTER_PAGE}/rent`} passHref>
                            <span onClick={() => { close(); }} className={`${styles.navLink} ${`/${process.env.NEXT_PUBLIC_FILTER_PAGE}/rent` == router.asPath ? styles.active : ''}`}>Kirayə</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_AGENCIES_PAGE}`} passHref>
                            <span onClick={() => { close(); }} className={`${styles.navLink} ${`/${process.env.NEXT_PUBLIC_AGENCIES_PAGE}` == router.asPath ? styles.active : ''}`}>Agentliklər</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_RESIDENTAL_COMPLEXES_PAGE}`} passHref>
                            <span onClick={() => { close(); }} className={`${styles.navLink} ${`/${process.env.NEXT_PUBLIC_RESIDENTAL_COMPLEXES_PAGE}` == router.asPath ? styles.active : ''}`}>Yaşayış kompleksləri</span>
                        </Link>

                        <div className="flex items-center">
                            {socialsData?.length > 0 && socialsData[0].phone?.map((d, i) => (
                                <a key={i} className={styles.phone} href={`tel:${d?.number}`}>{d?.number}</a>
                            ))}
                        </div>

                        <Link href={`/${process.env.NEXT_PUBLIC_BOOKMARKS_PAGE}`} passHref>
                            <div onClick={() => { close(); }} className={`${styles.link} btn-grow-on-hover`}>
                                <HeartFilled/> <span>Sevimlilər</span>
                            </div>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_LOGIN_PAGE}`} passHref>
                            <div onClick={() => { close(); }} className={`${styles.link} btn-grow-on-hover`}>
                                <UserOutlined/> <span>Giriş</span>
                            </div>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_NEW_ADD_PAGE}`} passHref>
                            <span onClick={() => { close(); }} className={`${styles.plus} mt-4 flex justify-center`}>        
                                <span className={styles.plusRound}><PlusOutlined/></span>
                                <span>ELAN YERLƏŞDİR</span>
                            </span>
                        </Link>

                </nav>

            </div>

        </div>
    )

}

export default memo(HamburgerMenu);