import { ImageResponse } from 'next/og'
 
export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 300,
          background: '#FAFAFA', // brand-ivory
          color: '#C6A87C', // brand-gold
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontFamily: 'sans-serif',
          border: '8px solid #C6A87C',
          borderRadius: '20%', // App icon rounding
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
