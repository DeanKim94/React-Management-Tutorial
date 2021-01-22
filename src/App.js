import Customer from './components/Customer.js'
import './App.css';

const customers = [ {
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name': '홍길숙',
  'birthday': '951222',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name': '홍숙',
  'birthday': '951222',
  'gender': 'boy',
  'job': '선생님'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name': '기길숙',
  'birthday': '941222',
  'gender': 'girl',
  'job': 'programmer'
}
]

function App() {
  return (
  <div>
    {
      customers.map(c=>{
        return(
        <Customer 
            id = {c.id}
            image ={c.image}
            name = {c.name}
            birthday={c.birthday}
            gender = {c.gender}
            job = {c.job}
        />
        )
        }
      )
    }
  </div>
  ); 
}

export default App;
