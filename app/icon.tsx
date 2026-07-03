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
          background: 'linear-gradient(135deg, #1A130C 0%, #2A2019 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '12px solid #C8A84B',
          borderRadius: '24%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-20px',
          }}
        >
          <span
            style={{
              fontSize: 260,
              fontWeight: 800,
              fontFamily: 'sans-serif',
              color: '#FDFBF7',
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
            }}
          >
            10
          </span>
          <span
            style={{
              fontSize: 160,
              fontWeight: 900,
              fontFamily: 'sans-serif',
              color: '#C8A84B',
              lineHeight: 0.8,
            }}
          >
            F
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
