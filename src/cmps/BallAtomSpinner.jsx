/* eslint-disable react/prop-types */
export function BallAtomSpinner({ color = '#1ed760', size }) {
  // size: 1,2,3
  // color: hex, default black
  return (
    <>
      <div
        className={`la-ball-atom ${size ? `la-${size}` : 'la-1'}`}
        style={{ color: color || '#000000' }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}
