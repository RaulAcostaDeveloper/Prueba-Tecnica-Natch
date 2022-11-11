import { useState } from 'react';
import './Styles/DragAndDrop.css';
import CarrucelImagenes from './CarrucelImagenes';
const DragAndDrop = ()=>{
    const [archivos, setArchivos] = useState([]);
    const [archivo, setArchivo] = useState('');
    const allowedExtensions = [ ".jpg", ".png", ".jpeg,"];
    const handleArchivo =(file)=>{
        const reader = new FileReader();
        let extension = (file.target.value.substring(file.target.value.lastIndexOf("."))).toLowerCase();
        if (allowedExtensions.some( ext => extension==ext)) {
            reader.addEventListener('load', (event) => {
                setArchivos(archivos.concat(event.target.result));
              });
            // Quizá haya una mejor manera de obtener el .files  
            reader.readAsDataURL(document.getElementById('inputFiles').files[0]);
        }
        setArchivo('');
    }
    console.log(archivos);
    return (
        <div className="DragAndDrop">
            <label class="fileUpload">
                <input value={archivo} id='inputFiles' type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e)=>handleArchivo(e)} multiple />
                <img src='./dragfile.png' alt='Drag file here'/>
            </label>
            <p>Drag and drop</p>
            <CarrucelImagenes rutas={archivos}/>

        </div>
    )
}
export default DragAndDrop;