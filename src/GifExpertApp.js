// rafc TAB -> Estructura

import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

      const [categories, setCategories] = useState(['Carl cox']);

    // Funcion agregar
    // const handleAdd = () =>{
    //     // Operador spread ...
    //     setCategories([...categories, 'Joseph Capriati']);

    //     // Otra opción
    //     //setCategories(cats => [...cats, 'Joseph Capriati']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr></hr>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key = {category}
                            category = {category}
                        />
                    ))
                }
            </ol>

        </>
    )
}


