'use client'
import Link from 'next/link'
import { useMemo } from 'react'
export default function CTAButton({ href, label, utm }) {
    const finalHref = useMemo(() => {
        if (!utm) return href
        try {
            const url = new URL(href, 'https://dummy.base')
            Object.entries(utm).forEach(([k, v]) => { if (v) url.searchParams.set(k, String(v)) })
            return url.pathname + (url.search || '')
        } catch { return href }
    }, [href, utm])


    return (
        <Link href={finalHref} className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-white bg-black">{label}</Link>
    )
}
