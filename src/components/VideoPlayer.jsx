'use client'

import { useState, useRef, useEffect } from 'react'
import YouTube from 'react-youtube'
import UTMLink from './UTMLink'

export default function VideoPlayer({ videoId }) {
    const playerRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(50)
    const [play, setPlay] = useState(false)

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            loop: 0,
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

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 md:gap-4">
                <button
                    onClick={decreaseVolume}
                    className="px-4 py-2 md:px-5 md:py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-white/90 transition"
                >
                    -
                </button>
                <button
                    onClick={togglePlay}
                    className="px-4 py-2 md:px-5 md:py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-white/90 transition"
                >
                    {isPlaying ? '❚❚' : '▶'}
                </button>
                <button
                    onClick={increaseVolume}
                    className="px-4 py-2 md:px-5 md:py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-white/90 transition"
                >
                    +
                </button>
            </div>
        </div>
    )
}
