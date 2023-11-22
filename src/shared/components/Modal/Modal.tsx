import { FC, ReactNode, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react'
import cls from './Modal.module.scss'
import { classNames } from 'utils/classNames'
import { Portal } from 'shared/components/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

type ModalProps = {
  open?: boolean
  onClose?: () => void
  children?: ReactNode
}

export const Modal: FC<ModalProps> = ({ onClose, open, children }) => {
  const [isClosing, setIsClosing] = useState(false)
  const { theme } = useTheme()
  const mods: Record<string, boolean> = {
    [cls.opened]: open,
    [cls.closing]: isClosing
  }
  const ref = useRef<ReturnType<typeof setTimeout>>()
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      ref.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 200)
    }
  }, [onClose])
  useEffect(() => {
    return () => {
      clearTimeout(ref.current)
    }
  }, [])
  const onClickContent = (e: SyntheticEvent) => {
    e.stopPropagation()
  }
  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onClickContent}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}
