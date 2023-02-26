import React, {useState, useEffect,Fragment} from "react";

export function Card(){
    const [isLoading, setIsLoading] = useState(true); //modo carga
    const [advice, setAdvice] = useState(null);

    useEffect(()=>{
        if(isLoading){
            fetch('https://api.adviceslip.com/advice')
                .then((res)=>res.json())
                .then((res)=>{
                    setAdvice(res.slip); //guardar datos
                    setIsLoading(false); //desactivar modo carga
                });
        }
    },[isLoading]);//el efecto solo se ejecutara cada vez que cambie el estado

    const randomAdvice = () =>{
        setIsLoading(true);
    };
    
    if(isLoading){
        return(
            <div className="Card">
                <div className="Spinner">
                    
                </div>
            </div>
        );
    }
    return(
        <Fragment>
            <div className="Card">
                <p className="IdAdvice">
                Advice #{advice.id}
                </p>
                <p className="Advice">
                "{advice.advice}"
                </p>
                <div className="Divider"></div>
                
            </div>
            <button type="button" onClick={randomAdvice}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </button>
        </Fragment>
    );
}