import Iphone15Pro from "../magicui/iphone-15-pro";

export function Phone({ videoSrc }) {
  return(
    <div className="relative">
      <Iphone15Pro
        className="size-full"
        videoSrc={videoSrc}
      />
    </div>
  );
}
