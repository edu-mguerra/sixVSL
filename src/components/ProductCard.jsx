'use client'

import UTMLink from './UTMLink'

export default function ProductShowcase() {
    const products = [
        {
            title: 'Jordan 1 Chicago',
            description: 'O icônico tênis que combina estilo clássico e performance incomparável. Um clássico que não sai de moda e garante destaque em qualquer ocasião.',
            price: 'R$ 1.497,00',
            installment: 'ou 12x de R$ 149,70',
            image: 'https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=870&auto=format&fit=crop',
            sku: 'jordan1-chicago',
        },
        {
            title: 'Jordan 1 Black Toe',
            description: 'Tênis que une design clássico e conforto excepcional. Ideal para quem quer se destacar com estilo.',
            price: 'R$ 1.399,00',
            installment: 'ou 12x de R$ 139,90',
            image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop',
            sku: 'jordan1-blacktoe',
        },
        {
            title: 'Jordan 1 Royal',
            description: 'O clássico Royal combina tradição e modernidade, perfeito para colecionadores e apaixonados por sneakers.',
            price: 'R$ 1.449,00',
            installment: 'ou 12x de R$ 144,90',
            image: 'https://images.unsplash.com/photo-1751624310855-b7c7fcca17ef?q=80&w=464&auto=format&fit=crop',
            sku: 'jordan1-royal',
        },
    ]

    return (
        <>
            <h1 className="text-red-700 text-3xl sm:text-4xl md:text-5xl py-4 sm:py-6 text-center font-extrabold drop-shadow-md leading-tight">
                Descubra os Jordan que vão elevar seu estilo
            </h1>


            <section className="py-16 bg-gradient-to-r from-red-50 to-white">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.map((product) => (
                        <div key={product.sku} className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col transition transform hover:scale-105">

                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 md:h-72 object-cover"
                            />

                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-2xl font-extrabold text-red-800 mb-2">{product.title}</h2>
                                <p className="text-neutral-700 flex-1">{product.description}</p>

                                <div className="mt-4">
                                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                                    <p className="text-sm text-neutral-500">{product.installment}</p>
                                </div>

                                <UTMLink
                                    href="/checkout"
                                    utm={{ utm_source: 'vsl', utm_campaign: product.sku, sku: product.sku }}
                                    className="mt-4 w-full inline-block px-6 py-3 bg-red-700 text-white font-bold rounded-xl shadow-lg hover:bg-red-600 transition text-center"
                                >
                                    Comprar Agora
                                </UTMLink>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
