/**
 * Part of this code is taken from `react-three-fiber` examples 🐢
 * @link https://docs.pmnd.rs/react-three-fiber/getting-started/examples
 */
"use client";

import { R3F_SOURCE_CODE } from "@constants/profile";
import { Themes } from "@constants/themes";
import type { Color } from "@react-three/fiber";
import { Canvas, extend, ReactThreeFiber, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";
import { easing } from "maath";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useTheme } from "next-themes";
import { useMemo, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import * as THREE from "three";

import { jetBrainsMono } from "@/styles/fonts";
import { cn } from "@/utils/cn";

extend({ MeshLineGeometry, MeshLineMaterial });

/**
 * Property 'meshLineGeometry/meshLineMaterial' does not exist on type 'JSX.IntrinsicElements'.ts(2339)
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ReactThreeFiber.Node<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: ReactThreeFiber.Node<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}

export default function Page() {
  const { resolvedTheme } = useTheme();

  const { dash, count, radius } = useControls({
    dash: { value: 0.93, min: 0, max: 0.99, step: 0.01 },
    count: { value: 28, min: 0, max: 200, step: 1 },
    radius: { value: 45, min: 1, max: 100, step: 1 },
  });

  return (
    <>
      <div className="h-screen w-full blur-md">
        <Canvas camera={{ position: [0, 0, 5], fov: 90 }}>
          {resolvedTheme === Themes.DARK ? (
            <color attach="background" args={["#171717"]} />
          ) : (
            <color attach="background" args={["#f5f5f5"]} />
          )}
          <Lines
            dash={dash}
            count={count}
            radius={radius}
            colors={
              resolvedTheme === Themes.DARK
                ? [
                    [5, 0.5, 1], // red
                    [0.5, 1, 5], // blue
                    [0.5, 5, 1], // green
                    [5, 2, 0.5], // amber
                    [2, 0.5, 5], // violet
                  ]
                : ["#fca5a5", "#93c5fd", "#86efac", "#fcd34d", "#c4b5fd"]
            }
          />
          <Rig />
          {resolvedTheme === Themes.DARK && (
            <EffectComposer>
              <Bloom mipmapBlur luminanceThreshold={0.9} luminanceSmoothing={0.02} radius={0.25} />
            </EffectComposer>
          )}
        </Canvas>
      </div>
      <section className="fixed left-1/2 top-1/2 grid max-h-[calc((100dvh-3.5rem-6rem)*.8)] w-4/5 max-w-4xl -translate-x-1/2 -translate-y-1/2 content-start overflow-y-auto rounded-xl border-1 border-neutral-600/15 shadow-md backdrop-blur-xl dark:border-neutral-400/15">
        <TypeAnimation
          className={cn(
            "block h-max w-full px-4 py-3 text-left text-xs font-light leading-relaxed text-neutral-800 dark:text-neutral-100",
            jetBrainsMono.className
          )}
          style={{ whiteSpace: "pre-wrap" }}
          sequence={[
            "",
            1000,
            R3F_SOURCE_CODE,
            // getProfile("en").bio.join("\n"),
            // 5000,
            // "",
            // 1000,
            // getProfile("ja").bio.join("\n"),
            // 5000,
            // "",
            // 1000,
          ]}
          wrapper="h1"
          cursor
          speed={60}
          deletionSpeed={90}
          repeat={0}
        />
      </section>
    </>
  );
}

type LineProps = {
  dash: number;
  count: number;
  colors: FatlineProps["color"][];
  radius: number;
  rand?: typeof THREE.MathUtils.randFloatSpread;
};

function Lines({
  dash,
  count,
  colors,
  radius = 50,
  rand = THREE.MathUtils.randFloatSpread,
}: LineProps) {
  const lines = useMemo(() => {
    return Array.from({ length: count }, () => {
      const pos = new THREE.Vector3(rand(radius), rand(radius), rand(radius));
      const points = Array.from({ length: 10 }, () =>
        pos.add(new THREE.Vector3(rand(radius), rand(radius), rand(radius))).clone()
      );
      const curve = new THREE.CatmullRomCurve3(points).getPoints(300);
      return {
        color: colors[Math.floor(colors.length * Math.random())],
        width: Math.max(radius / 100, (radius / 50) * Math.random()),
        speed: Math.max(0.1, 1 * Math.random()),
        curve: curve.flatMap((point) => point.toArray()),
      };
    });
  }, [colors, count, radius, rand]);
  return lines.map((props, index) => <Fatline key={index} dash={dash} {...props} />);
}

type MeshRef = THREE.Mesh & {
  material: MeshLineMaterial;
};

type FatlineProps = {
  curve: number[];
  width: number;
  color: Color;
  speed: number;
  dash: number;
};

function Fatline({ curve, width, color, speed, dash }: FatlineProps) {
  const ref = useRef<MeshRef>(null);
  useFrame((state, delta) => (ref.current!.material.dashOffset -= (delta * speed) / 10));
  return (
    <mesh ref={ref}>
      <meshLineGeometry points={curve} />
      <meshLineMaterial
        transparent
        lineWidth={width}
        color={color}
        depthWrite={false}
        dashArray={0.25}
        dashRatio={dash}
        toneMapped={false}
      />
    </mesh>
  );
}

type RigProps = {
  radius?: number;
};

function Rig({ radius = 20 }: RigProps) {
  return useFrame((state, dt) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(state.pointer.x) * radius,
        Math.atan(state.pointer.y) * radius,
        Math.cos(state.pointer.x) * radius,
      ],
      0.25,
      dt
    );
    state.camera.lookAt(0, 0, 0);
  });
}
