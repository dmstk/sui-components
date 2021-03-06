import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'
import cx from 'classnames'
import {useEventListener, useBoolean} from '@s-ui/react-hooks'

const Overlay = 'div'
const Body = 'div'
const Content = 'div'

const PLACEMENTS = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
}

export default function MoleculeDrawer({
  portalContainerId = 'drawer-react-portal',
  isOpen = false,
  placement = PLACEMENTS.LEFT,
  onClose,
  children
}) {
  const overlayRef = useRef(null)
  const [isClientReady, setClientReady] = useState(false)
  const [value, {off, on}] = useBoolean(isOpen)

  useEffect(() => {
    setClientReady(true)
  }, [])

  useEffect(() => {
    isOpen && on()
  }, [isOpen, on])

  useEventListener('keydown', event => {
    if (isOpen === false) return
    if (event.key === 'Escape') {
      typeof onClose === 'function' && onClose(event)
      event.preventDefault()
    }
  })

  const getContainer = () => {
    let containerDOMEl = document.getElementById(portalContainerId)
    if (!containerDOMEl) {
      containerDOMEl = document.createElement('div')
      containerDOMEl.id = portalContainerId
      document.body.appendChild(containerDOMEl)
    }
    return containerDOMEl
  }

  const drawer = value && (
    <div className="react-MoleculeDrawer">
      <Overlay
        ref={overlayRef}
        className="react-MoleculeDrawer-overlay"
        onClick={event => {
          overlayRef.current === event.target &&
            typeof onClose === 'function' &&
            onClose(event)
        }}
      >
        <Content
          onAnimationEnd={() => !isOpen && off()}
          className={cx(
            'react-MoleculeDrawer-content',
            `react-MoleculeDrawer-content--${placement}`
          )}
          style={{
            animation: `${
              isOpen ? 'open' : 'close'
            }-drawer-${placement} 0.3s both`
          }}
        >
          <Body className="react-MoleculeDrawer-body">{children}</Body>
        </Content>
      </Overlay>
    </div>
  )

  return isClientReady ? createPortal(drawer, getContainer()) : null
}

export {PLACEMENTS as moleculeDrawerPlacements}

MoleculeDrawer.displayName = 'MoleculeDrawer'
MoleculeDrawer.propTypes = {
  /** Tells if the drawer is open or not */
  isOpen: PropTypes.bool,
  /** On close callback used to manage the isOpen prop from the parent */
  onClose: PropTypes.func,
  /** Screen position where the drawer will be displayed */
  placement: PropTypes.oneOf(Object.values(PLACEMENTS))
}
