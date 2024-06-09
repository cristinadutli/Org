import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    console.log(props)
    //Estado - hooks
    //useState
    
    //const [nombre de la variable,funcion que actualiza] = useState(valorInicial)
  
    const [mostrar,actualizarMostrar] = useState(true)
    const manejarClick = () => {
      console.log("Mostrar/Ocultar elemento",!mostrar)
      actualizarMostrar(!mostrar) 
    }


    return <section className="OrgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>


    </section>
}

export default MiOrg