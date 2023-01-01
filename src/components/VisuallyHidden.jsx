const hidden = {
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  width: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
}

const VisuallyHidden = ({ children }) => {
  return <span style={hidden}>{children}</span>
}

export default VisuallyHidden
