import PropTypes from 'prop-types'; // ES6
import defaultImage from './default.jpg'


console.log(defaultImage)

const  Painting = ({
  url = defaultImage, title, 
  profileUrl, authorName = 'Не известно', 
  price,
  quantity,
}) => {
  return (
      <div>
        <img src={url} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
          Автор: <a href={profileUrl}>{authorName}</a>
        </p>
        <p>Цена: {price}</p>
        <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}  </p>
        <button type="button">Добавить в корзину</button>
      </div>
    
  )
}

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  profileUrl:  PropTypes.string,
  authorName: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
}

export default Painting
