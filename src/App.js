// // src/App.js
// import React, { useState, useEffect } from 'react';

// // ============================================
// // TOAST COMPONENT
// // ============================================
// const Toast = ({ message, type, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(onClose, 3000);
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div style={{
//       position: 'fixed',
//       top: '2rem',
//       right: '2rem',
//       background: type === 'error' ? '#ef4444' : '#10b981',
//       color: 'white',
//       padding: '1rem 1.5rem',
//       borderRadius: '12px',
//       boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
//       zIndex: 9999,
//       animation: 'slideIn 0.3s ease-out',
//       maxWidth: '400px'
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//         <span style={{ fontSize: '1.25rem' }}>{type === 'error' ? '⚠️' : '✓'}</span>
//         <span>{message}</span>
//       </div>
//       <style>{`
//         @keyframes slideIn {
//           from { transform: translateX(100%); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// };

// // ============================================
// // MODAL COMPONENT
// // ============================================
// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0, left: 0, right: 0, bottom: 0,
//         background: 'rgba(0, 0, 0, 0.7)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 9998,
//         padding: '2rem',
//         animation: 'fadeIn 0.3s ease-out'
//       }}
//       onClick={onClose}
//     >
//       <div
//         style={{
//           background: '#1e293b',
//           borderRadius: '20px',
//           maxWidth: '600px',
//           width: '100%',
//           maxHeight: '90vh',
//           overflow: 'auto',
//           position: 'relative',
//           animation: 'scaleIn 0.3s ease-out'
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//       </div>
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scaleIn {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// };

// // ============================================
// // LANDING PAGE
// // ============================================
// const LandingPage = ({ onNavigate }) => {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
//       color: '#f1f5f9',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
//     }}>
//       {/* Navigation */}
//       <nav style={{
//         background: 'rgba(30, 41, 59, 0.8)',
//         backdropFilter: 'blur(10px)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1000,
//         borderBottom: '1px solid rgba(99, 102, 241, 0.1)'
//       }}>
//         <div style={{
//           maxWidth: '1440px',
//           margin: '0 auto',
//           padding: '1.5rem 2rem',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center'
//         }}>
//           <div style={{
//             fontSize: '1.75rem',
//             fontWeight: 700,
//             background: 'linear-gradient(135deg, #6366f1, #ec4899)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}>
//             TicketFlow
//           </div>
//           <button
//             onClick={() => onNavigate('login')}
//             style={{
//               padding: '0.75rem 2rem',
//               background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '12px',
//               fontSize: '1rem',
//               fontWeight: 600,
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = 'translateY(-2px)';
//               e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = 'translateY(0)';
//               e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
//             }}
//           >
//             Login
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section style={{
//         position: 'relative',
//         overflow: 'hidden',
//         background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
//       }}>
//         {/* Decorative Circles */}
//         <div style={{
//           position: 'absolute',
//           top: '-100px',
//           right: '-100px',
//           width: '400px',
//           height: '400px',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent)',
//           filter: 'blur(40px)',
//           zIndex: 0
//         }} />
//         <div style={{
//           position: 'absolute',
//           bottom: '10%',
//           left: '-50px',
//           width: '300px',
//           height: '300px',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent)',
//           filter: 'blur(40px)',
//           zIndex: 0
//         }} />

//         <div style={{
//           maxWidth: '1440px',
//           margin: '0 auto',
//           padding: '8rem 2rem 12rem',
//           position: 'relative',
//           zIndex: 1
//         }}>
//           <div style={{
//             textAlign: 'center',
//             maxWidth: '800px',
//             margin: '0 auto'
//           }}>
//             <h1 style={{
//               fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
//               fontWeight: 800,
//               marginBottom: '1.5rem',
//               lineHeight: 1.1,
//               background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}>
//               Manage Tickets Like a Pro
//             </h1>

//             <p style={{
//               fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
//               color: '#94a3b8',
//               marginBottom: '3rem',
//               lineHeight: 1.6
//             }}>
//               Streamline your workflow with our powerful ticket management system.
//               Track, organize, and resolve issues faster than ever before.
//             </p>

//             <div style={{
//               display: 'flex',
//               gap: '1rem',
//               justifyContent: 'center',
//               flexWrap: 'wrap'
//             }}>
//               <button
//                 onClick={() => onNavigate('signup')}
//                 style={{
//                   padding: '1rem 2.5rem',
//                   background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '12px',
//                   fontSize: '1.125rem',
//                   fontWeight: 600,
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                   boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)'
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                   e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.5)';
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.4)';
//                 }}
//               >
//                 Get Started Free
//               </button>

//               <button
//                 onClick={() => onNavigate('login')}
//                 style={{
//                   padding: '1rem 2.5rem',
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   color: '#f1f5f9',
//                   border: '2px solid rgba(99, 102, 241, 0.3)',
//                   borderRadius: '12px',
//                   fontSize: '1.125rem',
//                   fontWeight: 600,
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                   backdropFilter: 'blur(10px)'
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.6)';
//                   e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
//                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
//                 }}
//               >
//                 Sign In
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Wave SVG */}
//         <svg
//           viewBox="0 0 1440 120"
//           style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 'auto' }}
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
//             fill="#0f172a"
//           />
//         </svg>
//       </section>

//       {/* Features Section */}
//       <section style={{ background: '#0f172a', padding: '6rem 2rem' }}>
//         <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
//           <h2 style={{
//             fontSize: 'clamp(2rem, 4vw, 3rem)',
//             fontWeight: 700,
//             textAlign: 'center',
//             marginBottom: '4rem',
//             background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}>
//             Everything You Need
//           </h2>

//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: '2rem'
//           }}>
//             {[
//               { icon: '🎯', title: 'Smart Organization', description: 'Organize tickets by status, priority, and category with intelligent tagging' },
//               { icon: '⚡', title: 'Lightning Fast', description: 'Built for speed. Create, update, and manage tickets in milliseconds' },
//               { icon: '🔒', title: 'Secure & Private', description: 'Your data is protected with enterprise-grade security standards' }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 style={{
//                   background: 'rgba(30, 41, 59, 0.5)',
//                   border: '1px solid rgba(99, 102, 241, 0.1)',
//                   borderRadius: '20px',
//                   padding: '2.5rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-8px)';
//                   e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
//                   e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.2)';
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.1)';
//                   e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
//                 }}
//               >
//                 <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
//                 <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f1f5f9' }}>
//                   {feature.title}
//                 </h3>
//                 <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section style={{
//         background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
//         padding: '6rem 2rem',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         <div style={{
//           position: 'absolute',
//           top: '50%',
//           right: '-150px',
//           transform: 'translateY(-50%)',
//           width: '500px',
//           height: '500px',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent)',
//           filter: 'blur(60px)',
//           zIndex: 0
//         }} />

