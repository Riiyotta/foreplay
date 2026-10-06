// S10 ResponsiveVideo: `.w-video` 16:9 box (padding-top 56.206%).
// Per the build brief, the YouTube iframe is replaced by a same-size styled placeholder that links out to YouTube
// (no third-party embed is loaded by this replica). frame: 'events' | 'bounties' | 'videos' | 'course' | 'none'.
import { IconPlay } from '../svgs.jsx'

const FRAMES = {
  events: 'border border-solid-700 rounded-28 overflow-hidden', // .fireside-main-wrapper
  bounties: 'border border-solid-600 rounded-16 overflow-hidden', // .bounty-video-embed
  videos: 'overflow-hidden', // .video-page-video
  course: 'border border-white-12 border-b-solid-700 rounded-[15px] overflow-hidden', // .fu-video-holder
  none: '',
}

export function VideoBox({ youtubeId, title = 'Video', frame = 'none', className = '' }) {
  const href = youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : null
  return (
    <div className={`${FRAMES[frame]} ${className}`}>
      <div className="relative w-full pt-[56.206%]">
        <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.08))]">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} (opens on YouTube)`}
              className="flex flex-col items-center gap-3 text-neutral-100 no-underline hover:text-neutral-0"
            >
              <span className="flex size-[50px] items-center justify-center rounded-circle bg-play-bubble backdrop-blur-10">
                <span className="size-5">
                  <IconPlay />
                </span>
              </span>
              <span className="text-label-s">Watch on YouTube</span>
            </a>
          ) : (
            <span className="text-label-s text-neutral-300">Video embed</span>
          )}
        </div>
      </div>
    </div>
  )
}
