/* eslint-disable react/prop-types */
// cmps/Icon.jsx

// mapping of icon names to their filepaths
const fileNames = {
  accountCircle: 'account_circle_000000_FILL0_wght400.svg',
}

function Icon({
  name,
  className = '',
  onClick = () => {},
  dataLabel = '',
  ...props
}) {
  const fileName = fileNames[name]
  if (!fileName) {
    console.warn(`Icon: name "${name}" does not exist in fileNames mapping`)
    return null
  }

  const svgPath = `./assets/icons/${fileName}`

  return (
    <div
      className='icon-label'
      onClick={onClick}
      data-label={dataLabel}
      {...props}
    >
      <img src={svgPath} alt={name} className={`icon-style ${className}`} />
    </div>
  )
}

export default Icon