//         <div style={{
//           maxWidth: '1440px',
//           margin: '0 auto',
//           textAlign: 'center',
//           position: 'relative',
//           zIndex: 1
//         }}>
//           <h2 style={{
//             fontSize: 'clamp(2rem, 4vw, 3rem)',
//             fontWeight: 700,
//             marginBottom: '1.5rem',
//             background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}>
//             Ready to Transform Your Workflow?
//           </h2>
//           <p style={{
//             fontSize: '1.25rem',
//             color: '#94a3b8',
//             marginBottom: '2.5rem',
//             maxWidth: '600px',
//             margin: '0 auto 2.5rem'
//           }}>
//             Join thousands of teams already managing their tickets efficiently
//           </p>
//           <button
//             onClick={() => onNavigate('signup')}
//             style={{
//               padding: '1.25rem 3rem',
//               background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '12px',
//               fontSize: '1.25rem',
//               fontWeight: 600,
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)'
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = 'translateY(-2px)';
//               e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.5)';
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = 'translateY(0)';
//               e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.4)';
//             }}
//           >
//             Start Free Today
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={{
//         background: '#0f172a',
//         borderTop: '1px solid rgba(99, 102, 241, 0.1)',
//         padding: '3rem 2rem'
//       }}>
//         <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
//           <div style={{
//             fontSize: '1.5rem',
//             fontWeight: 700,
//             marginBottom: '1rem',
//             background: 'linear-gradient(135deg, #6366f1, #ec4899)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}>
//             TicketFlow
//           </div>
//           <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
//             Built with passion for Frontend Wizards Stage 2
//           </p>
//           <div style={{
//             display: 'flex',
//             justifyContent: 'center',
//             gap: '2rem',
//             flexWrap: 'wrap',
//             color: '#94a3b8',
//             fontSize: '0.875rem'
//           }}>
//             <span>© 2025 TicketFlow</span>
//             <span>•</span>
//             <span>All Rights Reserved</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// // ============================================
// // AUTH PAGE (Login/Signup)
// // ============================================
// const AuthPage = ({ isLogin, onNavigate, onAuth }) => {
//   const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
//   const [errors, setErrors] = useState({});
//   const [toast, setToast] = useState(null);

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (!isLogin) {
//       if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
//       else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       setToast({ message: 'Please fix the errors in the form', type: 'error' });
//       return;
//     }

//     if (isLogin) {
//       const storedUser = localStorage.getItem('ticketapp_user');
//       if (storedUser) {
//         const user = JSON.parse(storedUser);
//         if (user.email === formData.email && user.password === formData.password) {
//           localStorage.setItem('ticketapp_session', JSON.stringify({
//             token: 'mock-jwt-token-' + Date.now(),
//             user: { email: user.email },
//             timestamp: Date.now()
//           }));
//           setToast({ message: 'Login successful! Redirecting...', type: 'success' });
//           setTimeout(() => onAuth(), 1500);
//           return;
//         }
//       }
//       setToast({ message: 'Invalid credentials. Please try again.', type: 'error' });
//     } else {
//       localStorage.setItem('ticketapp_user', JSON.stringify({
//         email: formData.email,
//         password: formData.password
//       }));
//       localStorage.setItem('ticketapp_session', JSON.stringify({
//         token: 'mock-jwt-token-' + Date.now(),
//         user: { email: formData.email },
//         timestamp: Date.now()
//       }));
//       setToast({ message: 'Account created successfully! Redirecting...', type: 'success' });
//       setTimeout(() => onAuth(), 1500);
//     }
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '0.875rem 1rem',
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '2px solid rgba(99, 102, 241, 0.2)',
//     borderRadius: '10px',
//     color: '#f1f5f9',
//     fontSize: '1rem',
//     transition: 'all 0.3s ease',
//     outline: 'none'
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
//       color: '#f1f5f9',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '2rem',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       <div style={{
//         position: 'absolute',
//         top: '-100px',
//         left: '-100px',
//         width: '400px',
//         height: '400px',
//         borderRadius: '50%',
//         background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent)',
//         filter: 'blur(60px)'
//       }} />
//       <div style={{
//         position: 'absolute',
//         bottom: '-100px',
//         right: '-100px',
//         width: '400px',
//         height: '400px',
//         borderRadius: '50%',
//         background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent)',
//         filter: 'blur(60px)'
//       }} />

//       {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

//       <div style={{ width: '100%', maxWidth: '480px', position: 'relative', zIndex: 1 }}>
//         <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
//           <button
//             onClick={() => onNavigate('home')}
//             style={{
//               background: 'none',
//               border: 'none',
//               color: '#94a3b8',
//               fontSize: '0.875rem',
//               cursor: 'pointer',
//               transition: 'color 0.3s ease'
//             }}
//             onMouseOver={(e) => e.currentTarget.style.color = '#6366f1'}
//             onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
//           >
//             ← Back to Home
//           </button>
//         </div>

//         <div style={{
//           background: 'rgba(30, 41, 59, 0.8)',
//           backdropFilter: 'blur(20px)',
//           borderRadius: '24px',
//           padding: '3rem',
//           border: '1px solid rgba(99, 102, 241, 0.2)',
//           boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
//         }}>
//           <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
//             <div style={{
//               fontSize: '2rem',
//               fontWeight: 700,
//               marginBottom: '0.5rem',
//               background: 'linear-gradient(135deg, #6366f1, #ec4899)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}>
//               TicketFlow
//             </div>
//             <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.5rem' }}>
//               {isLogin ? 'Welcome Back' : 'Create Account'}
//             </h2>
//             <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
//               {isLogin ? 'Sign in to manage your tickets' : 'Sign up to get started'}
//             </p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 500, fontSize: '0.875rem' }}>
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="you@example.com"
//                 style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : 'rgba(99, 102, 241, 0.2)' }}
//               />
//               {errors.email && (
//                 <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//                   <span>⚠</span> {errors.email}
//                 </div>
//               )}
//             </div>

//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 500, fontSize: '0.875rem' }}>
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 placeholder="••••••••"
//                 style={{ ...inputStyle, borderColor: errors.password ? '#ef4444' : 'rgba(99, 102, 241, 0.2)' }}
//               />
//               {errors.password && (
//                 <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//                   <span>⚠</span> {errors.password}
//                 </div>
//               )}
//             </div>

//             {!isLogin && (
//               <div style={{ marginBottom: '1.5rem' }}>
//                 <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 500, fontSize: '0.875rem' }}>
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   placeholder="••••••••"
//                   style={{ ...inputStyle, borderColor: errors.confirmPassword ? '#ef4444' : 'rgba(99, 102, 241, 0.2)' }}
//                 />
//                 {errors.confirmPassword && (
//                   <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//                     <span>⚠</span> {errors.confirmPassword}
//                   </div>
//                 )}
//               </div>
//             )}

//             <button
//               type="submit"
//               style={{
//                 width: '100%',
//                 padding: '1rem',
//                 background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '12px',
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
//                 marginTop: '0.5rem'
//               }}
//             >
//               {isLogin ? 'Sign In' : 'Create Account'}
//             </button>
//           </form>

//           <div style={{
//             textAlign: 'center',
//             marginTop: '2rem',
//             paddingTop: '2rem',
//             borderTop: '1px solid rgba(99, 102, 241, 0.1)'
//           }}>
//             <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
//               {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
//               <button
//                 onClick={() => onNavigate(isLogin ? 'signup' : 'login')}
//                 style={{
//                   background: 'none',
//                   border: 'none',
//                   color: '#6366f1',
//                   fontWeight: 600,
//                   cursor: 'pointer',
//                   fontSize: '0.875rem',
//                   textDecoration: 'underline'
//                 }}
//               >
//                 {isLogin ? 'Sign up' : 'Sign in'}
//               </button>
//             </p>
//           </div>

//           {isLogin && (
//             <div style={{
//               marginTop: '1.5rem',
//               padding: '1rem',
//               background: 'rgba(99, 102, 241, 0.1)',
//               borderRadius: '10px',
//               border: '1px solid rgba(99, 102, 241, 0.2)'
//             }}>
//               <p style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.5rem', fontWeight: 600 }}>
//                 Demo Credentials:
//               </p>
//               <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.25rem 0' }}>
//                 Email: demo@ticketflow.com
//               </p>
//               <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.25rem 0' }}>
//                 Password: demo123
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ============================================
// // DASHBOARD
// // ============================================
// const Dashboard = ({ onNavigate, onLogout }) => {
//   const [user, setUser] = useState(null);
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     const session = localStorage.getItem('ticketapp_session');
//     if (!session) {
//       onNavigate('login');
//       return;
//     }
//     const sessionData = JSON.parse(session);
//     setUser(sessionData.user);

//     const storedTickets = localStorage.getItem('ticketapp_tickets');
//     if (storedTickets) setTickets(JSON.parse(storedTickets));
//   }, [onNavigate]);

//   const totalTickets = tickets.length;
//   const openTickets = tickets.filter(t => t.status === 'open').length;
//   const resolvedTickets = tickets.filter(t => t.status === 'closed').length;
//   const inProgressTickets = tickets.filter(t => t.status === 'in_progress').length;

//   if (!user) return null;

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
//       color: '#f1f5f9',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
//     }}>
//       <nav style={{
//         background: 'rgba(30, 41, 59, 0.8)',
//         backdropFilter: 'blur(10px)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1000,
//         borderBottom: '1px solid rgba(99, 102, 241, 0.1)'
//       }}>
//         <div style={{
//           maxWidth: '1440px',
//           margin: '0 auto',
//           padding: '1.5rem 2rem',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '1rem'
//         }}>
//           <div style={{
//             fontSize: '1.75rem',
//             fontWeight: 700,
//             background: 'linear-gradient(135deg, #6366f1, #ec4899)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}>
//             TicketFlow
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
//             <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{user.email}</span>
//             <button
//               onClick={onLogout}
//               style={{
//                 padding: '0.625rem 1.5rem',
//                 background: 'rgba(239, 68, 68, 0.1)',
//                 color: '#ef4444',
//                 border: '1px solid rgba(239, 68, 68, 0.3)',
//                 borderRadius: '8px',
//                 fontSize: '0.875rem',
//                 fontWeight: 600,
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease'
//               }}
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '3rem 2rem' }}>
//         <div style={{ marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
//           <div style={{
//             position: 'absolute',
//             top: '-50px',
//             right: '-50px',
//             width: '200px',
//             height: '200px',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent)',
//             filter: 'blur(40px)',
//             zIndex: 0
//           }} />
//           <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>
//             Welcome back! 👋
//           </h1>
//           <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>
//             Here's what's happening with your tickets today
//           </p>
//         </div>

//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//           gap: '1.5rem',
//           marginBottom: '3rem'
//         }}>
//           {[
//             { icon: '📊', value: totalTickets, label: 'Total Tickets', color: '#6366f1' },
//             { icon: '🟢', value: openTickets, label: 'Open Tickets', color: '#10b981' },
//             { icon: '🟡', value: inProgressTickets, label: 'In Progress', color: '#f59e0b' },
//             { icon: '✓', value: resolvedTickets, label: 'Resolved', color: '#94a3b8' }
//           ].map((stat, index) => (
//             <div key={index} style={{
//               background: 'rgba(30, 41, 59, 0.6)',
//               border: `1px solid ${stat.color}33`,
//               borderRadius: '20px',
//               padding: '2rem',
//               position: 'relative',
//               overflow: 'hidden',
//               transition: 'all 0.3s ease',
//               cursor: 'pointer',
//               boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
//             }}>
//               <div style={{
//                 position: 'absolute',
//                 top: '-20px',
//                 right: '-20px',
//                 width: '100px',
//                 height: '100px',
//                 borderRadius: '50%',
//                 background: `radial-gradient(circle, ${stat.color}33, transparent)`,
//                 filter: 'blur(20px)'
//               }} />
//               <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
//               <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.25rem', color: stat.color }}>
//                 {stat.value}
//               </div>
//               <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <div style={{
//           background: 'rgba(30, 41, 59, 0.6)',
//           border: '1px solid rgba(99, 102, 241, 0.2)',
//           borderRadius: '20px',
//           padding: '2.5rem',
//           boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
//         }}>
//           <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Actions</h2>
//           <button
//             onClick={() => onNavigate('tickets')}
//             style={{
//               padding: '1rem 2rem',
//               background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '12px',
//               fontSize: '1rem',
//               fontWeight: 600,
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '0.5rem'
//             }}
//           >
//             <span>🎫</span> Manage Tickets
//           </button>
//         </div>
//       </div>

//       <footer style={{
//         background: 'rgba(15, 23, 42, 0.8)',
//         borderTop: '1px solid rgba(99, 102, 241, 0.1)',
//         padding: '2rem',
//         marginTop: '4rem'
//       }}>
//         <div style={{
//           maxWidth: '1440px',
//           margin: '0 auto',
//           textAlign: 'center',
//           color: '#64748b',
//           fontSize: '0.875rem'
//         }}>
//           © 2025 TicketFlow • Built for Frontend Wizards Stage 2
//         </div>
//       </footer>
//     </div>
//   );
// };

// // ============================================
// // TICKET MANAGEMENT (CRUD)
// // ============================================
// const TicketManagement = ({ onNavigate, onLogout }) => {
//   const [user, setUser] = useState(null);
//   const [tickets, setTickets] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingTicket, setEditingTicket] = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [formData, setFormData] = useState({ title: '', description: '', status: 'open', priority: 'medium' });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const session = localStorage.getItem('ticketapp_session');
//     if (!session) {
//       setToast({ message: 'Your session has expired — please log in again.', type: 'error' });
//       setTimeout(() => onNavigate('login'), 2000);
//       return;
//     }
//     const sessionData = JSON.parse(session);
//     setUser(sessionData.user);
//     loadTickets();
//   }, [onNavigate]);

//   const loadTickets = () => {
//     const storedTickets = localStorage.getItem('ticketapp_tickets');
//     if (storedTickets) setTickets(JSON.parse(storedTickets));
//   };

//   const saveTickets = (ticketsData) => {
//     localStorage.setItem('ticketapp_tickets', JSON.stringify(ticketsData));
//     setTickets(ticketsData);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.title || formData.title.trim() === '') newErrors.title = 'Title is required';
//     else if (formData.title.length > 100) newErrors.title = 'Title must be less than 100 characters';
//     if (!formData.status) newErrors.status = 'Status is required';
//     else if (!['open', 'in_progress', 'closed'].includes(formData.status)) newErrors.status = 'Status must be: open, in_progress, or closed';
//     if (formData.description && formData.description.length > 500) newErrors.description = 'Description must be less than 500 characters';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
//   };

//   const handleCreate = () => {
//     setFormData({ title: '', description: '', status: 'open', priority: 'medium' });
//     setEditingTicket(null);
//     setErrors({});
//     setIsModalOpen(true);
//   };

//   const handleEdit = (ticket) => {
//     setFormData({
//       title: ticket.title,
//       description: ticket.description || '',
//       status: ticket.status,
//       priority: ticket.priority || 'medium'
//     });
//     setEditingTicket(ticket);
//     setErrors({});
//     setIsModalOpen(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       setToast({ message: 'Please fix the errors in the form', type: 'error' });
//       return;
//     }

//     if (editingTicket) {
//       const updatedTickets = tickets.map(t =>
//         t.id === editingTicket.id ? { ...t, ...formData, updatedAt: new Date().toISOString() } : t
//       );
//       saveTickets(updatedTickets);
//       setToast({ message: 'Ticket updated successfully!', type: 'success' });
//     } else {
//       const newTicket = {
//         id: Date.now().toString(),
//         ...formData,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       };
//       saveTickets([...tickets, newTicket]);
//       setToast({ message: 'Ticket created successfully!', type: 'success' });
//     }

//     setIsModalOpen(false);
//     setFormData({ title: '', description: '', status: 'open', priority: 'medium' });
//     setEditingTicket(null);
//   };

//   const handleDelete = (ticket) => setDeleteConfirm(ticket);

//   const confirmDelete = () => {
//     if (deleteConfirm) {
//       const updatedTickets = tickets.filter(t => t.id !== deleteConfirm.id);
//       saveTickets(updatedTickets);
//       setToast({ message: 'Ticket deleted successfully!', type: 'success' });
//       setDeleteConfirm(null);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'open': return { bg: 'rgba(16, 185, 129, 0.1)', border: '#10b981', text: '#10b981' };
//       case 'in_progress': return { bg: 'rgba(245, 158, 11, 0.1)', border: '#f59e0b', text: '#f59e0b' };
//       case 'closed': return { bg: 'rgba(148, 163, 184, 0.1)', border: '#94a3b8', text: '#94a3b8' };
//       default: return { bg: 'rgba(99, 102, 241, 0.1)', border: '#6366f1', text: '#6366f1' };
//     }
//   };

//   const getStatusLabel = (status) => {
//     switch (status) {
//       case 'open': return 'Open';
//       case 'in_progress': return 'In Progress';
//       case 'closed': return 'Closed';
//       default: return status;
//     }
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '0.75rem',
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '2px solid rgba(99, 102, 241, 0.2)',
//     borderRadius: '10px',
//     color: '#f1f5f9',
//     fontSize: '1rem',
//     fontFamily: 'inherit',
//     transition: 'all 0.3s ease',
//     outline: 'none'
//   };

//   if (!user) return null;

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
//       color: '#f1f5f9',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
//     }}>
//       {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

//       <nav style={{
//         background: 'rgba(30, 41, 59, 0.8)',
//         backdropFilter: 'blur(10px)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1000,
//         borderBottom: '1px solid rgba(99, 102, 241, 0.1)'
//       }}>
//         <div style={{
//           maxWidth: '1440px',
//           margin: '0 auto',
//           padding: '1.5rem 2rem',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '1rem'
//         }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
//             <div
//               style={{
//                 fontSize: '1.75rem',
//                 fontWeight: 700,
//                 background: 'linear-gradient(135deg, #6366f1, #ec4899)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 cursor: 'pointer'
//               }}
//               onClick={() => onNavigate('dashboard')}
//             >
//               TicketFlow
//             </div>
//             <button
//               onClick={() => onNavigate('dashboard')}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#94a3b8',
//                 fontSize: '0.875rem',
//                 cursor: 'pointer',
//                 transition: 'color 0.3s ease'
//               }}
//               onMouseOver={(e) => e.currentTarget.style.color = '#6366f1'}
//               onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
//             >
//               ← Dashboard
//             </button>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
//             <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{user.email}</span>
//             <button
//               onClick={onLogout}
//               style={{
//                 padding: '0.625rem 1.5rem',
//                 background: 'rgba(239, 68, 68, 0.1)',
//                 color: '#ef4444',
//                 border: '1px solid rgba(239, 68, 68, 0.3)',
//                 borderRadius: '8px',
//                 fontSize: '0.875rem',
//                 fontWeight: 600,
//                 cursor: 'pointer'
//               }}
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '3rem 2rem' }}>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '2rem',
//           flexWrap: 'wrap',
//           gap: '1rem'
//         }}>
//           <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700 }}>
//             Ticket Management
//           </h1>
//           <button
//             onClick={handleCreate}
//             style={{
//               padding: '1rem 2rem',
//               background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '12px',
//               fontSize: '1rem',
//               fontWeight: 600,
//               cursor: 'pointer',
//               boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '0.5rem'
//             }}
//           >
//             <span style={{ fontSize: '1.25rem' }}>+</span>
//             Create Ticket
//           </button>
//         </div>

