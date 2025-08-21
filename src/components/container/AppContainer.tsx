'use client'
import { store } from '@/lib/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import MainContainer from './MainContainer'

interface Props {
  children: React.ReactNode
}

const AppContainer = ({children}:Props) => {
  return (
    <Provider store={store}>
      <MainContainer>
        {children}
      </MainContainer>
    </Provider>
  )
}

export default AppContainer