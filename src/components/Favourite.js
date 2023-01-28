import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { useState } from 'react'
function Favourite() {
    const [todos, setTodos] = useState([])
    const onformSubmit = (todoObj) => {
        console.log(todoObj)
        setTodos([...todos, todoObj.todo])
    }
    return (
        <div className='container-fluid row text-center pt-3 justify-content-around '
            style={{
                backgroundImage: "url('https://visme.co/blog/wpcontent/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-08.jpg')",
                backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }} >
            <p className='h1 text-center text-success'>My Favourite Places </p>
            <div className='col-sm-6 p-4 m-5'>
                <AddTodo onformSubmit={onformSubmit} />
            </div>
            <div className='col-sm-6 p-4 m-5'>
                <TodoList todos={todos} />
            </div>
        </div>
    )
}
export default Favourite;
