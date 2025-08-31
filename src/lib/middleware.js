import { NextResponse, NextRequest } from 'next/server'


const UTM_COOKIE = 'utm'


function pickUTMs(url) {
    const params = url.searchParams
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    const found = {}
    keys.forEach(k => {
        const v = params.get(k)
        if (v) found[k] = v
    })
    return found
}


export function middleware(req) {
    const url = req.nextUrl
    const utmFromQuery = pickUTMs(url)
    const res = NextResponse.next()


    if (Object.keys(utmFromQuery).length > 0) {

        const existing = req.cookies.get(UTM_COOKIE)?.value
        let current = {}
        if (existing) {
            try { current = JSON.parse(existing) } catch { }
        }
        const merged = { ...current, ...utmFromQuery }
        res.cookies.set(UTM_COOKIE, JSON.stringify(merged), {
            httpOnly: false,
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 30,
        })
    }


    return res
}


export const config = {
    matcher: ['/((?!_next|favicon.ico).*)'],
}
