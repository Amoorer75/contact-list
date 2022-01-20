
import './App.css'
import contacts from "./data/contacts.json"
import Contact from "./componet/contact.js"

function App() {

  const info = contacts.results.map((person) =>{
    return(
      <Contact 
      person={person}
      
      />
    )

  })

  return (
    <div className="App">
      
     <h1>contact List</h1>
     {info}
        
      
    </div>
  );
}

export default App;
