
'use client'

import { useState, useRef } from 'react'
import YouTube from 'react-youtube'

export default function VideoPlayer({ videoId }) {
    const playerRef = useRef(null)
    const [play, setPlay] = useState(false)

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            controls: 1,
            modestbranding: 1,
            rel: 0,
            autoplay: 0,
            mute: 0
        },
    }

    const handleReady = (event) => {
        playerRef.current = event.target
    }

    return (
        <div className="w-full flex flex-col items-center px-4 md:px-8">

            {/* Título */}
            <h1 className="text-red-700 text-4xl md:text-6xl font-extrabold text-center mt-8">
                Jordan 1 Chicago
            </h1>

            {/* Descrição */}
            <p className="text-gray-800 text-lg md:text-2xl text-center max-w-3xl mt-4 mb-6">
                O icônico tênis que combina estilo clássico e performance incomparável.
            </p>

            {/* Player */}
            <div className="w-full max-w-5xl aspect-video relative">
                {!play ? (
                    <div className="relative cursor-pointer" onClick={() => setPlay(true)}>
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt="Thumbnail"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/50 p-4 rounded-full text-white text-5xl">▶</div>
                        </div>
                    </div>
                ) : (
                    <YouTube
                        videoId={videoId}
                        opts={opts}
                        onReady={handleReady}
                        iframeClassName="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                        iframeProps={{ loading: 'lazy', title: 'VSL Video' }}
                    />
                )}
            </div>
        </div>
    )
}


