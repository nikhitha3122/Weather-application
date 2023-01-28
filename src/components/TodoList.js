import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTasks } from '@fortawesome/free-solid-svg-icons'
function TodoList({ todos }) {
    return (
        <div>
            <p className='h1 text-success head'><FontAwesomeIcon icon={faTasks} size='xs' /></p>
            <hr />
            <h4 className='mt-3' >Your list of cities</h4>
            {
                todos.map((todos, index) => <ol className='lead list-group-pointed' key={index}>
                    <button type="button" className="list-group-item list-group-item-action" >
                        <FontAwesomeIcon icon={faCheck} className='tick' />
                        {todos}
                    </button></ol>)
            }
        </div>
    )
}
export default TodoList
