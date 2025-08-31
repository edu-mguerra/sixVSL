import { cookies, headers } from 'next/headers'

export async function getServerUTM() {
    const c = cookies().get('utm')?.value
    if (!c) return {}
    try {
        return JSON.parse(c)
    } catch {
        return {}
    }
}

export function buildQueryWithUTM(href, utm) {
    const url = new URL(href, 'https://dummy.base')
    Object.entries(utm).forEach(([k, v]) => {
        if (v) url.searchParams.set(k, v)
    })
    return url.pathname + (url.search || '') + (url.hash || '')
}

export async function getReferrer() {
    return headers().get('referer')
}
