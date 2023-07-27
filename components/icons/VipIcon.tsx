import React, {memo, useMemo} from "react";
import { Vip } from '../../pages/api/svg';
import { Tooltip } from 'antd';
import { JSX } from "../../interfaces/Conditions";

const VipIcon: React.FC<{is_vip: boolean}> = ({is_vip}) => {

    const content = useMemo<JSX>(() => {
        return {
            'true': <Tooltip title="Vip" placement="bottom" overlayClassName={'tooltip-style tooltip-bg-red'}>
                        <div onClick={(e) => { e.preventDefault(); }} dangerouslySetInnerHTML={{ __html: Vip() }} />
                    </Tooltip>,
            'false': <></>
        }
    }, [])

    return content[Boolean(is_vip).toString()]

}

export default memo(VipIcon);