import React, { memo, useMemo, useState, useEffect } from "react"
import styles from './Card.module.scss'
import { Card } from '../../interfaces/Cards'
import Link from "next/link";
import { String } from '../../interfaces/Conditions'
// import dynamic from 'next/dynamic'
// const GreenButton = dynamic(() => import('../styled-components/buttons/GreenButton'), { ssr: false })
import { NextRouter, useRouter } from 'next/router'
import NextImage from "../images/NextImage";
import WishlistButton from "../buttons/WishlistButton";
import { Premium, Vip } from '../../pages/api/svg';
import { Tooltip } from 'antd';
import PremiumIcon from "../icons/PremiumIcon";
import VipIcon from "../icons/VipIcon";
import useDarkMode from '../../hooks/useDarkMode';
import { ModeClasses } from "../../interfaces/Mode";
import useTime from '../../hooks/useTime';

const Card: React.FC<Card> = ({ title, created_at, img, additionals, slug, is_vip, is_premium }) => {

    const router: NextRouter = useRouter();

    const { elapsedTime } = useTime();

    const { mode } = useDarkMode();

    const [isClient, setIsClient] = useState<boolean>(false);

    const modeClasses = useMemo<ModeClasses>(() => { return {
        'light': null,
        'dark': styles.darkMode
    }}, [])

    const listDisc = useMemo<String>(() => { return {
        'true': " • ",
        'false': ""
    }}, [])

    useEffect(() => {
        setIsClient(true);
    }, [])

    return (
        <div className={`${styles.card} ${modeClasses[mode]} overflow-hidden rounded-md`}>

            <Link href={`/${process.env.NEXT_PUBLIC_DETAIL_PAGE}/${slug}`} passHref>

                <div>
                    <div className="relative">

                        <NextImage
                            src={`https://api.topemlak.az${img}`}
                            alt={title}
                            quality={50}
                            sizeClassName="card-img"
                        />

                        <div className={styles.innerBoxTop}>
                            <PremiumIcon is_premium={is_premium} is_vip={is_vip} />
                            <VipIcon is_vip={is_vip} />
                        </div>

                        <div className={styles.innerBoxBottom}>
                            <div className={styles.innerBoxItem} onClick={(e) => { e.preventDefault() }}>
                                <WishlistButton inWishlist={true} slug={slug} />
                            </div>
                        </div>

                    </div>

                    <div className={styles.box}>

                        <h2 className={`${styles.title} whitespace-nowrap overflow-hidden truncate`}>{title}</h2>

                        
                        <div className="mt-2 text-sm overflow-hidden">
                            <div className={`${styles.additionals} text-running`}>
                                {additionals?.map((add, i) => (
                                    <span key={i}>
                                        {`${listDisc[Boolean(additionals.length > 1 && i != 0).toString()]} ${add?.parent?.title}: ${add?.title}`}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {isClient && <p className={`${styles.time} mt-2 text-xs`}>{ elapsedTime(created_at, router?.locale)}</p>}

                    </div>

                </div>

            </Link>

        </div>
    )

}

export default memo(Card);