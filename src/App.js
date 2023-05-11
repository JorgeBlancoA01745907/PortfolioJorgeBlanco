import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container">
        <h1 className="title">Portfolio Jorge Isidro Blanco Martínez</h1>
        <p className="description">
          Hi, I'm Jorge Blanco, I'm currently studying ITC at Tecnológico de Monterrey Campus Estado de México.
          <br />
          Check out some of my projects:
        </p>

        <div className="projects">
          <div className="projectCard">
            <h2>Project 1</h2>
            <p>Description of Project 1</p>
            <a href="/projects/project1">View Project</a>
          </div>
          <div className="projectCard">
            <h2>Project 2</h2>
            <p>Description of Project 2</p>
            <a href="/projects/project2">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default App;
