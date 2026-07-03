import { ImageResponse } from 'next/og'
 
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: '#FAFAFA', // brand-ivory
          color: '#C6A87C', // brand-gold
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontFamily: 'sans-serif',
          border: '4px solid #C6A87C',
        }}
      >
        10
      </div>
    ),
    {
      ...size,
    }
  )
}
