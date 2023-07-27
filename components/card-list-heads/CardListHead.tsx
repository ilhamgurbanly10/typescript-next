import React, {memo, useMemo, useRef} from 'react';
import {CardListHead} from '../../interfaces/ComponentProps'
import {JSX} from '../../interfaces/Conditions'
import styles from './CardListHead.module.scss';
import Link from 'next/link';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {prev, next} from '../../pages/api/functions'

const CardListHead: React.FC<CardListHead> = ({title = "", link = "", arrows = false}) => {

    const linkContent = useMemo<JSX>(() => { return {
        'false': null,
        'true': <Link href={link}><span className={`${styles.link} btn-grow-on-hover`}>Daha çox</span></Link>
    }}, [])

    const arrowContent = useMemo<JSX>(() => { return {
        'false': null,
        'true': <div className="inline-flex items-center">
                    <button onClick={() => { prev(container); }} className="slider-arrow prev-arrow btn-grow-on-hover me-3">
                        <LeftOutlined />
                    </button>
                    <button onClick={() => { next(container); }} className="slider-arrow next-arrow btn-grow-on-hover me-5">
                        <RightOutlined />
                    </button>
                </div>
    }}, [])

    const container: React.RefObject<HTMLDivElement> = useRef(null);

    return (
        <div ref={container} className={`${styles.head} flex flex-col lg:flex-row justify-between items-center`}>
            <h2 className={`${styles.title} mb-3 lg:mb-0`}>{title}</h2>

            <div>
                {arrowContent[Boolean(arrows).toString()]}
                {linkContent[Boolean(link).toString()]}
            </div>

        </div>
    )

}

export default memo(CardListHead);