import React, {useEffect, useMemo} from "react";
import styles from './Header.module.scss'
import { useRecoilState, useRecoilValue } from 'recoil';
import { socialsState } from '../../state/atoms';
import { socialsSelector } from '../../state/selectors';
import {getSocials} from '../../utils/getCommonDatas' 
import {Socials} from '../../interfaces/CommonDatas'
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


const Header: React.FC<any> = () => {

    const router: NextRouter = useRouter();

    const { locales, locale, changeLocale, defaultLocale } = useLocale();

    // recoil-common-datas
    const recoilGetSocials = async (): Promise<void> => setSocials(await getSocials());
    const [socials, setSocials] = useRecoilState<Socials[]>(socialsState);
    const socialsData = useRecoilValue<Socials[]>(socialsSelector);

    const { mode } = useDarkMode();

    const modeClasses = useMemo<ModeClasses>(() => { return {
        'light': null,
        'dark': styles.darkMode
    }}, [])

    useEffect(() => {
        recoilGetSocials();
    }, [])

    return (
        <header className={`${modeClasses[mode]}`}>

            <div className={`${styles.top} py-5 relative`}>

                <div className="main-container flex justify-between items-center">

                    <Link href={`/${process.env.NEXT_PUBLIC_HOME_PAGE}`} passHref>
                        <h1 className={`${styles.logo} font-bold text-lg btn-grow-on-hover`}>EMLAK.AZ</h1>
                    </Link>

                    <div className={`ms-auto me-4`}>

                        <Select 
                            data={locales}
                            onChange={(e) => { console.log(e); changeLocale(e?.value); }}
                            placeholder={locale?.toUpperCase()}
                            fullWidth={true}
                            defaultValue={locale}
                            allowSearch={false}
                        />

                        {/* <Select 
                            data={locales}
                            onChange={(e) => { console.log(e); changeLocale(e?.value); }}
                            placeholder="Şəhər seçin"
                            fullWidth={false}
                            defaultValue={defaultLocale}
                            className="select-style"
                            allowClear={true}
                            searchPlaceholder="Şəhər axtarın"
                            notFoundedText="Axtarışınıza uyğun şəhər tapılmadı"
                        /> */}

                    </div>

                    <div className="hidden lg:flex lg:items-center">

                        <div className="flex items-center">
                            {socialsData?.length > 0 && socialsData[0].phone?.map((d, i) => (
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

        </header>
    )
}

export default Header;