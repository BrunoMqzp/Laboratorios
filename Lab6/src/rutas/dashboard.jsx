import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Dashboard</h2>
    <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        <div style={{
          background: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
          minWidth: '150px'
        }}>
          <h3>Usuario</h3>
          <p>01</p>
        </div>

        <div style={{
          background: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
          minWidth: '150px'
        }}>
          <h3>Ventas</h3>
          <p>0</p>
        </div>

        <div style={{
          background: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
          minWidth: '150px'
        }}>
          <h3>Compra</h3>
          <p>0</p>
        </div>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <button className="btn" onClick={() => navigate('/home')}>
          Ir a Home
        </button>
      </div>
    </div>
  );
}
