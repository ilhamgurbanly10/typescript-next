import React, {useEffect, useMemo, memo} from "react";
import styles from './Header.module.scss'
import ModeToggler from "../buttons/ModeToggler";
import useDarkMode from '../../hooks/useDarkMode';
import useLocale from '../../hooks/useLocale';
import { ModeClasses } from "../../interfaces/Mode";
import Link from "next/link";
import { UserOutlined, HeartFilled, PlusOutlined } from '@ant-design/icons';
import HamburgerMenu from "../menus/HamburgerMenu";
import { NextRouter, useRouter } from 'next/router'
import Filter from "../filters/Filter";
import Select, {SelectData} from "../library/Select";
import useRecoilDatas from "../../hooks/useRecoilDatas";
import PageLoader from '../library/PageLoader';
import BackToTopBtn from '../library/BackToTopBtn';
import FixedContainer from '../containers/FixedContainer';

const Header: React.FC<any> = () => {

    const router: NextRouter = useRouter();

    const { locales, locale, changeLocale, defaultLocale } = useLocale();

    const { recoilGetSocials, recoilGetCities, socialsData } = useRecoilDatas();

    const { mode } = useDarkMode();

    const modeClasses = useMemo<ModeClasses>(() => { return {
        'light': null,
        'dark': styles.darkMode
    }}, [])

    useEffect(() => {
        recoilGetSocials();
        recoilGetCities();
    }, [])

    return (
        <header className={`${modeClasses[mode]}`}>

            <div className={`${styles.top} py-5 relative`}>

                <div className="main-container flex justify-between items-center">

                    <Link href={`/${process.env.NEXT_PUBLIC_HOME_PAGE}`} passHref>
                        <h1 className={`${styles.logo} font-bold text-lg btn-grow-on-hover`}>EMLAK.AZ</h1>
                    </Link>

                    <div className="hidden lg:flex lg:items-center ms-auto">

                        <div className="flex items-center">
                            {socialsData?.phone?.map((d, i) => (
                                <a key={i} className={styles.phone} href={`tel:${d?.number}`}>{d?.number}</a>
                            ))}
                        </div>

                        <Link href={`/${process.env.NEXT_PUBLIC_BOOKMARKS_PAGE}`} passHref>
                            <span className={`${styles.link} btn-grow-on-hover`}>
                                <HeartFilled/> <span>Sevimlilər</span>
                            </span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_LOGIN_PAGE}`} passHref>
                            <span className={`${styles.link} btn-grow-on-hover`}>
                                <UserOutlined/> <span>Giriş</span>
                            </span>
                        </Link>

                    </div>

                    <div className={`ms-auto lg:ms-4 me-4 lg:me-0`}>

                        <Select 
                            data={locales}
                            onChange={(e) => { console.log(e); changeLocale(e?.value); }}
                            placeholder={locale?.toUpperCase()}
                            fullWidth={true}
                            defaultValue={locale}
                            allowSearch={false}
                        />

                    </div>

                    <HamburgerMenu />

                </div>

            </div>

            <div className={`${styles.bottom}`}>

                <div className="main-container lg:flex justify-between items-center">
                    
                    <nav className="flex hidden lg:flex">
                        
                        <Link href={`/${process.env.NEXT_PUBLIC_FILTER_PAGE}/sell`} passHref>
                            <span className={`${styles.navLink} ${`/${process.env.NEXT_PUBLIC_FILTER_PAGE}/sell` == router.asPath ? styles.active : ''}`}>Satış</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_FILTER_PAGE}/rent`} passHref>
                            <span className={`${styles.navLink} ${`/${process.env.NEXT_PUBLIC_FILTER_PAGE}/rent` == router.asPath ? styles.active : ''}`}>Kirayə</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_AGENCIES_PAGE}`} passHref>
                            <span className={`${styles.navLink} ${`/${process.env.NEXT_PUBLIC_AGENCIES_PAGE}` == router.asPath ? styles.active : ''}`}>Agentliklər</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_RESIDENTAL_COMPLEXES_PAGE}`} passHref>
                            <span className={`${styles.navLink} ${`/${process.env.NEXT_PUBLIC_RESIDENTAL_COMPLEXES_PAGE}` == router.asPath ? styles.active : ''}`}>Yaşayış kompleksləri</span>
                        </Link>

                    </nav>
                    
                    <div className="flex items-center">
                        
                        <ModeToggler />

                        <Link href={`/${process.env.NEXT_PUBLIC_NEW_ADD_PAGE}`} passHref>
                            <span className={`${styles.plus} ms-3 hidden lg:flex`}>        
                                <span className={styles.plusRound}><PlusOutlined/></span>
                                <span>ELAN YERLƏŞDİR</span>
                            </span>
                        </Link>

                    </div>
                    
                </div>

            </div>

            <Filter/>

            <PageLoader />

            <BackToTopBtn />   
            
            <FixedContainer />     

        </header>
    )
}

export default memo(Header);