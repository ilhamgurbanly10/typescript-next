import React from "react";
import styles from './NoPosts.module.scss';

const NoPosts: React.FC = () => {

    return (
        <div className={`${styles.container} text-center pb-5`}>
            Hələ ki heç bir paylaşım mövcud deyil
        </div>
    )

}

export default NoPosts;