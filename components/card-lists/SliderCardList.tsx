import React, {memo, useMemo} from 'react';
import {SliderCardList} from '../../interfaces/ComponentProps'
import styles from './SliderCardList.module.scss';
import Card from '../cards/Card'
import CardListHead from '../card-list-heads/CardListHead'
import ResponsiveSlider from '../sliders/ResponsiveSlider';
import NoPosts from '../notifications/NoPosts';

const CardList: React.FC<SliderCardList> = ({data, title = "", link = "", className = ""}) => {

    return (
        <section className={`${styles.cardList} ${className} slider-card-list`}>

            <CardListHead title={title} link={link} arrows={true} />
            
            <div className={styles.sliderBox}>

                <ResponsiveSlider>
                    {data?.map((d, i) => (
                        <Card
                            key={i}
                            created_at={d?.created_at}
                            title={d?.name}
                            img={d?.images?.length > 0 ? d?.images[0]?.image : ''}
                            additionals={d?.additional}
                            slug={d?.slug}
                            is_vip={d?.is_vip}
                            is_premium={d?.is_premium}
                        />
                    ))}
                </ResponsiveSlider>

            </div>

            {data?.length == 0 && <NoPosts/>}

        </section>
    )

}

export default memo(CardList);