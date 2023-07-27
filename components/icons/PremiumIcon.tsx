import React, {memo, useMemo} from "react";
import { Premium } from '../../pages/api/svg';
import { Tooltip } from 'antd';
import { JSX } from "../../interfaces/Conditions";

const PremiumIcon: React.FC<{is_premium: boolean, is_vip: boolean}> = ({is_premium, is_vip}) => {

    const content = useMemo<JSX>(() => {
        return {
            'true': <Tooltip title="Premium" placement="bottom" overlayClassName={'tooltip-style'}>
                        <div onClick={(e) => { e.preventDefault(); }} className={`${is_vip ? 'me-3' : ''}`} dangerouslySetInnerHTML={{ __html: Premium() }} />
                    </Tooltip>,
            'false': <></>
        }
    }, [])

    return content[Boolean(is_premium).toString()]

}

export default memo(PremiumIcon);