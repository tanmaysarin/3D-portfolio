import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  // return (
  //   <primitive 
  //       object = {earth.scene}
  //     />
  // )

  return (
    <div>Earth</div>
  )
}

const EarthCanvas = () => {

  <Canvas
    frameloop='demand'
    shadows
    camera={{ }}
    gl={{preserveDrawingBuffer: true }}
  >

    {/** Display a loader while the canvas loads */}
    <Suspense fallback={<CanvasLoader />}>

      {/** Controls the actions possible on the canvas: zoom=false, rotation axis: xy */}
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <Earth />

    </Suspense>
    {/** Display a loader while the canvas loads */}

  </Canvas>
}

export default EarthCanvas