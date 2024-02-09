import { ReactNode } from 'react';

type StackProps = {
  children: ReactNode,
  pos?: string
}

export default function Stack({ children, pos }: StackProps) {
  return (
    <div className='stack' style={{
      justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
    }}>
      {children}
    </div>
  );
};