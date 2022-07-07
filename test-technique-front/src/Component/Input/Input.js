import {  useState } from 'react';
import axios from 'axios'
import './Input.scss';
const Input = () => {

     const formData = new FormData()

     const config = {
        headers:{
            "Content-type": "multipart/form-data"
        }   
    }  
    const[crewInput, setCrewInput] = useState({})

    formData.append('name_crew', crewInput)
    
    const handleChange = (e) => {
        setCrewInput(

            state=>(
                {...state, [e.target.name]:e.target.value}
                ),
                )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/addCrew.php', crewInput, config)
        .then((response) => {console.log(response)})
        .catch((error)=>{console.log(error,'error post')}) 
        window.location.reload(); 
    }
    return(
        <div className='section__input'>
        <h2>Nom de l'Argonaute</h2>

        <form className='input' onSubmit={handleSubmit}>
            <input className='input__field' placeholder="Ajouter un équipage" type={'text'} onChange={handleChange} name='name_crew' value={crewInput.name_crew ||''}  />
            <button className='input__button' type='submit'>Ajouter</button>
        </form>

        </div>
    );
}

export default Input