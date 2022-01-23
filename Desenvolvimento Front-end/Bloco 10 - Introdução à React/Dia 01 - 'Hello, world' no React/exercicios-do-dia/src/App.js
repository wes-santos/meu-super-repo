// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <ul>
      <li>{value}</li>
    </ul>
  );
};

function App() {
  const items = ['Terminar exercícios do course', 'Ler um pouco', 'Atualizar repositório no GitHub'];
  return (
    items.map((element) => Task(element))
  );
}

export default App;