//         {tickets.length === 0 ? (
//           <div style={{
//             background: 'rgba(30, 41, 59, 0.6)',
//             border: '2px dashed rgba(99, 102, 241, 0.3)',
//             borderRadius: '20px',
//             padding: '4rem 2rem',
//             textAlign: 'center'
//           }}>
//             <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎫</div>
//             <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No tickets yet</h3>
//             <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
//               Create your first ticket to get started
//             </p>
//             <button
//               onClick={handleCreate}
//               style={{
//                 padding: '1rem 2rem',
//                 background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '12px',
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 cursor: 'pointer',
//                 boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
//               }}
//             >
//               Create First Ticket
//             </button>
//           </div>
//         ) : (
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
//             gap: '1.5rem'
//           }}>
//             {tickets.map((ticket) => {
//               const statusStyle = getStatusColor(ticket.status);
//               return (
//                 <div
//                   key={ticket.id}
//                   style={{
//                     background: 'rgba(30, 41, 59, 0.6)',
//                     border: '1px solid rgba(99, 102, 241, 0.2)',
//                     borderRadius: '20px',
//                     padding: '1.5rem',
//                     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
//                     position: 'relative',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   <div style={{
//                     display: 'inline-block',
//                     padding: '0.375rem 0.75rem',
//                     background: statusStyle.bg,
//                     border: `1px solid ${statusStyle.border}`,
//                     color: statusStyle.text,
//                     borderRadius: '8px',
//                     fontSize: '0.75rem',
//                     fontWeight: 600,
//                     marginBottom: '1rem',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.5px'
//                   }}>
//                     {getStatusLabel(ticket.status)}
//                   </div>

