// Los archivos que empiezan con 'use' es porque es un hook. 
// Un hook es una función

import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] =  useState({
        data: [],
        loading: true
    });

    // Petición HTTP    
    useEffect( () =>{

        getGifs(category)
            .then(imgs => {

                console.log(imgs)
                setState({
                    data: imgs,
                    loading: false
                });

            })

    },[category])

    
    return state;
    
}
