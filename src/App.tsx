import { useQuery } from 'react-query'
import './App.css'

function App() {



                            // when parameter change function execute
  const fetchData = useQuery(["users"], () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());

  },{
    enabled:false  // closed first render
  })

  const {data, isLoading,refetch} = fetchData;
  
  if (isLoading) {
    return(
    <h2>Data is Loading.....</h2>
    )
  }
  
  console.log(data)
  return (
    <>
     <div>
      <button onClick={() => refetch()}>Get Data</button>
      {data &&  data.map((item:any) => {
        return ( <p key={item.id}> {item.name}</p> )
      })}
     </div>
    </>
  )
}

export default App
