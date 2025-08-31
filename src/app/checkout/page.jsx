'use client'

import UTMLink from '@/components/UTMLink'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CheckoutPage() {
    const searchParams = useSearchParams()
    const [utmParams, setUtmParams] = useState({})
    const [product, setProduct] = useState(null)

    const products = [
        {
            title: 'Jordan 1 Chicago',
            description: 'O icônico tênis que combina estilo clássico e performance incomparável.',
            price: 'R$ 1.497,00',
            installment: 'ou 12x de R$ 149,70',
            image: 'https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=870&auto=format&fit=crop',
            sku: 'jordan1-chicago',
        },
        {
            title: 'Jordan 1 Black Toe',
            description: 'Tênis que une design clássico e conforto excepcional.',
            price: 'R$ 1.399,00',
            installment: 'ou 12x de R$ 139,90',
            image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop',
            sku: 'jordan1-blacktoe',
        },
        {
            title: 'Jordan 1 Royal',
            description: 'O clássico Royal combina tradição e modernidade, perfeito para colecionadores.',
            price: 'R$ 1.449,00',
            installment: 'ou 12x de R$ 144,90',
            image: 'https://images.unsplash.com/photo-1751624310855-b7c7fcca17ef?q=80&w=464&auto=format&fit=crop',
            sku: 'jordan1-royal',
        },
    ]

    useEffect(() => {
        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'sku']
        const utms = {}
        utmKeys.forEach(key => {
            const value = searchParams.get(key)
            if (value) utms[key] = value
        })
        setUtmParams(utms)

        if (utms.sku) {
            const prod = products.find(p => p.sku === utms.sku)
            if (prod) setProduct(prod)
        }
    }, [searchParams])

    if (!product) {
        return <p className="text-center py-20 text-red-600 font-bold">Produto não encontrado!</p>
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-red-50 to-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-red-700 drop-shadow-lg text-center">
                Finalize sua Compra
            </h1>

            <div className="max-w-md w-full bg-white p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col gap-4">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 md:h-80 rounded-xl shadow-md object-cover"
                />
                <h2 className="text-2xl md:text-3xl font-extrabold text-red-800">{product.title}</h2>
                <p className="text-red-600 text-2xl md:text-3xl font-extrabold">{product.price}</p>
                <p className="text-sm text-gray-500">{product.installment}</p>
                <p className="mt-2 text-gray-600">{product.description}</p>

                <UTMLink
                    href={`/thank-you?${new URLSearchParams(utmParams).toString()}`}
                    utm={utmParams}
                    className="mt-6 w-full md:w-auto inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl shadow-lg hover:from-red-700 hover:to-red-600 transition-transform transform hover:scale-105 duration-300 ease-out text-center"
                >
                    Finalizar Compra
                </UTMLink>
            </div>

            <p className="mt-6 text-sm text-gray-500 text-center max-w-md">
                Ao clicar em “Finalizar Compra”, você concorda com nossa{' '}
                <a href="/terms" className="text-red-700 underline">Política de Privacidade</a> e{' '}
                <a href="/terms" className="text-red-700 underline">Termos de Uso</a>.
            </p>
        </main>
    )
}
