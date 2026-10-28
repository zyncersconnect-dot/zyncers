"use client";

import { useEffect, useRef } from "react";

export function NeonBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Glowing network nodes
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
    }

    const colors = [
      "rgba(0, 240, 255, ",  // Electric Neon Cyan
      "rgba(34, 199, 255, ",  // Neon Sky Blue
      "rgba(0, 110, 255, ",   // Cobalt Blue
      "rgba(110, 231, 207, ", // Emerald Cyan Accent
    ];

    const nodeCount = Math.min(width < 768 ? 32 : 65, 80);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Floating Neon Energy Pulses
    interface Pulse {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
    }

    const pulses: Pulse[] = [];
    for (let i = 0; i < 4; i++) {
      pulses.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 10 + Math.random() * 50,
        maxRadius: 180 + Math.random() * 120,
        alpha: 0.15,
        speed: 0.35 + Math.random() * 0.3,
      });
    }

    const maxDistance = width < 768 ? 100 : 155;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render expanding glowing radar pulses
      pulses.forEach((pulse) => {
        pulse.radius += pulse.speed;
        const currentAlpha = pulse.alpha * (1 - pulse.radius / pulse.maxRadius);

        if (pulse.radius >= pulse.maxRadius) {
          pulse.radius = 10;
          pulse.x = Math.random() * width;
          pulse.y = Math.random() * height;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${Math.max(0, currentAlpha)})`;
        ctx.lineWidth = 1.2;
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.restore();
      });

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}${node.alpha})`;
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();

        // Connect adjacent nodes with neon threads
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.8,
      }}
      aria-hidden="true"
    />
  );
}
