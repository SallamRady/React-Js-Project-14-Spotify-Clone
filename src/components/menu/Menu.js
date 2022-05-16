import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to={item.path}>
                            <i>{item.icon}</i>
                            <span> {item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;