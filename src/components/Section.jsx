const Section = ({ children, bleed = 'full', className, props }) => {
  const getWidth = () => {
    if (bleed === 'full') {
      return '100%'
    }

    if (bleed === 'half') {
      return 'min(1000px, calc(100% - 64px))'
    }

    if (bleed === 'quarter') {
      return 'min(800px, calc(100% - 64px))'
    }
  }

  const styles = {
    gridColumn: '1/4',
    marginInline: 'auto',
    width: getWidth(),
  }

  return className ? (
    <div style={styles} className={className} {...props}>
      {children}
    </div>
  ) : (
    <div style={styles} {...props}>
      {children}
    </div>
  )
}

export default Section
