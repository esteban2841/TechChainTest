'use client'
import { createContext } from 'react'

export interface Fenix {
    autoRotate: boolean
}

export interface FenixContext {

    [key: string]: any;
    //Fenix animation handlers
    fenix: Fenix
    toggleRotation?: (payload: any) => void

    
}

export const FenixContext = createContext({} as FenixContext)