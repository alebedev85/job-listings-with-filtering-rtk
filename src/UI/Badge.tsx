import { ReactNode } from 'react';
import { ReactComponent as Remove } from '../assets/images/icon-remove.svg';

type BadgeProps = {
  variant?: 'basic' | 'clearable' | 'rounded',
  colorScheme?: 'light' | 'primary' | 'dark',
  children: ReactNode,
  onClear?: () => void,
  onClick?: () => void,
}

export default function Badge({
  variant = 'basic',
  colorScheme = 'light',
  children,
  onClear,
  onClick,
}: BadgeProps) {
  return (
    <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
      <span>
        {children}
      </span>
      {variant === 'clearable' && (
        <div className='badge-remover' onClick={onClear}>
          <Remove />
        </div>
      )}
    </div>
  )
};