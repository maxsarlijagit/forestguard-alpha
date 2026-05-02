import { readFileSync } from 'fs';
import { join } from 'path';

export default function Dashboard() {
  let htmlContent = '';
  
  try {
    const filePath = join(process.cwd(), 'public', 'forestguard-dashboard.html');
    htmlContent = readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error('Failed to load dashboard HTML:', error);
    htmlContent = '<div>Error loading dashboard</div>';
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ width: '100%', minHeight: '100%' }}
    />
  );
}
