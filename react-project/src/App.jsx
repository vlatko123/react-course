import { CoreConcepts } from "./CoreConcepts";
import { Header } from "./Header";
import { CORE_CONCEPTS as data } from './data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {data.map((item, index) => {
              return (
                <CoreConcepts
                  key={index}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                />
              )
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