//                   <h3 style={{
//                     fontSize: '1.25rem',
//                     fontWeight: 600,
//                     marginBottom: '0.75rem',
//                     color: '#f1f5f9',
//                     lineHeight: 1.3
//                   }}>
//                     {ticket.title}
//                   </h3>

//                   {ticket.description && (
//                     <p style={{
//                       color: '#94a3b8',
//                       fontSize: '0.875rem',
//                       marginBottom: '1rem',
//                       lineHeight: 1.6
//                     }}>
//                       {ticket.description.length > 120
//                         ? ticket.description.substring(0, 120) + '...'
//                         : ticket.description}
//                     </p>
//                   )}

//                   {ticket.priority && (
//                     <div style={{
//                       display: 'inline-flex',
//                       alignItems: 'center',
//                       gap: '0.5rem',
//                       fontSize: '0.75rem',
//                       color: '#cbd5e1',
//                       marginBottom: '1rem'
//                     }}>
//                       <span>Priority:</span>
//                       <span style={{
//                         padding: '0.25rem 0.5rem',
//                         background: 'rgba(255, 255, 255, 0.05)',
//                         borderRadius: '4px',
//                         textTransform: 'capitalize'
//                       }}>
//                         {ticket.priority}
//                       </span>
//                     </div>
//                   )}

