import React, {useEffect,useState} from 'react'
import ClimaDetalles from './ClimaDetalles';
import "./style.css"

function Busqueda() {
    const [busquedaTerm, setBusquedaTerm] = useState("Rio Grande, AR");
    const [tempInfo, setTempinfo] = useState({});

    const getClimaInfo = async () =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${busquedaTerm}&units=metric&appid=266bd13be69f814161b53b4b83e1fb86`

            let res = await fetch(url);
            let data = await res.json();
            const {temp, humidity, pressure} = data.main;
            const {main: tipoClima} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const infoClima = {
                temp, 
                humidity, 
                pressure, 
                tipoClima, 
                name, 
                speed, 
                country, 
                sunset,
            };

            setTempinfo(infoClima);

        }  catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getClimaInfo();
    }, [])//eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>
        <div className='wrap'>
            <div className="busqueda">
                <input type="busqueda" 
                placeholder='Ingresar Ciudad..' 
                id='busqueda' 
                value={busquedaTerm} 
                onChange={(e) => setBusquedaTerm(e.target.value) }
                />
            </div>
            <button className="busquedaBoton" onClick={getClimaInfo}>Buscar Ciudad </button>
        </div>
        <ClimaDetalles {...tempInfo} />
        </>
    );
}

export default Busqueda

