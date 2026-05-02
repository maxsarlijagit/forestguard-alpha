'use client';

import { useEffect, useState } from 'react';

export default function Landing() {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    // Fetch the landing HTML from outputs
    fetch('/forestguard-landing.html')
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error('Failed to load landing:', err));
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ width: '100%', minHeight: '100%' }}
    />
  );
}
