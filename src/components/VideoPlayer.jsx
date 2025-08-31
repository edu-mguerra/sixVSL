'use client'

import { useState, useRef, useEffect } from 'react'
import YouTube from 'react-youtube'
import UTMLink from './UTMLink'

export default function VideoPlayer({ videoId }) {
    const playerRef = useRef(null)
    const [play, setPlay] = useState(false)

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            controls: 1,        // controles nativos do YouTube
            modestbranding: 1,
            rel: 0,
            autoplay: 0,        // autoplay desligado inicialmente
        },
    }

    const handleReady = (event) => {
        playerRef.current = event.target

        setTimeout(() => {
            playerRef.current.playVideo()
            setPlay(true)
        }, 3000)
    }

    return (
        <div className="relative w-full max-h-[90vh] aspect-video overflow-hidden shadow-md">

            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={handleReady}
                iframeClassName="absolute top-0 left-0 w-full h-full"
                iframeProps={{ loading: 'lazy', title: 'VSL Video' }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/20 px-4">
                <p className="text-white/70 italic text-sm md:text-base mb-2 drop-shadow-sm">
                    Dê play para uma experiência imersiva
                </p>

                <h1 className="text-red-700 text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                    Jordan 1 Chicago
                </h1>
                <p className="text-white/80 font-bold mt-2 text-lg md:text-2xl max-w-lg mx-auto drop-shadow-sm">
                    O icônico tênis que combina estilo clássico e performance incomparável.
                </p>
            </div>
        </div>
    )
}
