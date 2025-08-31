import ProductCard from "@/components/ProductCard"
import TestimonialCard from "@/components/TestimonialCard"
import UTMLink from "@/components/UTMLink"
import VideoPlayer from "@/components/VideoPlayer"
import { getServerUTM } from "@/lib/utm"

export default async function Home() {
  const utm = await getServerUTM()

  return (
    <main className="bg-gray-50">

      <section className="pb-10">
        <VideoPlayer videoId="VnE7m8JI7MY" />
      </section>

      <section className="py-16 bg-red-50">
        <ProductCard />
      </section>

      <section className="py-16 bg-white">
        <TestimonialCard />
      </section>

      <footer className="bg-neutral-900 text-neutral-300 text-sm py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-center md:text-left max-w-2xl">
            © {new Date().getFullYear()}. Todos os direitos Jordan reservados. As imagens e descrições têm caráter ilustrativo e podem sofrer alterações. Este site não é afiliado ao Facebook ou a qualquer entidade de terceiros.
          </p>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition">
              Política de Privacidade
            </a>
            <a href="/terms" className="hover:text-white transition">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
