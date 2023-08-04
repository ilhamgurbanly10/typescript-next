import React, {memo, useMemo} from 'react';
import {CardList} from '../../interfaces/ComponentProps'
import styles from './CardList.module.scss';
import Card from '../cards/Card'
import CardListHead from '../card-list-heads/CardListHead'
import NoPosts from '../notifications/NoPosts';
import CardListLoader from '../card-list-loaders/CardListLoader';

const CardList: React.FC<CardList> = ({data, title = "", link = "", className = "", loading = false}) => {

    return (
        <section className={`${styles.cardList} ${className}`}>

            <CardListHead title={title} link={link} />

            {loading ? 
                <CardListLoader/>
            :
                <div className={styles.list}>
                    {data?.map((d, i) => (
                        <div className={styles.card} key={i}>
                            <Card
                                created_at={d?.created_at}
                                title={d?.name}
                                img={d?.images?.length > 0 ? d?.images[0]?.image : ''}
                                additionals={d?.additional}
                                slug={d?.slug}
                                is_vip={d?.is_vip}
                                is_premium={d?.is_premium}
                            />
                        </div>
                    ))}
                </div>
            }

            {!data?.length && !loading && <NoPosts/>}

        </section>
    )

}

export default memo(CardList);