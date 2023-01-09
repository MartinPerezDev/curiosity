import "./FilterCuriosidades.scss"
import { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './../../db/firestore.db';
import { useContext } from 'react';
import { ThemeContext } from './../../context/ThemeContext';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ArticlesContext } from './../../context/ArticlesContext';
import { BsTrash } from "react-icons/bs";

export const FilterCuriosidades = ({tools}) => {
    const { handleFilter, resetFilter } = useContext(ArticlesContext);
    const { color } = useContext(ThemeContext)
    const [categories, setCategories] = useState([])
    const [typeCategories, setTypeCategories] = useState("")
    const [toggleCategories, setToggleCategories] = useState(false)


    const getProducts = async() =>{
        try {
            const itemsCollection = collection(db,'categories');
            const response = await getDocs(itemsCollection);
            const docs = response.docs;
            const data = docs.map(doc => {
                return {
                    ...doc.data(), id: doc.id
                }});
                setCategories(data);
        } catch (error) {
            console.log(`Error al intentar conectar con el servidor: ${error}`);
        } finally {
            //setLoading(false);
        }
    }
    const setFilter = async(filter) =>{
        handleFilter(filter)
        setTypeCategories(filter)
        setToggleCategories(!toggleCategories)
    }
    const reset = async(e) =>{
        resetFilter()
        setTypeCategories("")
        e.stopPropagation();
    }
    useEffect(() => {
        getProducts()
    }, [])
    
  return (
    <div id="filter-curiosidades" style={{border: `1px solid ${color.border}`}} className={toggleCategories ? "categoriesHigh" :  typeCategories === "" ? "categoriesLow" : "categoriesLowFilter"}>
        <div className="categories-text" onClick={()=> setToggleCategories(!toggleCategories)}>
            <h2>Categorias :</h2>
            {
                typeCategories !=="" &&
                <div className="delete-filter">
                    <h2>solo {typeCategories}</h2>
                    <BsTrash className="icon-delete" onClick={(e)=>reset(e)}/>
                </div>
            }
            {
                toggleCategories?
                <IoIosArrowUp />
                :
                <IoIosArrowDown />
            }
        </div>
        <div className="categories">
            {
                categories.map(categorie=>(
                    <div className="categorie" style={{border: `1.5px solid ${color.border}`}} key={categorie.id} onClick={()=>setFilter(categorie.name)}>
                        <div className="color" style={{backgroundColor: categorie.color}}></div>
                        <p>{categorie.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