//                   <div style={{
//                     display: 'flex',
//                     gap: '0.75rem',
//                     marginTop: '1rem',
//                     paddingTop: '1rem',
//                     borderTop: '1px solid rgba(99, 102, 241, 0.1)'
//                   }}>
//                     <button
//                       onClick={() => handleEdit(ticket)}
//                       style={{
//                         flex: 1,
//                         padding: '0.625rem',
//                         background: 'rgba(99, 102, 241, 0.1)',
//                         color: '#6366f1',
//                         border: '1px solid rgba(99, 102, 241, 0.3)',
//                         borderRadius: '8px',
//                         fontSize: '0.875rem',
//                         fontWeight: 600,
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(ticket)}
//                       style={{
//                         flex: 1,
//                         padding: '0.625rem',
//                         background: 'rgba(239, 68, 68, 0.1)',
//                         color: '#ef4444',
//                         border: '1px solid rgba(239, 68, 68, 0.3)',
//                         borderRadius: '8px',
//                         fontSize: '0.875rem',
//                         fontWeight: 600,
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* Create/Edit Modal */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <div style={{ padding: '2rem' }}>
//           <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>
//             {editingTicket ? 'Edit Ticket' : 'Create New Ticket'}
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem' }}>
//                 Title *
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder="Enter ticket title"
//                 style={{ ...inputStyle, borderColor: errors.title ? '#ef4444' : 'rgba(99, 102, 241, 0.2)' }}
//               />
//               {errors.title && (
//                 <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//                   <span>⚠</span> {errors.title}
//                 </div>
//               )}
//             </div>

//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem' }}>
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="Enter ticket description (optional)"
//                 rows={4}
//                 style={{ ...inputStyle, resize: 'vertical', minHeight: '100px', borderColor: errors.description ? '#ef4444' : 'rgba(99, 102, 241, 0.2)' }}
//               />
//               {errors.description && (
//                 <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//                   <span>⚠</span> {errors.description}
//                 </div>
//               )}
//             </div>

//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="status" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem' }}>
//                 Status *
//               </label>
//               <select
//                 id="status"
//                 name="status"
//                 value={formData.status}
//                 onChange={handleInputChange}
//                 style={{ ...inputStyle, cursor: 'pointer', borderColor: errors.status ? '#ef4444' : 'rgba(99, 102, 241, 0.2)' }}
//               >
//                 <option value="open">Open</option>
//                 <option value="in_progress">In Progress</option>
//                 <option value="closed">Closed</option>
//               </select>
//               {errors.status && (
//                 <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//                   <span>⚠</span> {errors.status}
//                 </div>
//               )}
//             </div>

//             <div style={{ marginBottom: '2rem' }}>
//               <label htmlFor="priority" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem' }}>
//                 Priority
//               </label>
//               <select
//                 id="priority"
//                 name="priority"
//                 value={formData.priority}
//                 onChange={handleInputChange}
//                 style={{ ...inputStyle, cursor: 'pointer' }}
//               >
//                 <option value="low">Low</option>
//                 <option value="medium">Medium</option>
//                 <option value="high">High</option>
//               </select>
//             </div>

//             <div style={{ display: 'flex', gap: '1rem' }}>
//               <button
//                 type="button"
//                 onClick={() => setIsModalOpen(false)}
//                 style={{
//                   flex: 1,
//                   padding: '0.875rem',
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   color: '#cbd5e1',
//                   border: '1px solid rgba(99, 102, 241, 0.2)',
//                   borderRadius: '10px',
//                   fontSize: '1rem',
//                   fontWeight: 600,
//                   cursor: 'pointer'
//                 }}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 style={{
//                   flex: 1,
//                   padding: '0.875rem',
//                   background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '10px',
//                   fontSize: '1rem',
//                   fontWeight: 600,
//                   cursor: 'pointer',
//                   boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
//                 }}
//               >
//                 {editingTicket ? 'Update Ticket' : 'Create Ticket'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>

//       {/* Delete Confirmation Modal */}
//       <Modal isOpen={deleteConfirm !== null} onClose={() => setDeleteConfirm(null)}>
//         <div style={{ padding: '2rem', textAlign: 'center' }}>
//           <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
//           <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
//             Delete Ticket?
//           </h2>
//           <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
//             Are you sure you want to delete "{deleteConfirm?.title}"? This action cannot be undone.
//           </p>
//           <div style={{ display: 'flex', gap: '1rem' }}>
//             <button
//               onClick={() => setDeleteConfirm(null)}
//               style={{
//                 flex: 1,
//                 padding: '0.875rem',
//                 background: 'rgba(255, 255, 255, 0.05)',
//                 color: '#cbd5e1',
//                 border: '1px solid rgba(99, 102, 241, 0.2)',
//                 borderRadius: '10px',
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 cursor: 'pointer'
//               }}
//             >
//               Cancel
//             </button>
//             <button
//               onClick={confirmDelete}
//               style={{
//                 flex: 1,
//                 padding: '0.875rem',
//                 background: '#ef4444',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '10px',
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 cursor: 'pointer',
//                 boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </Modal>

//       <footer style={{
//         background: 'rgba(15, 23, 42, 0.8)',
//         borderTop: '1px solid rgba(99, 102, 241, 0.1)',
//         padding: '2rem',
//         marginTop: '4rem'
//       }}>
//         <div style={{
//           maxWidth: '1440px',
//           margin: '0 auto',
//           textAlign: 'center',
//           color: '#64748b',
//           fontSize: '0.875rem'
//         }}>
//           © 2025 TicketFlow • Built for Frontend Wizards Stage 2
//         </div>
//       </footer>
//     </div>
//   );
// };

// // ============================================
// // MAIN APP ROUTER
// // ============================================
// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   useEffect(() => {
//     const session = localStorage.getItem('ticketapp_session');
//     if (session && currentPage === 'home') {
//       setCurrentPage('dashboard');
//     }
//   }, [currentPage]);

//   const handleNavigate = (page) => setCurrentPage(page);
//   const handleAuth = () => setCurrentPage('dashboard');
//   const handleLogout = () => {
//     localStorage.removeItem('ticketapp_session');
//     setCurrentPage('home');
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <LandingPage onNavigate={handleNavigate} />;
//       case 'login':
//         return <AuthPage isLogin={true} onNavigate={handleNavigate} onAuth={handleAuth} />;
//       case 'signup':
//         return <AuthPage isLogin={false} onNavigate={handleNavigate} onAuth={handleAuth} />;
//       case 'dashboard':
//         return <Dashboard onNavigate={handleNavigate} onLogout={handleLogout} />;
//       case 'tickets':
//         return <TicketManagement onNavigate={handleNavigate} onLogout={handleLogout} />;
//       default:
//         return <LandingPage onNavigate={handleNavigate} />;
//     }
//   };

