import { ReactNode } from 'react';

type CardProps = {
  isFeatured?: boolean,
  className?: string,
  children: ReactNode,
}

export default function Card ({children, isFeatured, className}:CardProps) {
  return (
    <div
      className={
        `card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`
      }
    >
      {children}
    </div>
  )
}