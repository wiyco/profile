type Profile = {
  name: string;
  bio: string[];
  skills: string[];
};

type Region = "en" | "ja";

function getProfile(region: Region): Profile {
  switch (region) {
    case "en":
      return {
        name: "wiyco",
        bio: [
          "Hi!",
          "\n",
          'I usually go by the name "wiyco".',
          "I am continuously catching up every day to move away from being a temporary software engineer.",
          "\n",
          "My interests include service design, team management, web development (full-stack), mobile development, UI/UX design, and animation.",
          "\n",
          "I have obtained the Applied Information Technology Engineer certification.",
        ],
        skills: [],
      };
    case "ja":
      return {
        name: "wiyco",
        bio: [
          "こんにちは！",
          "\n",
          '普段は"wiyco"という名前で活動しています。',
          "ソフトウェアエンジニア（仮）から離脱するために、日々キャッチアップを続けています。",
          "\n",
          "関心のあるものは、サービスデザイン・チームマネジメント・Web（フルスタック）・モバイル・UI/UXデザイン・アニメーションです。",
          "\n",
          "応用情報技術者を取得しています。",
        ],
        skills: [],
      };
  }
}

export { getProfile };

export const R3F_SOURCE_CODE = `type LineProps = {
  dash: number;
  count: number;
  colors: React.ComponentProps<typeof Fatline>["color"][];
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
`;
