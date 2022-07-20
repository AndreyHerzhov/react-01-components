 import Painting from "./components/Painting"
 import paintings from './paintings.json'

 export default function App(){
   
  return <div>
    {paintings.map( painting =>
      <Painting 
        key={painting.id}
        url={painting.url} 
        title={[0].title} 
        authorName={painting.author.tag}
        profileUrl={painting.author.url}
        price={painting.price}
        quantity={painting.quantity}
      />
        )} 
    
  </div>
 }
    
    
