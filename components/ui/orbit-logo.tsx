"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";

type OrbitDot3DProps = {
  radius?: number;
  duration?: number;
  size?: number;
  color?: string;
  delay?: number;
  blur?: number;
  tiltX?: number;
  tiltZ?: number;
};

function OrbitDot3D({
  radius = 160,
  duration = 12,
  size = 16,
  color = "#38bdf8",
  delay = 0,
  blur = 5,
  tiltX = 0,
  tiltZ = 0,
}: OrbitDot3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const start = useRef<number | null>(null);

  useAnimationFrame((t) => {
    if (start.current === null) start.current = t;
    const elapsed = (t - start.current) / 1000; // seconds
    const angle = ((elapsed - (delay ?? 0)) / duration) * 360;
    if (ref.current) {
      ref.current.style.transform = `
        rotateX(${tiltX}deg)
        rotateZ(${tiltZ}deg)
        rotateY(${angle}deg)
        translateZ(${radius}px)
      `;
    }
  });

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: `blur(${blur}px)`,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        zIndex: 5,
        pointerEvents: "none",
      }}
    />
  );
}

export default function OrbitLogo() {
  const dots = useMemo(
    () =>
      [
        { color: "#30C8C9", duration: 2.5, size: 18, delay: 0 },
        { color: "#30C8C9", duration: 3, size: 16, delay: 0.8 },
        { color: "#30C8C9", duration: 3.7, size: 14, delay: 1.6 },
      ].map((dot) => ({
        ...dot,
        tiltX: Math.random() * 120 - 60,
        tiltZ: Math.random() * 120 - 60,
      })),
    []
  );

  return (
    <div
      className="aspect-square w-full relative flex items-center justify-center"
      style={{
        perspective: 600,
      }}
    >
      {/* Orbiting dots in 3D with random tilt */}
      {dots.map((dot, i) => (
        <OrbitDot3D key={i} radius={160} {...dot} />
      ))}

      {/* Logo Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="w-1/2 h-1/2"
          animate={{
            rotateY: [0, 360], // Quay quanh trục Y
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          <Image
            src="/logos/aletech.svg"
            alt="Aletech Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
