import type { SVGProps } from "react";

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
  videoSrc?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Iphone15Pro({
  width,
  height,
  src,
  videoSrc,
  size = 'medium',
  className = '',
  ...props
}: Iphone15ProProps) {
  // Calculate the screen dimensions and position
  const screenX = 21.25;
  const screenY = 19.25;
  const screenWidth = 389.5;
  const screenHeight = 843.5;
  const screenRadius = 55.75;

  // Fixed aspect ratio for iPhone 15 Pro
  const aspectRatio = 433 / 882;
  
  // Determine width based on size prop
  const getWidthFromSize = () => {
    switch(size) {
      case 'small': return 250;
      case 'large': return 433;
      case 'medium':
      default: return 350;
    }
  };
  
  // Use provided width or calculate from size
  const phoneWidth = width || getWidthFromSize();

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div 
        className="relative" 
        style={{ 
          width: `${phoneWidth}px`, 
          maxWidth: '100%',
          aspectRatio: `${aspectRatio}`,
        }}
      >
        {/* Phone SVG as background */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 433 882"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', top: 0, left: 0 }}
          preserveAspectRatio="xMidYMid meet"
          {...props}
        >
          <path
            d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
            className="fill-[#E5E5E5] dark:fill-[#404040]"
          />
          <path
            d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
            className="fill-[#E5E5E5] dark:fill-[#404040]"
          />
          <path
            d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
            className="fill-[#E5E5E5] dark:fill-[#404040]"
          />
          <path
            d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
            className="fill-[#E5E5E5] dark:fill-[#404040]"
          />
          <path
            d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
            className="fill-[#E5E5E5] dark:fill-[#404040]"
          />
          <path
            d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
            className="fill-white dark:fill-[#262626]"
          />
          <path
            opacity="0.5"
            d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
            className="fill-[#E5E5E5] dark:fill-[#404040]"
          />
          <path
            d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
            className="fill-[#E5E5E5] stroke-[#E5E5E5] stroke-[0.5] dark:fill-[#404040] dark:stroke-[#404040]"
          />

          {src && (
            <image
              href={src}
              x={screenX}
              y={screenY}
              width={screenWidth}
              height={screenHeight}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#roundedCorners)"
            />
          )}
        </svg>

        {/* Video container positioned absolutely over the phone screen area */}
        {videoSrc && (
          <div
            style={{
              position: 'absolute',
              top: `${(screenY / 882) * 100}%`,
              left: `${(screenX / 433) * 100}%`,
              width: `${(screenWidth / 433) * 100}%`,
              height: `${(screenHeight / 882) * 100}%`,
              borderRadius: `${screenRadius / 433 * 100}%`,
              overflow: 'hidden',
            }}
          >
            <video
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        )}

        {/* SVG overlay for phone buttons and other elements */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 433 882"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0,
            pointerEvents: 'none' 
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="roundedCorners">
              <rect
                x={screenX}
                y={screenY}
                width={screenWidth}
                height={screenHeight}
                rx={screenRadius}
                ry={screenRadius}
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
