import { readFileSync } from 'fs';
import { join } from 'path';

export default function Landing() {
  let htmlContent = '';
  
  try {
    const filePath = join(process.cwd(), 'public', 'forestguard-landing.html');
    htmlContent = readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error('Failed to load landing HTML:', error);
    htmlContent = '<div>Error loading landing page</div>';
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ width: '100%', minHeight: '100%' }}
    />
  );
}
