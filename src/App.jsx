import Header from './Header'
import Section from './Section'
import data from './data.js'

function App() {
  const destinations = data.map(card => {
    return <Section 
      key={card.id}
      card={card}
    />
  })

  return (
    <div className="app">
      <Header />
      <main>
        {destinations}
      </main>
      
    </div>
  )
}

export default App
