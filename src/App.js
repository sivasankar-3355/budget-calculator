import React,{useState} from 'react';
import './app.css';
import { ExpenseList } from './components/ExpenseList';
import { ExpenseForm } from './components/ExpenseForm';
import { Alert } from './components/Alert';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {
    id: uuidv4(),
    charge: 'rent',
    amount: 1400,
  },
  {
    id: uuidv4(),
    charge: 'car payment',
    amount: 400,
  },
  {
    id: uuidv4(),
    charge: 'credit card bill',
    amount: 1200,
  },
];





export default function App() {
 
  const [expenses,setExpenses] = useState(initialExpenses)
  
  // const jod = (values) => {
  //   setExpenses(p => {
  //     return [...p, values]
  //   })
  // }
  const totalSpending = () => {
    const total = expenses.reduce((x,item) => {
       const toInt = parseInt(item.amount)
        x += toInt
        return x
    },0)
 
    return total
 }

 const [enteredValues, setEnteredValues] = useState({
  id: '',
  charge: '',
  amount: ''
})

const editHandle = (id) => {
   const filteredArray = expenses.filter((x) => {
     return x.id !== id
   })
   const findItem = expenses.find(x => x.id === id)
   setExpenses(filteredArray)
   setEnteredValues(p => {
     return{
       ...p,
       charge: findItem.charge,
       amount: findItem.amount
     }
   })
}

  return (
    <>
      <Alert />
      <h1>Budget calculator</h1>
      <main className="App">
      <ExpenseForm setExpenses={setExpenses} enteredValues={enteredValues} setEnteredValues={setEnteredValues} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} editHandle={editHandle}  />
      </main>
     <h1>
       total spending: <span className="total">{totalSpending()}</span>
     </h1>
    </>
  );
}

// const [sttae,dispatch] = useReducer(reducerFunction, {
//   count: 0;
// })