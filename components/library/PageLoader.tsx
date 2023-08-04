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
            {pageLoader &&
                <div className={styles.container}>
                    <Spin indicator={antIcon} className="text-center" spinning={true} />
                </div>
            }
        </>
    )

}

export default memo(PageLoader);