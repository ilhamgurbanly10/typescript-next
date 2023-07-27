import React, { memo } from "react"
import { MainHead } from '../../interfaces/Heads'
import Head from 'next/head'

const PageHead: React.FC<MainHead> = ({ title, metaTitle, description }) => {

    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={metaTitle} />
            <meta name="description" content={description} />
        </Head>
    )

}

export default memo(PageHead);