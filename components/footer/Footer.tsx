import React, { useEffect, useMemo, memo } from "react";
import styles from './Footer.module.scss'
import useDarkMode from '../../hooks/useDarkMode';
import Link from "next/link";
import { ModeClasses } from "../../interfaces/Mode";
import useTime from "../../hooks/useTime";
import useRecoilDatas from "../../hooks/useRecoilDatas";
import { FacebookFilled, WhatsAppOutlined, InstagramOutlined, MailFilled, PhoneFilled, YoutubeOutlined } from '@ant-design/icons';

const Footer: React.FC<any> = () => {

    const { regionData, cityData, socialsData, cityDesktopData, cityMobileData, regionDesktopData, regionMobileData } = useRecoilDatas();
    const { mode } = useDarkMode();
    const { getYear } = useTime();

    const modeClasses = useMemo<ModeClasses>(() => {
        return {
            'light': null,
            'dark': styles.darkMode
        }
    }, [])

    return (
        <footer className={`${styles.footer} ${modeClasses[mode]}`}>

            <div className={styles.top}>

                <div className="main-container">

                    <div className={`flex justify-center flex-wrap items-center lg:justify-end pb-4 ${styles.socials}`}>

                        <div className="me-3 mt-2 lg:mt-0">
                            <a href={`https://api.whatsapp.com/send?phone=${socialsData?.whatsapp}`} target="_blank" rel="noreferrer">
                                <WhatsAppOutlined className="btn-rotate " style={{ fontSize: "25px" }} />
                            </a>
                        </div>

                        <div className="me-3 mt-2 lg:mt-0">
                            <Link href={socialsData?.facebook ? socialsData?.facebook : '/'}>
                                <FacebookFilled className="btn-rotate " style={{ fontSize: "25px" }} />
                            </Link>
                        </div>

                        <div className="me-3 mt-2 lg:mt-0">
                            <Link href={socialsData?.instagram ? socialsData?.instagram : '/'}>
                                <InstagramOutlined className="btn-rotate " style={{ fontSize: "25px" }} />
                            </Link>
                        </div>

                        <div className="me-3 mt-2 lg:mt-0">
                            <Link href={socialsData?.youtube ? socialsData?.youtube : '/'}>
                                <YoutubeOutlined className="btn-rotate " style={{ fontSize: "25px" }} />
                            </Link>
                        </div>

                        <div className="me-3 mt-2 lg:mt-0">
                            <a href={`mailto:${socialsData?.email}`} target="_blank" rel="noreferrer" className="color-black">
                                <MailFilled className="btn-rotate me-2" style={{ fontSize: "25px" }} /> <span className="font-7">{socialsData?.email}</span>
                            </a>
                        </div>

                        <div className={`lg:ms-3 flex items-center justify-center ${styles.phoneBox}`}>
                            <PhoneFilled className="btn-rotate  me-2" style={{ fontSize: "25px" }} />
                            <div className="flex items-center">
                                {socialsData?.phone?.map((d, i) => (
                                    <a key={i} className={styles.phone} href={`tel:${d?.number}`}>{d?.number}</a>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className={`${styles.borderTop}`}>

                        <h2 className={`${styles.listTitle} text-center lg:text-start pt-3`}>Bakının rayonları</h2>

                        <div className={`${styles.listBox} ${styles.listBoxDesktop}`}>

                            {regionDesktopData?.map((data, i) => (
                                <div className={styles.listColumn} key={i}>
                                    {data?.map((d, y) => (
                                        <div key={y} className={styles.item}>
                                            <Link href={`/${process.env.NEXT_PUBLIC_CITY_PAGE}/${d?.slug}`} passHref>
                                                <span className="link lg:me-5 lg:mt-0 btn-grow-on-hover">{d?.name}</span>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>

                        <div className={`${styles.listBox} ${styles.listBoxMobile}`}>

                            {regionMobileData?.map((data, i) => (
                                <div className={styles.listColumn} key={i}>
                                    {data?.map((d, y) => (
                                        <div key={y} className={styles.item}>
                                            <Link href={`/${process.env.NEXT_PUBLIC_CITY_PAGE}/${d?.slug}`} passHref>
                                                <span className="link lg:me-5 lg:mt-0 btn-grow-on-hover">{d?.name}</span>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className={`mt-5 pt-5 pb-5`}>

                        <h2 className={`${styles.listTitle} text-center lg:text-start`}>Şəhərlər</h2>

                        <div className={`${styles.listBox} ${styles.listBoxDesktop}`}>

                            {cityDesktopData?.map((data, i) => (
                                <div className={styles.listColumn} key={i}>
                                    {data?.map((d, y) => (
                                        <div key={y} className={styles.item}>
                                            <Link href={`/${process.env.NEXT_PUBLIC_CITY_PAGE}/${d?.slug}`} passHref>
                                                <span className="link lg:me-5 lg:mt-0 btn-grow-on-hover">{d?.name}</span>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>

                        <div className={`${styles.listBox} ${styles.listBoxMobile}`}>

                            {cityMobileData?.map((data, i) => (
                                <div className={styles.listColumn} key={i}>
                                    {data?.map((d, y) => (
                                        <div key={y} className={styles.item}>
                                            <Link href={`/${process.env.NEXT_PUBLIC_CITY_PAGE}/${d?.slug}`} passHref>
                                                <span className="link lg:me-5 lg:mt-0 btn-grow-on-hover">{d?.name}</span>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className={`flex flex-col lg:flex-row items-center pt-3 ${styles.borderTop}`}>

                        <Link href={`/${process.env.NEXT_PUBLIC_FAQ_PAGE}`} passHref>
                            <span className="link lg:me-5 lg:mt-0">Yardım</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_ABOUT_PROJECT}`} passHref>
                            <span className="link lg:me-5 mt-2 lg:mt-0">Layihə haqda</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_USER_AGREEMENT}`} passHref>
                            <span className="link lg:me-5 mt-2 lg:mt-0">İstifadəçi razılaşması</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_PRIVACY_POLICY}`} passHref>
                            <span className="link lg:me-5 mt-2 lg:mt-0">Konfidensiallıq qaydaları</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_RULES}`} passHref>
                            <span className="link lg:me-5 mt-2 lg:mt-0">Qaydalar</span>
                        </Link>

                        <Link href={`/${process.env.NEXT_PUBLIC_ADD_CONTRACT}`} passHref>
                            <span className="link mt-2 lg:mt-0">Elan müqaviləsi</span>
                        </Link>

                    </div>

                </div>

            </div>

            <div className={styles.bottom}>

                <div className="main-container flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">

                    <p className={styles.leftText}>
                        Sayt rəhbərliyi reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.
                    </p>

                    <p className={`${styles.rightText} mt-4 lg:mt-0`}>
                        © {getYear()} “EMLAK GROUP” MMC, VÖEN 00000000000
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default memo(Footer);