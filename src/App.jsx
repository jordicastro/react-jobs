const App = () => {
  const name = 'Jordi';
  const loggedIn = false;
  let flowers = ['daisys', 'roses', 'sunflowers'];
  const styles = {
    color: 'tomato',
    fontSize: '24px'
  }

  return (
    <>
    <div className='text-5xl'>
      App
    </div>

    <p style={styles}>hello {name}</p>

    <ul>
    { flowers.map( (flower, index) => (
      <li key={index}>i like {flower}</li>
      ))}
    </ul>

    {loggedIn ? ( <h1>hello {name}</h1>) : (<h1>hello guest</h1>) }

    </>
  )
};

export default App