import "./Colaborador.css"
 import { IoIosCloseCircle } from "react-icons/io"
 import { IoIosHeart } from "react-icons/io";
 import { IoMdHeartEmpty } from "react-icons/io";



const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos
  const {colorPrimario, eliminarColaborador, like } = props

  //condicion ? verdadero : falso

  return (
    <div className="colaborador">
      <IoIosCloseCircle className="eliminar" onClick={ () => eliminarColaborador(id)} />
      <div className="encabezado" style={{backgroundColor:colorPrimario}}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? <IoIosHeart color="red" onClick={() => like(id)}/> : <IoMdHeartEmpty onClick={() => like(id)} />} 
      </div>
    </div>
  );
};
export default Colaborador;