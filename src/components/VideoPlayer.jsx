'use client'

import { useState, useRef, useEffect } from 'react'
import YouTube from 'react-youtube'
import UTMLink from './UTMLink'

export default function VideoPlayer({ videoId }) {
    const playerRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(50)

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            loop: 1,
            mute: 0,
            playlist: videoId,
            rel: 0
        },
    }

    const handleReady = (event) => {
        playerRef.current = event.target
        playerRef.current.setVolume(volume)
        playerRef.current.playVideo()
    }

    useEffect(() => {
        if (!playerRef.current) return
        const timeout = setTimeout(() => {
            playerRef.current.unMute()
        }, 2000)
        return () => clearTimeout(timeout)
    }, [])

    const togglePlay = () => {
        if (!playerRef.current) return
        if (isPlaying) {
            playerRef.current.pauseVideo()
            setIsPlaying(false)
        } else {
            playerRef.current.playVideo()
            setIsPlaying(true)
        }
    }

    const increaseVolume = () => {
        if (!playerRef.current) return
        const newVol = Math.min(volume + 10, 100)
        playerRef.current.setVolume(newVol)
        setVolume(newVol)
    }

    const decreaseVolume = () => {
        if (!playerRef.current) return
        const newVol = Math.max(volume - 10, 0)
        playerRef.current.setVolume(newVol)
        setVolume(newVol)
    }

    return (
        <div className="relative w-full aspect-video overflow-hidden shadow h-screen">
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={handleReady}
                iframeClassName="absolute top-0 left-0 w-full h-full"
                iframeProps={{ loading: 'lazy', title: 'VSL Video' }}
            />

            {/* Overlay de texto */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/20 px-4">
                {/* Pequena legenda inicial */}
                <p className="text-white/70 italic text-sm md:text-base mb-2 drop-shadow-sm">
                    Dê play para uma experiência imersiva
                </p>

                <h1 className="text-red-700 text-5xl md:text-7xl font-extrabold drop-shadow-lg">
                    Jordan 1 Chicago
                </h1>
                <p className="text-white/80 font-bold mt-3 text-xl md:text-2xl max-w-lg mx-auto drop-shadow-sm">
                    O icônico tênis que combina estilo clássico e performance incomparável.
                </p>

                <UTMLink
                    href="/checkout"
                    utm={{ utm_source: 'vsl', utm_campaign: 'jordan1' }}
                    className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition"
                >
                    Comprar Agora
                </UTMLink>
            </div>

            {/* Botões flutuando na parte inferior */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                    onClick={decreaseVolume}
                    className="px-5 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-white/90 transition"
                >
                    -
                </button>
                <button
                    onClick={togglePlay}
                    className="px-5 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-white/90 transition"
                >
                    {isPlaying ? '❚❚' : '▶'}
                </button>
                <button
                    onClick={increaseVolume}
                    className="px-5 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-white/90 transition"
                >
                    +
                </button>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        </div>
    )
}
