import React from 'react';
import Pokemon from './Pokemon';
import data from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>Pokedex</h1>
        </header>
        <section>
          {data.map((element) => {
            return <Pokemon key={element.id} name={element.name}
                    type={element.type}
                    averageWeight={element.averageWeight}
                    image={element.image}
                  />
          })}
        </section>
      </main>
    );
  }
}

export default Pokedex;
