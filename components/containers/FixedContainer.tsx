import React, { useEffect, useState, useRef, useMemo } from 'react';
import Link from 'next/link'
import { HomeFilled, HeartFilled, PlusOutlined, UserOutlined } from '@ant-design/icons';
import styles from './FixedContainer.module.scss';
import { ModeClasses } from "../../interfaces/Mode";
import useDarkMode from '../../hooks/useDarkMode';

const FixedContainer: React.FC = () => {

    const { mode } = useDarkMode();

    const container: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const path = "/";
    const [show, setShow] = useState<boolean>(true);

    const lastScroll = useRef<number>(0);

    const modeClasses = useMemo<ModeClasses>(() => {
        return {
            'light': null,
            'dark': styles.darkMode
        }
    }, [])

    const toggle = (event?: any) => {

        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0 && lastScroll?.current <= currentScroll) {
            lastScroll.current = currentScroll;
            document.documentElement.scrollTop < 400 ? setShow(false) : setShow(true);
        } else {
            lastScroll.current = currentScroll;
            setShow(false);
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', toggle);
        return () => { window.removeEventListener('scroll', toggle); }
    }, []);

    return (
        <>

            <div ref={container} className={`${styles.container} ${modeClasses[mode]} fixed bottom-0 flex justify-between items-center w-full px-4 py-2 lg:hidden ${!show ? 'hide' : ''}`}>

                <Link href="/">
                    <div className="text-center">
                        <HomeFilled className={`grey-icon ${path == "/" || path == "" ? 'active' : ''}`} />
                        <div className="mt-1 font-5">ƏSAS</div>
                    </div>
                </Link>

                <div className="text-center">
                    {/* <CategoryIcon className={`grey-svg ${path.includes('yeni-elan') ? 'active' : ''}`} /> */}
                    <div className="mt-1 font-5">KATALOQ</div>
                </div>

                <Link href={`new-ad`}>
                    <div className="text-center position-relative top-n2">
                        <PlusOutlined className={`grey-icon p-2 rounded-pill text-white bg-darkblue ${path.includes('yeni-elan') ? 'active' : ''}`} />
                        <div className="mt-1 font-5">YENİ ELAN</div>
                    </div>
                </Link>

                <Link href="/bookmarks">
                    <div className="text-center">
                        <HeartFilled className={`grey-icon ${path.includes('bookmarks') ? 'active' : ''}`} />
                        <div className="mt-1 font-5">SEVİMLİ</div>
                    </div>
                </Link>

                <Link href={`/login`}>
                        <div className="text-center">
                            <UserOutlined className={`grey-icon ${path.includes('user-settings') ? 'active' : ''}`} />
                            <div className="mt-1 font-5">KABİNET</div>
                        </div>
                    </Link>

            </div>

        </>
    )

}

export default FixedContainer;
