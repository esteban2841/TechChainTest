'use client'
import React, { useReducer } from 'react'
import { FenixContext } from './FenixContext';
import { FenixReducer } from './FenixReducer';

export interface SectionRef {
    current: HTMLElement,
    name: string
}

const INITIAL_STATE: FenixContext = {
    fenix: {autoRotate: true},
}

interface Props {
    children: React.ReactElement | React.ReactElement[] | React.ReactNode
}

export const FenixProvider = ({children}: Props) => {
    
    const [state, dispatch] = useReducer(FenixReducer, INITIAL_STATE)
    
    
    const toggleRotation = (payload: FenixContext) =>{
        
        dispatch({type:'toggleRotation', payload: payload})
    }


    return (
        <FenixContext.Provider value={{
            ...state,
            toggleRotation,
        }}>
            {children}
        </FenixContext.Provider>
    )
}


//name company

// safetyradar