//   return <div>{renderPage()}</div>;
// }

// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { getTickets, saveTickets as persistTickets } from './services/ticketService';
import './theme.css';

/* =========================================================
   TOAST
   ========================================================= */
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        background: type === 'error' ? 'var(--danger)' : 'var(--success)',
        color: 'var(--text-primary)',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 24px var(--shadow)',
        zIndex: 9999,
        animation: 'slideIn 0.3s ease-out',
        maxWidth: '400px',
        border: '1px solid var(--border)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.25rem' }}>{type === 'error' ? '⚠️' : '✓'}</span>
        <span>{message}</span>
      </div>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

/* =========================================================
   MODAL
   ========================================================= */
const Modal = ({ isOpen, onClose, children, labelledById = 'modal-title' }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9998,
        padding: '2rem',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledById}
        style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          border: '1px solid var(--border)',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          animation: 'scaleIn 0.3s ease-out',
          boxShadow: '0 24px 64px var(--shadow)',
          color: 'var(--text-primary)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

/* =========================================================
   LANDING PAGE
   ========================================================= */
const LandingPage = ({ onNavigate }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-card) 100%)',
      color: 'var(--text-primary)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      {/* Navigation */}
      <nav style={{
        background: 'color-mix(in srgb, var(--bg-card) 80%, transparent)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            TicketFlow
          </div>
          <button
            onClick={() => onNavigate('login')}
            style={{
              padding: '0.75rem 2rem',
              background: 'var(--primary-grad)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px var(--shadow)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px var(--shadow)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px var(--shadow)';
            }}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%)'
      }}>
        {/* Decorative Circles */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, color-mix(in srgb, var(--secondary) 20%, transparent), transparent)',
          filter: 'blur(40px)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-50px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 20%, transparent), transparent)',
          filter: 'blur(40px)',
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '8rem 2rem 12rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              color: 'var(--text-primary)'
            }}>
              Manage Tickets Like a Pro
            </h1>

            <p style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              lineHeight: 1.6
            }}>
              Streamline your workflow with our powerful ticket management system.
              Track, organize, and resolve issues faster than ever before.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => onNavigate('signup')}
                style={{
                  padding: '1rem 2.5rem',
                  background: 'var(--primary-grad)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 24px var(--shadow)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px var(--shadow)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px var(--shadow)';
                }}
              >
                Get Started Free
              </button>

              <button
                onClick={() => onNavigate('login')}
                style={{
                  padding: '1rem 2.5rem',
                  background: 'var(--glass)',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--border)',
                  borderRadius: '12px',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--border) 50%, var(--secondary))';
                  e.currentTarget.style.background = 'var(--glass-strong)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--glass)';
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Wave SVG via shared asset */}
        <img
          src="/assets/wave-hero.svg"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 'auto' }}
        />
      </section>

      {/* Features Section */}
      <section style={{ background: 'var(--bg-dark)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '4rem',
            color: 'var(--text-primary)'
          }}>
            Everything You Need
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🎯', title: 'Smart Organization', description: 'Organize tickets by status, priority, and category with intelligent tagging' },
              { icon: '⚡', title: 'Lightning Fast', description: 'Built for speed. Create, update, and manage tickets in milliseconds' },
              { icon: '🔒', title: 'Secure & Private', description: 'Your data is protected with enterprise-grade security standards' }
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px var(--shadow)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--border) 50%, var(--secondary))';
                  e.currentTarget.style.boxShadow = '0 12px 32px var(--shadow)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = '0 8px 24px var(--shadow)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%)',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-150px',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, color-mix(in srgb, var(--secondary) 25%, transparent), transparent)',
          filter: 'blur(60px)',
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: 'var(--text-primary)'
          }}>
            Ready to Transform Your Workflow?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
          }}>
            Join thousands of teams already managing their tickets efficiently
          </p>
          <button
            onClick={() => onNavigate('signup')}
            style={{
              padding: '1.25rem 3rem',
              background: 'var(--primary-grad)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              fontSize: '1.25rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px var(--shadow)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px var(--shadow)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px var(--shadow)';
            }}
          >
            Start Free Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--bg-dark)',
        borderTop: '1px solid var(--border)',
        padding: '3rem 2rem'
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            TicketFlow
          </div>
        </div>
      </footer>
    </div>
  );
};

/* =========================================================
   AUTH PAGE
   ========================================================= */
