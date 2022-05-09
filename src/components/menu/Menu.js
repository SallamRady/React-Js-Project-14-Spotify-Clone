import React,{useEffect} from 'react';
import './Menu.scss';

const Menu = ({title , listObject}) => {
    useEffect(() => {
        const allLi = document
          .querySelector(".menuContainer ul")
          .querySelectorAll("li");
    
        function changeMenuActive() {
          allLi.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
    }, []);

    return (
        <div className="menuContainer">
            <p>{title}</p>

            <ul>
                {listObject && listObject.map((item) => (
                    <li key={item.id}>
                        <a href="#">
                            <i>{item.icon}</i>
                            <span> {item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;