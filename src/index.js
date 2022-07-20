import ReactDOM from 'react-dom';
import paintings from './paintings.json'

function Painting(props) {
  const {url, title, profileUrl, authorName, price} = props
  console.log(props)
  return (
      <div>
        <img src={url} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
          Автор: <a href={profileUrl}>{authorName}</a>
        </p>
        <p>Цена: {price}</p>
        <p>Доступность: заканчивается или есть в наличии</p>
        <button type="button">Добавить в корзину</button>
      </div>
    
  )
}

const painting = paintings[1]

ReactDOM.render(<Painting 
          url={painting.url} 
          title={painting.title} 
          authorName={painting.author.tag}
          profileUrl={painting.author.url}
          price={painting.price}
  />, document.querySelector('#root'))


