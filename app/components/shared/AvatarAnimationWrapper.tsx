'use client'

import dynamic from "next/dynamic";

const AvatarAnimation = dynamic(() => import("../../animation/AvatarAnimation"), {
    ssr: false,
  });

  
const AvatarAnimationWrapper = () => {
  return (
    <AvatarAnimation />
  )
}

export default AvatarAnimationWrapper