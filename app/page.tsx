'use client';

import { useState } from 'react';
import Landing from '@/components/Landing';
import Dashboard from '@/components/Dashboard';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className={styles.container}>
      {/* Tab Navigation */}
      <nav className={styles.tabNav}>
        <button
          className={`${styles.tabButton} ${activeTab === 'landing' ? styles.active : ''}`}
          onClick={() => setActiveTab('landing')}
        >
          Landing
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'dashboard' ? styles.active : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
      </nav>

      {/* Content */}
      <main className={styles.content}>
        {activeTab === 'landing' && <Landing />}
        {activeTab === 'dashboard' && <Dashboard />}
      </main>
    </div>
  );
}
