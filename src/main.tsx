import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './templates/LandingPage'
import { FenixProvider } from './context'
import { Object3DRenderer } from './components/molecules/Object3DRenderer'
import { Fenix3DObject } from './components/atoms/Fenix3DObject'

const MODELS3D = [
  {
    children: <Fenix3DObject/>,
    context: true,
    name: 'fenix'
  }
]

const root = createRoot(document.getElementById('root')!)
root.render(
    <FenixProvider>
        <div className="w-full absolute ">
            {MODELS3D.map((model, index)=>{
              return <Object3DRenderer key={index} name={model.name} context={model.context}>
                {model.children}
              </Object3DRenderer>
            })}
          </div>
        <LandingPage />
    </FenixProvider>
)
