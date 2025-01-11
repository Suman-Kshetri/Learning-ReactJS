import './App.css'

function App() {
  let name = "Suman";
  return (
    <>
       <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
       </nav>
       <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis assumenda, quam ex commodi doloremque odio natus suscipit unde magni fugit, earum aut? Esse ipsa ad minima at non itaque.
        Ullam voluptatibus sunt saepe, eveniet totam suscipit ut laudantium eum, similique soluta incidunt, culpa vitae ducimus nisi hic praesentium corporis voluptatem magnam. Aliquid voluptatibus sunt dolores maxime, ea asperiores nobis.
        Neque labore quo consequatur quam in, modi doloremque voluptatum fugiat aperiam sequi voluptas. Nesciunt eius officia vel vero minima perferendis ab omnis, consequuntur recusandae praesentium rerum ratione doloremque optio repudiandae!</p>
       </div>
    </>
  )
}

export default App
