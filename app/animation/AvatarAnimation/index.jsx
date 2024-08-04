import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./Experience";

function AvatarAnimation() {
  return (
    <>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 50 }}>
              <Experience />
        </Canvas>
      <Leva hidden />
    </>
  );
}

export default AvatarAnimation;
