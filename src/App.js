import React from 'react';
import './App.css';
import profileImage from './assets/jeff.jpg';
import backgroundImage from './assets/background.png';

function App() {
  return (
    <main className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section className="hero">
        <figure className="profile-image">
          <img src={profileImage} alt="Jeff" />
        </figure>
        <h1>Hi, I'm Jeff!</h1>
        <h3 className="title">Solutions Engineer & Empathetic Advisor</h3>
        <blockquote className="quote">"I'm gonna eat your brains and gain your knowledge."</blockquote>
      </section>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/jfgrand/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/gritchou" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/gritchou" target="_blank" rel="noopener noreferrer">Twitter</a>
      </footer>
    </main>
  );
}

export default App;
