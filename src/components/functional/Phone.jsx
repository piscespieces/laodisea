import Iphone15Pro from "../magicui/iphone-15-pro";

export function Phone({ videoSrc }) {
  return(
    <div className="relative w-full h-full">
      <Iphone15Pro
        className="w-full h-auto"
        videoSrc={videoSrc}
      />
    </div>
  );
}
