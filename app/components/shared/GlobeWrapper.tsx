'use client'

import { useTheme } from "next-themes";
import { globeConfig, sampleArcs } from "../../utils/globe";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
    ssr: false,
  });

  
const GlobeWrapper = () => {
  const { theme } = useTheme();

  return (
    <World
        key={theme}
        globeConfig={globeConfig(theme)}
        data={sampleArcs}
    />
  )
}

export default GlobeWrapper