import { useRef, useState } from 'react'
import { ArrowRight02Icon, PlayIcon, PauseIcon } from 'hugeicons-react'
import PlaceholderImage from './PlaceholderImage'

export default function ProductVideo() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          {/* Fallback art shows until a real video source is added below */}
          <PlaceholderImage tone="mid" decorative className="absolute inset-0" />

          {/* Replace src with the real product video file — autoplay requires muted */}
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/product.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-dark/45" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center md:p-10">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? 'Pause video' : 'Play video'}
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white/10"
            >
              {playing ? <PauseIcon size={22} /> : <PlayIcon size={22} />}
            </button>

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">In the Studio</p>
            <h2 className="font-display max-w-md text-2xl leading-tight text-white md:text-3xl">
              See the Everyday Hoodie in motion
            </h2>
            <a
              href="#explore"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-white/60"
            >
              Shop the Everyday Hoodie
              <ArrowRight02Icon size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
