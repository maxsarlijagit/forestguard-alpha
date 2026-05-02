import { readFileSync } from 'fs';
import { join } from 'path';

export default function Home() {
  let landingHtml = '';
  let dashboardHtml = '';
  
  try {
    const landingPath = join(process.cwd(), 'public', 'forestguard-landing.html');
    const dashboardPath = join(process.cwd(), 'public', 'forestguard-dashboard.html');
    landingHtml = readFileSync(landingPath, 'utf-8');
    dashboardHtml = readFileSync(dashboardPath, 'utf-8');
  } catch (error) {
    console.error('Failed to load HTML files:', error);
    return <div>Error loading page</div>;
  }

  return (
    <div>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #07090a; }
        .tab-nav { position: sticky; top: 0; z-index: 100; background: #07090a; border-bottom: 1px solid #1a2520; display: flex; }
        .tab-button { flex: 1; padding: 1rem; background: none; border: none; color: #8a9489; font-size: 14px; cursor: pointer; border-bottom: 3px solid transparent; text-transform: uppercase; letter-spacing: 4px; }
        .tab-button.active { color: #82c69b; border-bottom-color: #82c69b; }
        .content { display: none; }
        .content.active { display: block; }
      `}</style>
      
      <nav className="tab-nav">
        <button className="tab-button active" onClick={(e) => {
          document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
          e.currentTarget.classList.add('active');
          document.getElementById('landing')?.classList.add('active');
        }}>Landing</button>
        <button className="tab-button" onClick={(e) => {
          document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
          e.currentTarget.classList.add('active');
          document.getElementById('dashboard')?.classList.add('active');
        }}>Dashboard</button>
      </nav>
      
      <div id="landing" className="content active" dangerouslySetInnerHTML={{ __html: landingHtml }} />
      <div id="dashboard" className="content" dangerouslySetInnerHTML={{ __html: dashboardHtml }} />
    </div>
  );
}
