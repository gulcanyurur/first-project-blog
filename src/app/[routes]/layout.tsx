import React from 'react'

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div>
      header
      {children}
      Footer
    </div>
  )
}

export default RoutesLayout

