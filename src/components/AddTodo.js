import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
function AddTodo({ onformSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <div >
            <div className="row-11 row-sm-10 row-md-7 ">
                <p className="h1 text-center text-success heading">
                    <FontAwesomeIcon icon={faReact} />Favourite Place</p>
                <hr />
                <form onSubmit={handleSubmit(onformSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="todo" className="form-label">Enter city name</label>
                        <input type="text" id="to" className="form-control" {...register("todo", { required: true })} />
                        {errors.todo?.type === 'required' && <p className='text-danger'>* Enter a city </p>}
                    </div>
                    <button className="btn btn-success" type='submit'>Add to Favourite</button>
                </form>
            </div>
        </div>
    )
}
export default AddTodo
