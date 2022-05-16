import React from 'react';
import './Note.scss';

const Note = () => {
    const statment = "You will find this project in the my githup 'SallamRady' Don't forget to follow me and star if you like my work";
    const row1 = statment.split(' ');
    const theword = row1.map((item,index)=>{
        return (
            <>
             <span key={index} className={`span-${index+1}`}  style={{'--i':index+1,animationDelay:index}}>{item}</span>
             <i> </i>
            </>
        )
    })
    return (
        <div className='note'>
            <p>
                 {theword}
                <br/>
                
                <br/>
                Sallam Rady
            </p>
        </div>
    );
};

export default Note;