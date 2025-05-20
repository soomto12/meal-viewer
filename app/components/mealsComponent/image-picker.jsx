"use client"
import Classes from './image-picker.module.css';
import { useRef,useState } from 'react';
import Image from 'next/image';

export default function ImapagePicker({label,name}){
    const imagePicker = useRef();

    const [picker, setpicker] = useState("");

function HandleChange(event){
const files =  event.target.files[0];
if(!files){
    return;
}

const fileReader= new FileReader();

fileReader.onload=()=>{
    setpicker(fileReader.result);
};

fileReader.readAsDataURL(files)

}

    function handelImageClicked(){
        imagePicker.current.click();
    }
    return(
        <div className={Classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={Classes.control}>
                <div className={Classes.preview}>
                    {!picker && <p> No image picked yet</p>}
                    {picker && <Image src={picker} 
                    alt='The image selected by the user'
                    fill
                    /> }
                </div>
                
<input 
className={Classes.input}
type='file' 
id={name}
accept='image/png, image/jpen'
name={name}
ref={imagePicker}
onChange={HandleChange}

/> 
<button className={Classes.button} type='button' onClick={handelImageClicked} > Pick an image </button>
            </div>
            
        </div>
    )
}