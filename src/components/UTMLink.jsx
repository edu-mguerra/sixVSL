'use client'
import Link from 'next/link'
import { useMemo } from 'react'

export default function UTMLink({ href, utm = {}, ...rest }) {
    const withUTM = useMemo(() => {
        if (!utm || typeof utm !== 'object') return href

        try {
            const url = new URL(href, 'https://dummy.base')
            Object.entries(utm).forEach(([k, v]) => {
                if (v) url.searchParams.set(k, String(v))
            })
            return url.pathname + (url.search || '') + (url.hash || '')
        } catch {
            return href
        }
    }, [href, utm])

    return <Link href={withUTM} {...rest} />
}
