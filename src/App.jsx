import { useState } from 'react';
import Soldiers from './components/Soldiers';
import Weekly from './components/Weekly';
import Tracking from './components/Tracking';

export default function App() {
  const [tab, setTab] = useState('soldiers');

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{
        background: '#b30000',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        fontSize: '1.5rem'
      }}>
        ניהול כוח אדום
      </header>

      <nav style={{
        display: 'flex',
        justifyContent: 'space-around',
        background: '#ddd',
        padding: '0.5rem'
      }}>
        <button onClick={() => setTab('soldiers')} style={tab === 'soldiers' ? activeStyle : {}}>חיילים</button>
        <button onClick={() => setTab('weekly')} style={tab === 'weekly' ? activeStyle : {}}>שבועות</button>
        <button onClick={() => setTab('tracking')} style={tab === 'tracking' ? activeStyle : {}}>מעקב</button>
      </nav>

      <main style={{ padding: '1rem' }}>
        {tab === 'soldiers' && <Soldiers />}
        {tab === 'weekly' && <Weekly />}
        {tab === 'tracking' && <Tracking />}
      </main>
    </div>
  );
}

const activeStyle = {
  background: '#b30000',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem'
};
