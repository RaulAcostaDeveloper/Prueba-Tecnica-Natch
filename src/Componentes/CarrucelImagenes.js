import { useEffect, useState } from 'react';
import './Styles/CarrucelImagenes.css';
const CarrucelImagenes = ({rutas})=>{
    const [currentRuta, setCurrentRuta] = useState(0);
    const [animationStyle, setAnimationStyle] = useState('display:none');

    useEffect(()=>{
        handleSiguiente();
    },[rutas])
    const handleAnterior=()=>{
        if (currentRuta>0 ) {
            setCurrentRuta(currentRuta-1);
        } else if(rutas.length>0){
            setCurrentRuta(rutas.length - 1);
        }
        setAnimationStyle(anteriorImagenAnimacion);
      
    }
    const handleSiguiente=()=>{
        if (currentRuta<(rutas.length - 1)) {
                setCurrentRuta(currentRuta+1);
        } else {
            setCurrentRuta(0);
        }
        setAnimationStyle(siguienteImagenAnimacion);

    }
    let siguienteImagenAnimacion = {
        animationName:"siguienteImagenAnimacion",
        animationDuration:"500ms",
        animationFillMode:"initial",
    };
    let anteriorImagenAnimacion = {
        animationName:"anteriorImagenAnimacion",
        animationDuration:"500ms",
        animationFillMode:"initial",
    };
    return (
        <div className='CarrucelImagenes'>
            <div className='botones'>
                <button onClick={()=>handleAnterior()}>Anterior</button>
                <button onClick={()=>handleSiguiente()}>Siguiente</button>
            </div>
            <div className='carrucel'>
                {(rutas.length>0)&&
                    <>
                        <img 
                            key={rutas[currentRuta]} 
                            src={rutas[currentRuta]} 
                            alt={'Imagen cargada'}
                            style={animationStyle}
                        />
                    </>   
                }
            </div>
        </div>
    )
}
export default CarrucelImagenes;