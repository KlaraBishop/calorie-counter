import './stylesheets/App.css'
import { useState } from 'react';

function App() {
  const [itemText, setItemText] = useState('');
  const [itemCalories, setItemCalories] = useState('');

  const [itemList, setItemList] = useState([{name:"Cookie", calories: 270}]);
  const [total, setTotal] = useState(() => {
    return itemList.reduce((acc, o) => acc + o.calories, 0)
  })

  const onItemUpdate = (e) => {
    setItemText(() => e.target.value)
  }

  const onCaloriesUpdate = (e) => {
    setItemCalories(() => e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    setItemList(() => {
      return itemList.concat({name:{itemText}, calories:{itemCalories}})
    })
  }

  return <>
    <h2>Total Calories</h2>
    <h2>{total}</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody>        
        {itemList.map(item => {
          return <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.calories}</td>
          </tr>
        })}
      </tbody>
    </table>
    <form>
      <label htmlFor='item'>Item: </label>
      <input type="text" id='item' name='item' value={itemText} onChange={onItemUpdate} />
      <label htmlFor='calories'>Calories: </label>
      <input type="text" id='calories' name='calories' onChange={onCaloriesUpdate} />
      <button type="submit" onClick={onSubmit}>Add</button>
    </form>
  </>
}

export default App
