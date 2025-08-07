import React, { PropsWithChildren } from 'react'

const HeroButton = ({children,className}: PropsWithChildren<{className?:string}>) => {
  return <button className={`hero-button ${className}`}>{children}</button>;
}

export default HeroButton