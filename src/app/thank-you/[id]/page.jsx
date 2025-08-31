'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import UTMLink from "@/components/UTMLink";
import * as React from "react";

export default function ThankYouPage(props) {
    return <ThankYouPageContent {...props} />;
}

function ThankYouPageContent({ params }) {
    const searchParams = useSearchParams();
    const resolvedParams = React.use(params);
    const id = parseInt(resolvedParams.id, 10);

    const products = [
        { id: 1, title: "Jordan 1 Chicago", price: "R$ 1.497,00", sku: "jordan1-chicago", image: "https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=870&auto=format&fit=crop", installment: "ou 12x de R$ 149,70" },
        { id: 2, title: "Jordan 1 Black Toe", price: "R$ 1.399,00", sku: "jordan1-blacktoe", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop", installment: "ou 12x de R$ 139,90" },
        { id: 3, title: "Jordan 1 Royal", price: "R$ 1.449,00", sku: "jordan1-royal", image: "https://images.unsplash.com/photo-1751624310855-b7c7fcca17ef?q=80&w=464&auto=format&fit=crop", installment: "ou 12x de R$ 144,90" },
    ];

    const product = products.find(p => p.id === id);
    const [phone, setPhone] = useState("");

    if (!product) return <p className="text-center py-20 text-red-600 font-bold">Produto não encontrado!</p>;

    const utmParams = {};
    searchParams.forEach((value, key) => { utmParams[key] = value; });

    const generateWhatsappLink = () => {
        if (!phone) return "#";
        const cleanedPhone = phone.replace(/\D/g, "");
        const message = `Olá! Comprei ${product.title} por ${product.price}`;
        return `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col items-center justify-center p-4 sm:p-6">
            <div className="max-w-sm sm:max-w-md w-full bg-white p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col gap-6 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-700 drop-shadow-md">
                    Obrigado pela compra!
                </h1>

                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow-md"
                />

                <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-red-800">{product.title}</h2>
                    <p className="text-red-600 text-lg sm:text-xl md:text-2xl font-bold">{product.price}</p>
                    <p className="text-gray-500 text-sm sm:text-base">{product.installment}</p>
                </div>

                <div className="flex flex-col gap-3">
                    <input
                        type="tel"
                        placeholder="5587992020340"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-center text-sm sm:text-base"
                    />

                    <a
                        href={generateWhatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white font-bold py-3 rounded-xl shadow-md hover:bg-green-600 transition-colors text-sm sm:text-base"
                    >
                        Enviar WhatsApp
                    </a>
                </div>

                <UTMLink
                    href='/'
                    utm={utmParams}
                    className="mt-4 w-full inline-block px-4 sm:px-6 py-3 bg-red-700 text-white font-bold rounded-xl shadow-lg hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                    Comprar outro
                </UTMLink>
            </div>
        </main>
    );

}
