'use client'

import UTMLink from '@/components/UTMLink'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ThankYouPage() {
    const searchParams = useSearchParams()
    const [utmParams, setUtmParams] = useState({})
    const [product, setProduct] = useState(null)
    const [phone, setPhone] = useState('')

    const products = [
        {
            title: 'Jordan 1 Chicago',
            price: 'R$ 1.497,00',
            installment: 'ou 12x de R$ 149,70',
            image: 'https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=870&auto=format&fit=crop',
            sku: 'jordan1-chicago',
        },
        {
            title: 'Jordan 1 Black Toe',
            price: 'R$ 1.399,00',
            installment: 'ou 12x de R$ 139,90',
            image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop',
            sku: 'jordan1-blacktoe',
        },
        {
            title: 'Jordan 1 Royal',
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

    const generateWhatsappLink = () => {
        if (!phone) return '#'
        const cleanedPhone = phone.replace(/\D/g, '')
        const message = `Olá! Acabei de comprar o ${product.title} por ${product.price}. Quero confirmar o pagamento.`
        return `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(message)}`
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center gap-6">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-600 drop-shadow-md">🎉 Obrigado pela sua compra!</h1>
                    <p className="text-gray-600 mt-2">Seu pedido foi confirmado com sucesso.</p>
                </div>

                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 md:h-80 rounded-2xl shadow-md object-cover mt-4"
                />
                <h2 className="text-2xl md:text-3xl font-extrabold text-red-800 mt-2">{product.title}</h2>
                <p className="text-red-600 text-2xl font-bold">{product.price}</p>
                <p className="text-sm text-gray-500">{product.installment}</p>

                <div className="w-full mt-4 flex flex-col gap-2">
                    <label htmlFor="phone" className="text-gray-700 font-semibold">Digite seu número de WhatsApp:</label>
                    <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ex: +55 11 99999-9999"
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                <a
                    href={generateWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600 transition transform hover:scale-105 ${!phone ? 'opacity-50 pointer-events-none' : ''}`}
                >
                    <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
                    Enviar mensagem pelo WhatsApp
                </a>

                <UTMLink
                    href={`/checkout?${new URLSearchParams(utmParams).toString()}`}
                    utm={utmParams}
                    className="mt-2 w-full md:w-auto inline-block px-6 py-3 bg-red-700 text-white font-bold rounded-lg shadow hover:bg-red-600 transition transform hover:scale-105 text-center"
                >
                    Comprar outro modelo
                </UTMLink>
            </div>
        </main>
    )
}
