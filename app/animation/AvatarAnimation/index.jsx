import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./Experience";

function AvatarAnimation() {
  return (
    <>
        <Canvas shadows camera={{ position: [1, 4, 10], fov: 13.5 }}>
              <Experience />
        </Canvas>
      <Leva hidden />
    </>
  );
}

export default AvatarAnimation;
