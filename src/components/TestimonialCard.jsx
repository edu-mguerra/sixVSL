'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Lucas Andrade',
            profile: 'https://randomuser.me/api/portraits/men/32.jpg',
            testimonialImage: 'https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Esse tênis superou minhas expectativas! Confortável, estiloso e entrega rápida.',
            rating: 5,
        },
        {
            name: 'Mariana Souza',
            profile: 'https://randomuser.me/api/portraits/women/45.jpg',
            testimonialImage: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Qualidade incrível e atendimento impecável. Já quero outro modelo!',
            rating: 4.9,
        },
        {
            name: 'João Pereira',
            profile: 'https://randomuser.me/api/portraits/men/21.jpg',
            testimonialImage: 'https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'O Jordan 1 Chicago é simplesmente perfeito! Vale cada centavo.',
            rating: 5,
        },
        {
            name: 'Ana Lima',
            profile: 'https://randomuser.me/api/portraits/women/29.jpg',
            testimonialImage: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Experiência de compra excelente, produto chegou antes do prazo.',
            rating: 5,
        },
        {
            name: 'Rafael Costa',
            profile: 'https://randomuser.me/api/portraits/men/44.jpg',
            testimonialImage: 'https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Design impecável e conforto sem igual. Me surpreendeu de verdade.',
            rating: 5,
        },
        {
            name: 'Beatriz Santos',
            profile: 'https://randomuser.me/api/portraits/women/51.jpg',
            text: 'A qualidade é premium! Nunca usei algo tão confortável e estiloso.',
            rating: 4.8,
        },
        {
            name: 'Pedro Almeida',
            profile: 'https://randomuser.me/api/portraits/men/55.jpg',
            text: 'Chegou rápido e em perfeitas condições. Estou muito satisfeito!',
            rating: 5,
        },
        {
            name: 'Carla Moura',
            profile: 'https://randomuser.me/api/portraits/women/60.jpg',
            text: 'O atendimento foi excelente e o tênis é ainda mais bonito pessoalmente.',
            rating: 5,
        },
    ]

    return (
        <section className="py-16 bg-white/15">
            <h2 className="text-4xl font-extrabold text-center text-red-700 mb-10">
                O que nossos clientes dizem
            </h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination]}
                className="max-w-6xl mx-auto px-4"
            >
                {testimonials.map((t, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-red-50 p-6 rounded-xl shadow-md text-center h-full flex flex-col justify-between">
                            <img
                                src={t.profile}
                                alt={t.name}
                                className="w-16 h-16 rounded-full mx-auto border-2 border-red-300"
                            />
                            <h3 className="text-lg font-bold text-red-700 mt-4">{t.name}</h3>
                            <p className="text-yellow-500">{'⭐'.repeat(Math.round(t.rating))}</p>
                            <p className="text-neutral-700 mt-2">{t.text}</p>

                            {t.testimonialImage && (
                                <img
                                    src={t.testimonialImage}
                                    alt="Foto do produto"
                                    className="mt-4 rounded-lg shadow"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
