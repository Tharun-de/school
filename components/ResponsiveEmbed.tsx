"use client";

import React from "react";

type ResponsiveEmbedProps = {
  src: string;
  /** The canonical width of the embed as provided by the source (e.g., 640 for Google Forms) */
  baseWidth?: number;
  /** The canonical height of the embed as provided by the source (e.g., 2000 for long forms) */
  baseHeight?: number;
  title?: string;
  className?: string;
};

/**
 * Scales fixed-size iframes (like Google Forms) to fit the container width.
 * Prevents overflow at different zoom levels and maintains aspect ratio.
 */
export default function ResponsiveEmbed({
  src,
  baseWidth = 640,
  baseHeight = 2000,
  title = "Embedded content",
  className = "",
}: ResponsiveEmbedProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const element = containerRef.current;

    const updateScale = () => {
      const containerWidth = element.clientWidth;
      const nextScale = Math.max(0.5, Math.min(1.5, containerWidth / baseWidth));
      setScale(nextScale);
    };

    updateScale();

    const ro = new ResizeObserver(updateScale);
    ro.observe(element);
    window.addEventListener("orientationchange", updateScale);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", updateScale);
    };
  }, [baseWidth]);

  const scaledHeight = Math.round(baseHeight * scale);

  return (
    <div ref={containerRef} className={className}>
      <div style={{ height: `${scaledHeight}px`, overflow: "hidden" }}>
        <iframe
          src={src}
          width={baseWidth}
          height={baseHeight}
          style={{ transform: `scale(${scale})`, transformOrigin: "top left", border: 0 }}
          loading="lazy"
          title={title}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}


