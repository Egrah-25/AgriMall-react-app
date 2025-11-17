import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('buyer');

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        {/* Welcome Section */}
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ 
            color: '#059669', 
            fontSize: '2.5rem', 
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>
            🌱 AgriMall
          </h1>
          <p style={{ 
            color: '#6b7280', 
            fontSize: '1.2rem',
            lineHeight: '1.6',
            marginBottom: '10px'
          }}>
            Connecting Farmers Directly to Buyers
          </p>
          <p style={{ 
            color: '#9ca3af', 
            fontSize: '1rem',
            lineHeight: '1.5'
          }}>
            Join Kenya's digital marketplace for fresh farm produce. 
            Eliminate middlemen, get fair prices, and build direct relationships.
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          marginBottom: '30px'
        }}>
          <div style={{ padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '10px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>👨‍🌾</div>
            <div style={{ fontWeight: 'bold', color: '#0369a1' }}>For Farmers</div>
            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Sell directly, earn more</div>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f0fdf4', borderRadius: '10px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🛒</div>
            <div style={{ fontWeight: 'bold', color: '#059669' }}>For Buyers</div>
            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Fresh produce, fair prices</div>
          </div>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleAuth}>
          {!isLogin && (
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px', color: '#6b7280' }}>
                I want to join as:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setUserType('farmer')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: userType === 'farmer' ? '#10b981' : '#e5e7eb',
                    color: userType === 'farmer' ? 'white' : '#6b7280',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Farmer
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('buyer')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: userType === 'buyer' ? '#10b981' : '#e5e7eb',
                    color: userType === 'buyer' ? 'white' : '#6b7280',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Buyer
                </button>
              </div>
            </div>
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '15px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
            required
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '15px'
            }}
          >
            {isLogin ? 'Login to AgriMall' : 'Join AgriMall'}
          </button>
        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{
            background: 'none',
            border: 'none',
            color: '#10b981',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
