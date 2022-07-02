import './Input.scss';
const Input = () => {
    return(
        <div className='section__input'>
        <h2>Nom de l'Argonaute</h2>
        <form className='input'>
            <input className='input__field' placeholder="Ajouter un équipage" type={'text'} />
            <button className='input__button' type='submit'>Ajouter</button>
        </form>
        </div>
    );
}

export default Input