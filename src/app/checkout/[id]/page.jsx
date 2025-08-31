import UTMLink from "@/components/UTMLink";


export default function CheckoutPage({ params, searchParams }) {
    const id = parseInt(params.id, 10);
    const utmParams = searchParams || {};

    const products = [
        { id: 1, title: "Jordan 1 Chicago", description: "O icônico tênis clássico.", price: "R$ 1.497,00", installment: "ou 12x de R$ 149,70", sku: "jordan1-chicago", image: "https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=870&auto=format&fit=crop" },
        { id: 2, title: "Jordan 1 Black Toe", description: "Design clássico e conforto.", price: "R$ 1.399,00", installment: "ou 12x de R$ 139,90", sku: "jordan1-blacktoe", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop" },
        { id: 3, title: "Jordan 1 Royal", description: "Clássico Royal, tradição e modernidade.", price: "R$ 1.449,00", installment: "ou 12x de R$ 144,90", sku: "jordan1-royal", image: "https://images.unsplash.com/photo-1751624310855-b7c7fcca17ef?q=80&w=464&auto=format&fit=crop" },
    ];


    const product = products.find(p => p.id === id);


    if (!product) return <p className="text-center py-20 text-red-600 font-bold">Produto não encontrado!</p>;

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-red-50 to-white overflow-hidden">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-red-700 drop-shadow-lg text-center px-2">
                Finalize sua Compra
            </h1>

            <div className="w-full max-w-sm sm:max-w-md flex flex-col gap-4 bg-white p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-h-56 sm:max-h-64 md:max-h-72 object-cover rounded-xl shadow-md"
                />

                <div className="flex flex-col gap-1 text-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-red-800">{product.title}</h2>
                    <p className="text-red-600 text-lg sm:text-xl md:text-2xl font-bold">{product.price}</p>
                    <p className="text-gray-500 text-sm sm:text-base">{product.installment}</p>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">{product.description}</p>
                </div>

                <UTMLink
                    href={`/thank-you/${product.id}?utm_source=vsl&utm_campaign=${product.sku}&utm_medium=email`}
                    className="mt-4 sm:mt-6 block bg-red-700 text-white font-bold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-lg text-center hover:bg-red-600 transition"
                >
                    Comprar Agora
                </UTMLink>
            </div>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-gray-500 text-center max-w-xs sm:max-w-md px-2">
                Ao clicar em “Finalizar Compra”, você concorda com nossa{' '}
                <a href="/terms" className="text-red-700 underline">Política de Privacidade</a> e{' '}
                <a href="/terms" className="text-red-700 underline">Termos de Uso</a>.
            </p>

        </main>
    );


}
