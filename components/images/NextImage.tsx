import Image from 'next/image';
import React, {useState, memo } from "react"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { NextImage } from '../../interfaces/Images'
import styles from './NextImage.module.scss'
import Loader from '../loaders/Loader';



const NextImage: React.FC<NextImage> = ({alt = "", src = "/", quality = 75, sizeClassName = "", sizes = 'sizes="100vw"' }) => {

    const [imgLoading, setImgLoading] = useState<boolean>(true);
    const [imgError, setImgError] = useState<boolean>(false);

    return (
            <div className={`${styles.container} relative ${sizeClassName ? sizeClassName : styles.size}`}>
                
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    quality={quality}
                    sizes={sizes}
                    loading="eager"
                    onLoadingComplete={() => { setImgLoading(false); }}
                    onError={() => { setImgLoading(false); setImgError(true); }}
                />
                
                <div className={`text-center ${styles.progress} ${!imgLoading && !imgError ? styles.hidden : ''}`}>
                    <Loader loading={imgLoading} />
                    {imgError && !imgLoading && <h6 className="text-center">Şəkil yüklənə bilmədi</h6>}
                </div>
                
            </div>
    )
}

export default memo(NextImage);