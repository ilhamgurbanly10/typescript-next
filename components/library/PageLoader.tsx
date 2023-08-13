import React, { memo } from "react";
import styles from './PageLoader.module.scss';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import useRecoilDatas from "../../hooks/useRecoilDatas";

const PageLoader: React.FC = () => {

    const { pageLoader } = useRecoilDatas();

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 50,
                color: "rgb(59 130 246)"
            }}
            spin
        />
    );

    return (
        <>
            {pageLoader.state &&
                <div className={styles.container}>
                    <Spin indicator={antIcon} className="text-center" spinning={true} />
                    <div className={styles.progress}>
                        <div className={styles.progressLine} style={{width: `${pageLoader.percent}%`}}></div>
                    </div>
                    <p className={styles.percent}>{pageLoader.percent} %</p>
                </div>
            }
        </>
    )

}

export default PageLoader;