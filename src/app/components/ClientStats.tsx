import React from 'react';

const ClientStats = () => (
  <section style={{ background: '#fff', padding: '3rem 0', borderBottom: '1px solid #c9d6e3' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '2rem', color: '#0a1433' }}>Our clients give us</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: 250, borderRight: '1px solid #c9d6e3', padding: '0 2rem 0 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '4rem', fontWeight: 700, color: '#0a1433' }}>9.8 <span style={{ fontWeight: 400, color: '#0a1433' }}>/ 10</span></span>
          <div style={{ marginTop: '0.5rem', color: '#23305a', fontSize: '1.1rem' }}>for the quality of our people and service</div>
        </div>
        <div style={{ flex: 1, minWidth: 250, borderLeft: '1px solid #c9d6e3', padding: '0 0 0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '4rem', fontWeight: 700, color: '#0a1433' }}>&gt; 85%</span>
          <div style={{ marginTop: '0.5rem', color: '#23305a', fontSize: '1.1rem' }}>repeat business</div>
        </div>
      </div>
    </div>
  </section>
);

export default ClientStats; 