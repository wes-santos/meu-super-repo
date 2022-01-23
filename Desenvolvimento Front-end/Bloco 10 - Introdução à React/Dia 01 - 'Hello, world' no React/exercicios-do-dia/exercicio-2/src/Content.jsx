import React from 'react';

const contentList = (content, status, block) => {
  return (
    <ul>
      <li><span className="bold">O conteúdo é:</span> {content}</li>
      <li><span className="bold">Status:</span> {status}</li>
      <li><span className="bold">Bloco:</span> {block}</li>
    </ul>
  )
};

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <main className="content">
      {conteudos.map((content) => {
        return contentList(content.conteudo, content.status, content.bloco);
      })}
      </main>
    )
  }
}

export default Content;
