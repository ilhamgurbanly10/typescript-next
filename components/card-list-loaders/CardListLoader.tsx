import React from "react"
import styles from "./CardListLoader.module.scss"
import { Spin } from 'antd';

const CardListLoader: React.FC = () => {

    return (
        <div className={`${styles.container} ant-spin-green-dot`} >
            <Spin spinning={true} size="large" />
        </div>
    )

}

export default CardListLoader;