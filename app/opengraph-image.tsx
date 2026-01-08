import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Handel Advocates - International Trade & Legal Services';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Fetch the SVG logo to embed in the OG image
  let logoSvgContent = '';
  try {
    const logoResponse = await fetch(new URL('/handel-logo.svg', 'https://handeladvocates.com'));
    logoSvgContent = await logoResponse.text();
  } catch (error) {
    console.error('Failed to fetch logo:', error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: 150,
              height: 150,
              marginBottom: 40,
              background: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
            }}
          >
            {logoSvgContent ? (
              <svg
                viewBox="0 0 200 200"
                style={{ width: 130, height: 130 }}
                dangerouslySetInnerHTML={{ __html: logoSvgContent }}
              />
            ) : (
              <div style={{ fontSize: 48, fontWeight: 'bold' }}>HA</div>
            )}
          </div>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              marginBottom: 20,
              background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Handel Advocates
          </h1>
          <p
            style={{
              fontSize: 32,
              color: '#cbd5e1',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Premier International Trade & Legal Services
          </p>
          <p
            style={{
              fontSize: 24,
              color: '#94a3b8',
              marginTop: 20,
            }}
          >
            Uganda • EAC • COMESA • Africa
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