const AuthPage = ({ isLogin, onNavigate, onAuth }) => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!isLogin) {
      if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
      else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setToast({ message: 'Please fix the errors in the form', type: 'error' });
      return;
    }

    if (isLogin) {
      const storedUser = localStorage.getItem('ticketapp_user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === formData.email && user.password === formData.password) {
          localStorage.setItem('ticketapp_session', JSON.stringify({
            token: 'mock-jwt-token-' + Date.now(),
            user: { email: user.email },
            timestamp: Date.now()
          }));
          setToast({ message: 'Login successful! Redirecting...', type: 'success' });
          setTimeout(() => onAuth(), 1500);
          return;
        }
      }
      setToast({ message: 'Invalid credentials. Please try again.', type: 'error' });
    } else {
      localStorage.setItem('ticketapp_user', JSON.stringify({
        email: formData.email,
        password: formData.password
      }));
      localStorage.setItem('ticketapp_session', JSON.stringify({
        token: 'mock-jwt-token-' + Date.now(),
        user: { email: formData.email },
        timestamp: Date.now()
      }));
      setToast({ message: 'Account created successfully! Redirecting...', type: 'success' });
      setTimeout(() => onAuth(), 1500);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: 'var(--glass)',
    border: '2px solid var(--border)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-card) 100%)',
      color: 'var(--text-primary)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, color-mix(in srgb, var(--secondary) 18%, transparent), transparent)',
        filter: 'blur(60px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 18%, transparent), transparent)',
        filter: 'blur(60px)'
      }} />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div style={{ width: '100%', maxWidth: '480px', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <button
            onClick={() => onNavigate('home')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            ← Back to Home
          </button>
        </div>

        <div style={{
          background: 'color-mix(in srgb, var(--bg-card) 85%, transparent)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '3rem',
          border: '1px solid var(--border)',
          boxShadow: '0 20px 60px var(--shadow)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              TicketFlow
            </div>
            <h2 id="modal-title" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              {isLogin ? 'Sign in to manage your tickets' : 'Sign up to get started'}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.875rem' }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                style={{ ...inputStyle, borderColor: errors.email ? 'var(--danger)' : 'var(--border)' }}
              />
              {errors.email && (
                <div style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span>⚠</span> {errors.email}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.875rem' }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                style={{ ...inputStyle, borderColor: errors.password ? 'var(--danger)' : 'var(--border)' }}
              />
              {errors.password && (
                <div style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span>⚠</span> {errors.password}
                </div>
              )}
            </div>

            {!isLogin && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.875rem' }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  style={{ ...inputStyle, borderColor: errors.confirmPassword ? 'var(--danger)' : 'var(--border)' }}
                />
                {errors.confirmPassword && (
                  <div style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span>⚠</span> {errors.confirmPassword}
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                background: 'var(--primary-grad)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px var(--shadow)',
                marginTop: '0.5rem'
              }}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div style={{
            textAlign: 'center',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)'
          }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                onClick={() => onNavigate(isLogin ? 'signup' : 'login')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--secondary)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  textDecoration: 'underline'
                }}
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {isLogin && (
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              background: 'var(--glass)',
              borderRadius: '10px',
              border: '1px solid var(--border)'
            }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                Demo Credentials:
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.25rem 0' }}>
                Email: demo@ticketflow.com
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.25rem 0' }}>
                Password: demo123
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   DASHBOARD
   ========================================================= */
const Dashboard = ({ onNavigate, onLogout }) => {
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const session = localStorage.getItem('ticketapp_session');
    if (!session) {
      onNavigate('login');
      return;
    }
    const sessionData = JSON.parse(session);
    setUser(sessionData.user);

    const storedTickets = localStorage.getItem('ticketapp_tickets');
    if (storedTickets) setTickets(JSON.parse(storedTickets));
  }, [onNavigate]);

  const totalTickets = tickets.length;
  const openTickets = tickets.filter(t => t.status === 'open').length;
  const resolvedTickets = tickets.filter(t => t.status === 'closed').length;
  const inProgressTickets = tickets.filter(t => t.status === 'in_progress').length;

  if (!user) return null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-card) 100%)',
      color: 'var(--text-primary)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <nav style={{
        background: 'color-mix(in srgb, var(--bg-card) 80%, transparent)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            TicketFlow
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{user.email}</span>
            <button
              onClick={onLogout}
              style={{
                padding: '0.625rem 1.5rem',
                background: 'color-mix(in srgb, var(--danger) 12%, transparent)',
                color: 'var(--danger)',
                border: '1px solid color-mix(in srgb, var(--danger) 40%, var(--border))',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in srgb, var(--secondary) 18%, transparent), transparent)',
            filter: 'blur(40px)',
            zIndex: 0
          }} />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>
            Welcome back! 👋
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
            Here's what's happening with your tickets today
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {[
            { icon: '📊', value: totalTickets, label: 'Total Tickets' },
            { icon: '🟢', value: openTickets, label: 'Open Tickets' },
            { icon: '🟡', value: inProgressTickets, label: 'In Progress' },
            { icon: '✓', value: resolvedTickets, label: 'Resolved' }
          ].map((stat, index) => (
            <div key={index} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 8px 24px var(--shadow)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(255,255,255,0.08), transparent)`
              }} />
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '2.5rem',
          boxShadow: '0 8px 24px var(--shadow)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Actions</h2>
          <button
            onClick={() => onNavigate('tickets')}
            style={{
              padding: '1rem 2rem',
              background: 'var(--primary-grad)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px var(--shadow)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>🎫</span> Manage Tickets
          </button>
        </div>
      </div>

      <footer style={{
        background: 'color-mix(in srgb, var(--bg-dark) 90%, transparent)',
        borderTop: '1px solid var(--border)',
        padding: '2rem',
        marginTop: '4rem'
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.875rem'
        }}>
          © 2025 TicketFlow • Built for Frontend Wizards Stage 2
        </div>
      </footer>
    </div>
  );
};

/* =========================================================
   TICKET MANAGEMENT
   ========================================================= */

const TicketManagement = ({ onNavigate, onLogout }) => {
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', status: 'open', priority: 'medium' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const session = localStorage.getItem('ticketapp_session');
    if (!session) {
      setToast({ message: 'Your session has expired — please log in again.', type: 'error' });
      setTimeout(() => onNavigate('login'), 1200);
      return;
    }
    const sessionData = JSON.parse(session);
    setUser(sessionData.user);
    loadTickets();
  }, [onNavigate]);

  const loadTickets = async () => {
    try {
      const list = await getTickets();
      setTickets(list);
    } catch (err) {
      setToast({ message: err.message || 'Failed to load tickets. Please retry.', type: 'error' });
    }
  };

  const saveTickets = async (ticketsData) => {
    try {
      await persistTickets(ticketsData);
      setTickets(ticketsData);
    } catch (err) {
      setToast({ message: err.message || 'Failed to save tickets. Please retry.', type: 'error' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title || formData.title.trim() === '') newErrors.title = 'Title is required';
    else if (formData.title.length > 100) newErrors.title = 'Title must be less than 100 characters';
    if (!formData.status) newErrors.status = 'Status is required';
    else if (!['open', 'in_progress', 'closed'].includes(formData.status)) newErrors.status = 'Status must be: open, in_progress, or closed';
    if (formData.description && formData.description.length > 500) newErrors.description = 'Description must be less than 500 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCreate = () => {
    setFormData({ title: '', description: '', status: 'open', priority: 'medium' });
    setEditingTicket(null);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleEdit = (ticket) => {
    setFormData({
      title: ticket.title,
      description: ticket.description || '',
      status: ticket.status,
      priority: ticket.priority || 'medium'
    });
    setEditingTicket(ticket);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setToast({ message: 'Please fix the errors in the form', type: 'error' });
      return;
    }

    if (editingTicket) {
      const updatedTickets = tickets.map(t =>
        t.id === editingTicket.id ? { ...t, ...formData, updatedAt: new Date().toISOString() } : t
      );
      await saveTickets(updatedTickets);
      setToast({ message: 'Ticket updated successfully!', type: 'success' });
    } else {
      const newTicket = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      await saveTickets([...tickets, newTicket]);
      setToast({ message: 'Ticket created successfully!', type: 'success' });
    }

    setIsModalOpen(false);
    setFormData({ title: '', description: '', status: 'open', priority: 'medium' });
    setEditingTicket(null);
  };

  const handleDelete = (ticket) => setDeleteConfirm(ticket);

  const confirmDelete = async () => {
    if (deleteConfirm) {
      const updatedTickets = tickets.filter(t => t.id !== deleteConfirm.id);
      await saveTickets(updatedTickets);
      setToast({ message: 'Ticket deleted successfully!', type: 'success' });
      setDeleteConfirm(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return { bg: 'rgba(16, 185, 129, 0.12)', border: 'var(--success)', text: 'var(--success)' };
      case 'in_progress': return { bg: 'rgba(245, 158, 11, 0.12)', border: 'var(--warning)', text: 'var(--warning)' };
      case 'closed': return { bg: 'rgba(139, 148, 158, 0.12)', border: 'var(--text-muted)', text: 'var(--text-muted)' };
      default: return { bg: 'rgba(52, 211, 153, 0.12)', border: 'var(--primary)', text: 'var(--primary)' };
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'open': return 'Open';
      case 'in_progress': return 'In Progress';
      case 'closed': return 'Closed';
      default: return status;
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    background: 'var(--glass)',
    border: '2px solid var(--border)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
    backgroundColor: 'var(--bg-card)',
    borderColor: 'var(--border)',
    color: 'var(--text-primary)',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    paddingRight: '2.5rem',
    backgroundImage: `url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
        <path d='M5 7.5L10 12.5L15 7.5' stroke='%23c9d1d9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/>
      </svg>")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.75rem center',
    backgroundSize: '20px 20px',
  };

  const onSelectFocus = (e) => {
    e.currentTarget.style.borderColor = 'var(--secondary)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.25)';
  };
  const onSelectBlur = (e) => {
    e.currentTarget.style.borderColor = 'var(--border)';
    e.currentTarget.style.boxShadow = 'none';
  };

  if (!user) return null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-card) 100%)',
      color: 'var(--text-primary)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <nav style={{
        background: 'color-mix(in srgb, var(--bg-card) 80%, transparent)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                cursor: 'pointer'
              }}
              onClick={() => onNavigate('dashboard')}
            >
              TicketFlow
            </div>
            <button
              onClick={() => onNavigate('dashboard')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              ← Dashboard
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{user.email}</span>
            <button
              onClick={onLogout}
              style={{
                padding: '0.625rem 1.5rem',
                background: 'color-mix(in srgb, var(--danger) 12%, transparent)',
                color: 'var(--danger)',
                border: '1px solid color-mix(in srgb, var(--danger) 40%, var(--border))',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700 }}>
            Ticket Management
          </h1>
          <button
            onClick={handleCreate}
            style={{
              padding: '1rem 2rem',
              background: 'var(--primary-grad)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 12px var(--shadow)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>+</span>
            Create Ticket
          </button>
        </div>

        {tickets.length === 0 ? (
          <div style={{
            background: 'var(--bg-card)',
            border: '2px dashed var(--border)',
            borderRadius: '20px',
            padding: '4rem 2rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎫</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No tickets yet</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Create your first ticket to get started
            </p>
            <button
              onClick={handleCreate}
              style={{
                padding: '1rem 2rem',
                background: 'var(--primary-grad)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px var(--shadow)'
              }}
            >
              Create First Ticket
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.5rem'
          }}>
            {tickets.map((ticket) => {
              const statusStyle = getStatusColor(ticket.status);
              return (
                <div
                  key={ticket.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    boxShadow: '0 8px 24px var(--shadow)',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    display: 'inline-block',
                    padding: '0.375rem 0.75rem',
                    background: statusStyle.bg,
                    border: `1px solid ${statusStyle.border}`,
                    color: statusStyle.text,
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {getStatusLabel(ticket.status)}
                  </div>

                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.3
                  }}>
                    {ticket.title}
                  </h3>

                  {ticket.description && (
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                      marginBottom: '1rem',
                      lineHeight: 1.6
                    }}>
                      {ticket.description.length > 120
                        ? ticket.description.substring(0, 120) + '...'
                        : ticket.description}
                    </p>
                  )}

                  {ticket.priority && (
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '1rem'
                    }}>
                      <span>Priority:</span>
                      <span style={{
                        padding: '0.25rem 0.5rem',
                        background: 'var(--glass)',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        textTransform: 'capitalize',
                        color: 'var(--text-primary)'
                      }}>
                        {ticket.priority}
                      </span>
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)'
                  }}>
                    <button
                      onClick={() => handleEdit(ticket)}
                      style={{
                        flex: 1,
                        padding: '0.625rem',
                        background: 'color-mix(in srgb, var(--secondary) 12%, transparent)',
                        color: 'var(--secondary)',
                        border: '1px solid color-mix(in srgb, var(--secondary) 40%, var(--border))',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(ticket)}
                      style={{
                        flex: 1,
                        padding: '0.625rem',
                        background: 'color-mix(in srgb, var(--danger) 12%, transparent)',
                        color: 'var(--danger)',
                        border: '1px solid color-mix(in srgb, var(--danger) 40%, var(--border))',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} labelledById="ticket-modal-title">
        <div style={{ padding: '2rem' }}>
          <h2 id="ticket-modal-title" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            {editingTicket ? 'Edit Ticket' : 'Create New Ticket'}
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter ticket title"
                style={{ ...inputStyle, borderColor: errors.title ? 'var(--danger)' : 'var(--border)' }}
              />
              {errors.title && (
                <div style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span>⚠</span> {errors.title}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter ticket description (optional)"
                rows={4}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '100px', borderColor: errors.description ? 'var(--danger)' : 'var(--border)' }}
              />
              {errors.description && (
                <div style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span>⚠</span> {errors.description}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="status" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                onFocus={onSelectFocus}
                onBlur={onSelectBlur}
                style={selectStyle}
              >
                <option value="open" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>Open</option>
                <option value="in_progress" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>In Progress</option>
                <option value="closed" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>Closed</option>
              </select>
              {errors.status && (
                <div style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span>⚠</span> {errors.status}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label htmlFor="priority" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                onFocus={onSelectFocus}
                onBlur={onSelectBlur}
                style={selectStyle}
              >
                <option value="low" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>Low</option>
                <option value="medium" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>Medium</option>
                <option value="high" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>High</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  flex: 1,
                  padding: '0.875rem',
                  background: 'var(--glass)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: '0.875rem',
                  background: 'var(--primary-grad)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px var(--shadow)'
                }}
              >
                {editingTicket ? 'Update Ticket' : 'Create Ticket'}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={deleteConfirm !== null} onClose={() => setDeleteConfirm(null)} labelledById="delete-modal-title">
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
          <h2 id="delete-modal-title" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Delete Ticket?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Are you sure you want to delete "{deleteConfirm?.title}"? This action cannot be undone.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => setDeleteConfirm(null)}
              style={{
                flex: 1,
                padding: '0.875rem',
                background: 'var(--glass)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              style={{
                flex: 1,
                padding: '0.875rem',
                background: 'var(--danger)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px var(--shadow)'
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      <footer style={{
        background: 'color-mix(in srgb, var(--bg-dark) 90%, transparent)',
        borderTop: '1px solid var(--border)',
        padding: '2rem',
        marginTop: '4rem'
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.875rem'
        }}>
          © 2025 TicketFlow • Built for Frontend Wizards Stage 2
        </div>
      </footer>
    </div>
  );
};

/* =========================================================
   ROUTER + PROTECTED ROUTES
   ========================================================= */
const isAuthed = () => !!localStorage.getItem('ticketapp_session');

function ProtectedRoute({ children }) {
  const authed = isAuthed();
  const location = useLocation();
  if (!authed) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }
  return children;
}

/* =========================================================
   APP (ROUTES)
   ========================================================= */
export default function App() {
  const handleNavigate = (page) => {
    const path =
      page === 'home' ? '/' :
      page === 'login' ? '/auth/login' :
      page === 'signup' ? '/auth/signup' :
      page === 'dashboard' ? '/dashboard' :
      page === 'tickets' ? '/tickets' : '/';
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleAuth = () => {
    window.history.pushState({}, '', '/dashboard');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleLogout = () => {
    localStorage.removeItem('ticketapp_session');
    window.history.pushState({}, '', '/auth/login');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage onNavigate={handleNavigate} />} />
      <Route path="/auth/login" element={<AuthPage isLogin={true} onNavigate={handleNavigate} onAuth={handleAuth} />} />
      <Route path="/auth/signup" element={<AuthPage isLogin={false} onNavigate={handleNavigate} onAuth={handleAuth} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard onNavigate={handleNavigate} onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <ProtectedRoute>
            <TicketManagement onNavigate={handleNavigate} onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

