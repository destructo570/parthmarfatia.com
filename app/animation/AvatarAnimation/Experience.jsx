import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef } from "react";
import { Avatar } from "./Avatar";
import { Office } from "./Office";

const framerMotionConfig = {
  type: "spring",
  mass: 5,
  stiffness: 500,
  damping: 50,
  restDelta: 0.0001,
};


export const Experience = () => {
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, 0, {
      ...framerMotionConfig,
    });
  }, []);

  const characterContainerAboutRef = useRef();

  return (
    <>
      <motion.group
        position={[0.2, 0.14400000000000002, 2.6]}
        rotation={[-Math.PI/2, 0, 3.0]}
        animate={"0"}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
          }
        }}
      >
        <Avatar animation={"Typing"} />
      </motion.group>
      <ambientLight intensity={1.5} />
      <motion.group
        position={[0, 0, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={0}
        animate={{
          y: 0,
        }}
      >
        <Office section={0} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>
    </>
  );
};
