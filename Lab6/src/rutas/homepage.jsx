import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>Bienvenido al Laboratorio 5</h2>
      <p>Elije lo que hacer</p>
      <br></br>
      <br></br>
      <button className="btn" onClick={() => navigate('/dashboard')}>
        Ir al Dashboard
      </button>
    </div>
  );
}