import React,{useEffect} from 'react';
import categories from '../../data/Categories';
import { FaUsers } from "react-icons/fa";
import './CategoriesMenu.scss';

const CategoriesMenu = () => {
    const category = categories.map(
        cat=>{
            return (
                <li className={cat.name == "Songs"?'active':""} key={cat.id}>
                    <a href="#">{cat.name}</a>
                </li>
            );
        }
    )
    useEffect(() => {
        const allLi = document
          .querySelector(".categoriesList ul")
          .querySelectorAll("li");
    
        function changeMenuActive() {
          allLi.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
    }, []);
    
    return (
        <div className="categoriesList">
            <ul>
                {category}
            </ul>
            <p>
                <i>
                    <FaUsers />
                </i>
                12.3M <span>Followers</span>
            </p>
        </div>
    );
};

export default CategoriesMenu;