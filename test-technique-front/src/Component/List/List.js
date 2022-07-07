import axios from 'axios';
import { BigHead } from '@bigheads/core';
import './List.scss';

const List = ({list}) => {

    const handleClick=(e)=> {
        const id = e.target.id;
        axios.delete(`http://localhost:8080/deleteCrew.php?id=${id}`)
        .then((respons)=>console.log(respons))
        .catch((error)=>console.log(error))
        window.location.reload(); 
    }
    
    let test = list.length;
    
    return(
        <div className='crew'>
        <h1 className='crew__title'>Il y a actuellement {test < 1   ? 'aucun membre' : test === 1 ? `${test} membre` :`${test} membres`}  d'équipage capitaine ! </h1> 
        <div className='crew__face'>
        {
            list.map((item) => 
            <BigHead
                key={item.id}
                className='crew__face__item'
                accessory="none"
                body="chest"
                circleColor="blue"
                clothing="naked"
                clothingColor="black"
                eyebrows="serious"
                eyes="squint"
                faceMask={false}
                faceMaskColor="black"
                facialHair="stubble"
                graphic="react"
                hair="bob"
                hairColor="black"
                hat="none2"
                hatColor="green"
                lashes={false}
                lipColor="pink"
                mask
                mouth="grin"
                skinTone="yellow"
            />
            )
        }

        </div>
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
