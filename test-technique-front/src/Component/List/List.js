import './List.scss';

const List = () => {
    return(
        <div className='crew'>
        <h1 className='crew__title'>Membre d'équipage</h1>
            <ul className='crew__list'>
                <li className='crew__list__item'>Raphael</li>
                <li className='crew__list__item'>Sandrine</li>
                <li className='crew__list__item'>Sammy</li>
            </ul>
        </div>
    );
}

export default List