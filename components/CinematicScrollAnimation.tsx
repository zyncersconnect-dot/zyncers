"use client";

import { useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 240;

export function CinematicScrollAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Store preloaded HTMLImageElements in memory
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));


  // Smooth lerp state
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Draw specific frame onto canvas with proper aspect ratio containment
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.floor(frameIndex)));
    const img = imagesRef.current[clampedIndex];

    if (!img || !img.complete || img.naturalWidth === 0) {
      // Fallback: search backwards for nearest loaded frame
      for (let i = clampedIndex - 1; i >= 0; i--) {
        const fallbackImg = imagesRef.current[i];
        if (fallbackImg && fallbackImg.complete && fallbackImg.naturalWidth > 0) {
          ctx.drawImage(fallbackImg, 0, 0, canvas.width, canvas.height);
          return;
        }
      }
      return;
    }

    if (canvas.width !== 1920) {
      canvas.width = 1920;
      canvas.height = 1080;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, 1920, 1080);
  }, []);


  // Preload frames in chunks (critical first frames first, then remainder in background)
  useEffect(() => {
    let isMounted = true;

    // Load initial 20 frames immediately so UI is instant
    const loadBatch = (start: number, end: number) => {
      for (let i = start; i < end; i++) {
        if (!isMounted) return;
        const img = new Image();
        img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
        img.onload = () => {
          if (!isMounted) return;
          imagesRef.current[i] = img;

          // Render first frame as soon as frame 0 arrives
          if (i === 0) {
            renderFrame(0);
          }
        };
      }
    };


    // Immediate first 30 frames
    loadBatch(0, 30);

    // Remaining frames scheduled smoothly
    const timer = setTimeout(() => {
      loadBatch(30, TOTAL_FRAMES);
    }, 150);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [renderFrame]);

  // Track scroll position seamlessly
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollableHeight = container.offsetHeight - window.innerHeight;

      if (totalScrollableHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight));

      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };


    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 60FPS Render loop with smooth linear interpolation (lerp)
  useEffect(() => {
    const tick = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      // Silky responsive smoothing: lerp with 0.25 coefficient
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.25;
        renderFrame(currentFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [renderFrame]);

  return (
    <section
      ref={containerRef}
      id="scroll-cinematic"
      style={{
        position: "relative",
        height: "380vh", // Generous height for silky-smooth scroll pacing
        backgroundColor: "#030712",
        zIndex: 2,
      }}
    >
      {/* Sticky Viewport Container */}
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#030712",
        }}
      >
        {/* Canvas Display */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.96) contrast(1.04)",
              willChange: "transform",
            }}
          />

          {/* Subtle Ambient Vignette & Gradient Edge Transition */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, transparent 60%, rgba(3, 7, 18, 0.3) 85%, rgba(3, 7, 18, 0.95) 100%), linear-gradient(to bottom, rgba(3, 7, 18, 0.8) 0%, transparent 12%, transparent 88%, rgba(3, 7, 18, 0.95) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}

