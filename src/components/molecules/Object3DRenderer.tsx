
import * as THREE from 'three'
import { Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { Suspense, useRef, useContext } from 'react'
import { Loader } from '../atoms/Loader'
import { FenixContext } from '../../context/fenix/FenixContext'

const ThreeDimentionContainerRenderer = styled.div`
  height: 85dvh;
  width: 85vw;
  position: fixed;
  @media (max-width: 700px) {
    position: relative;
    height: 65vh;
    width: 65vw;
  }
  background-color: transparent;
`

interface Object3DRendererProps {
  children: React.ReactNode
  context: boolean
  name: string
}

export const Object3DRenderer = ({ children, context, name }: Object3DRendererProps) => {
  const ref = useRef()
  const { fenix } = useContext(FenixContext)
  const { autoRotate } = fenix
  const isContextNeeded = context

  return (
    <ThreeDimentionContainerRenderer className={name}>
      <Canvas
        dpr={[1, 10]}
        camera={{ fov: 1 }}
        frameloop="always"
        /* ── (1) ACES tone mapping ─────────────────────────────── */
        gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
        /* ── (2) sRGB output + a touch of exposure ─────────────── */
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace
          gl.toneMappingExposure = 1.1 // small boost; try 1.0–1.2
        }}
      >
        <Suspense fallback={<Loader />}>
          {/* ── (3) Lower intensity to avoid washing out textures ── */}
          <Stage
            preset="portrait"
            intensity={1.0}     // was 10
            environment="night" // keep your env; change to "studio" if you want cooler whites
          >
            {children}
          </Stage>
          {/* no extra Environment added, to avoid double environments */}
        </Suspense>

        {/* Keep your camera rotation behavior exactly the same */}
        <OrbitControls
          ref={ref as any}
          makeDefault={!isContextNeeded}
          autoRotate={autoRotate && isContextNeeded}
          autoRotateSpeed={6}
        />
      </Canvas>
    </ThreeDimentionContainerRenderer>
  )
}