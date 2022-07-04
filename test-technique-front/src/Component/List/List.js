import axios from 'axios';
import './List.scss';

const List = ({list}) => {

    const handleClick=(e)=> {
        const id = e.target.id;
        axios.delete(`http://localhost:8080/deleteCrew.php?id=${id}`)
        .then((respons)=>console.log(respons))
        .catch((error)=>console.log(error))
        window.location.reload(); 
    }

    return(
        <div className='crew'>
        <h1 className='crew__title'>Membre d'équipage</h1>
            <ul className='crew__list'>
                {
                    list.map( (item) => 
                    <li key={item.id} className='crew__list__item' >{item.name_crew}<button className='delete__crew__member' id={item.id} onClick={handleClick}>X</button></li>
                    )
                }
            </ul>
        </div>
    );
}

export default List
