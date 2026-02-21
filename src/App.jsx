import { Routes, Route, useNavigate } from 'react-router-dom';

// 1. Root Application Setup (The Routes)
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}

// 2. The First Page
function FirstPage() {
  const navigate = useNavigate();
  
  return (
    <div style={styles.page}>
      <h1>Page One</h1>
      <p style={styles.text}>Welcome to the First Page!</p>
      
      {/* Navigate forward to the specific path */}
      <button onClick={() => navigate('/second')} style={styles.button}>
        Go to Page Two
      </button>
    </div>
  );
}

// 3. The Second Page
function SecondPage() {
  const navigate = useNavigate();
  
  return (
    // Slight color change to distinguish, just like the Flutter example
    <div style={{ ...styles.page, backgroundColor: '#f0f0f0' }}>
      <h1>Page Two</h1>
      <p style={styles.text}>You have arrived at Page Two.</p>
      
      {/* Navigate backward by going -1 in the browser history stack */}
      <button onClick={() => navigate(-1)} style={styles.button}>
        Go Back
      </button>
    </div>
  );
}

// Basic styling to center content like Flutter's Scaffold/Center widgets
const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
  },
  text: { 
    fontSize: '24px', 
    marginBottom: '20px' 
  },
  button: { 
    padding: '10px 20px', 
    fontSize: '16px', 
    cursor: 'pointer' 
  }
};