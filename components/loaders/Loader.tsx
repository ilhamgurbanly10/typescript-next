import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React, {useState, memo } from "react"

const Loader: React.FC<{loading: boolean, color?: string}> = ({loading, color = "rgb(59 130 246)"}) => {

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
                color: color
            }}
            spin
        />
    );

    return  <Spin indicator={antIcon} className="text-center" spinning={loading} />
}

export default memo(Loader);