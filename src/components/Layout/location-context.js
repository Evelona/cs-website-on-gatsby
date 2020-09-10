import React, { useContext } from 'react'

const context = React.createContext(null)

export default context.Provider

export const useLocation = () => useContext(context)