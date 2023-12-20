"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Mesh } from "three";
import { AdditiveBlending } from "three";

type Particle = {
  x: number;
  y: number;
  z: number;
};

const config = {
  particles: 200,
  widthRadius: 100,
  widthRatio: 1,
  topHeightRadius: 90,
  bottomHeightRadius: 100,
  xThickness: 7,
  xRandomnessFactor: 2.2,
  xRandomnessShape: 2.2,
  xRandomness: 5,
  yThickness: 20,
  max_speed: 0.5,
  min_speed: -0.5,
};

const Particles = ({ children }: { children: React.ReactNode }) => {
  const particle = useRef<Mesh>(null);

  const pathOffset =
    Math.pow(Math.random() * config.xRandomnessShape, config.xRandomness - config.xRandomness / 2) *
    config.xThickness;

  const verticalRandomness = Math.random() * (config.yThickness - 1) + 1 - config.yThickness / 2;

  const speed = Math.random() * (config.min_speed - config.max_speed) + config.max_speed;

  const circumference = (config.widthRadius * Math.PI * 2) / 100;
  const delayOffsetFactor = 100;
  const delayOffset = Math.random() * delayOffsetFactor;

  useFrame(({ clock }) => {
    const timer = clock.getElapsedTime() * speed + delayOffset;
    const isEven = Math.floor(timer / circumference) % 2 == 0;

    // When the loop count is even, draw bottom 8 shape
    // if odd, draw top 8 shape
    if (particle.current) {
      particle.current.position.x = isEven
        ? Math.sin(timer) * config.widthRadius * config.widthRatio + pathOffset
        : Math.sin(timer) * config.widthRadius + pathOffset;
      particle.current.position.y = isEven
        ? Math.cos(timer) * config.bottomHeightRadius -
          config.bottomHeightRadius +
          verticalRandomness
        : -Math.cos(timer) * config.topHeightRadius + config.topHeightRadius + verticalRandomness;
    }
  });

  return <mesh ref={particle}>{children}</mesh>;
};

export default function Page() {
  const [particles, setParticles] = useState<Particle[]>(
    [...Array(config.particles)].map(() => ({ x: 0, y: 0, z: 0 }))
  );

  // eslint-disable-next-line react/display-name
  const Geometry = useMemo(() => () => <circleGeometry args={[3, 9]} />, []);

  const Material = () =>
    useMemo(() => <meshStandardMaterial color="#ffffff" blending={AdditiveBlending} />, []);

  return (
    <div className="h-full w-full">
      <Canvas dpr={[1, 2]} camera={{ fov: 75, position: [0, 0, 500] }}>
        <ambientLight intensity={0.5} />
        <group>
          {particles?.map((particle, index) => (
            <Particles key={`particle-${index}`}>
              <Geometry />
              <Material />
            </Particles>
          ))}
        </group>
      </Canvas>
    </div>
  );
}
