'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    // Fetch the dashboard HTML from outputs
    fetch('/forestguard-dashboard.html')
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error('Failed to load dashboard:', err));
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ width: '100%', minHeight: '100%' }}
    />
  );
}
