"use client";

import { useRef, useEffect, useCallback } from "react";
import styles from "./NeuralBackground.module.css";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const pointsRef = useRef<Point[]>([]);
  const animRef = useRef<number>(0);

  const initPoints = useCallback((w: number, h: number) => {
    const pts: Point[] = [];
    const spacing = 80;
    const cols = Math.ceil(w / spacing) + 2;
    const rows = Math.ceil(h / spacing) + 2;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing - spacing;
        const y = r * spacing - spacing;
        pts.push({
          x, y,
          vx: 0, vy: 0,
          baseX: x, baseY: y,
        });
      }
    }
    pointsRef.current = pts;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      initPoints(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const influenceRadius = 150;
      const pts = pointsRef.current;

      // Update points
      for (const p of pts) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < influenceRadius && dist > 0) {
          const force = (1 - dist / influenceRadius) * 12;
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }

        // Spring back
        p.vx += (p.baseX - p.x) * 0.03;
        p.vy += (p.baseY - p.y) * 0.03;

        // Damping
        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw connections
      const connectionDist = 100;
      ctx.strokeStyle = "rgba(128, 0, 128, 0.06)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.08;
            ctx.strokeStyle = `rgba(128, 0, 128, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of pts) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / (influenceRadius * 1.5));

        const radius = 1.5 + proximity * 2;
        const alpha = 0.12 + proximity * 0.4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(128, 0, 128, ${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initPoints]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
