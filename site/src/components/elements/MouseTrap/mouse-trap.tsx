import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  ReactNodeArray,
  useRef,
} from 'react'
import { ActiveAreaType } from '@Components/context/MousePosition/mouse-position-provider'
import { useMouseTrap } from '@Utils/hooks/use-mouse-trap'
import useEventListener from '@use-it/event-listener'

interface MouseTrap extends ComponentPropsWithoutRef<'div'> {
  area: ActiveAreaType
  additionalProps: { [key: string]: any }
  children: ReactNode | ReactNodeArray
}

export function MouseTrap({
  children,
  additionalProps,
  area,
  ...divProps
}: MouseTrap) {
  const { mouseenter, mouseleave } = useMouseTrap()
  const ref = useRef<any>(null)
  useEventListener(
    'mouseenter',
    mouseenter({ area, additionalProps }),
    ref && ref.current,
  )
  useEventListener(
    'mouseleave',
    mouseleave({ area, additionalProps }),
    ref && ref.current,
  )

  return (
    <div ref={ref} {...divProps}>
      {children}
    </div>
  )
}
