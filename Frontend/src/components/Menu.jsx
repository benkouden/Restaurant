import React from 'react'
import { data } from "../Pages/restApi.json"


const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
            <h1 className='heading'>Plats Populaires</h1>
            <p>Découvrez nos plats les plus populaires, appréciés pour leur saveur unique. Chaque recette est préparée avec soin, pour offrir une expérience culinaire mémorable. Nos classiques vous séduiront à chaque bouchée.</p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                           <img src={element.image} alt={element.title} />
                           <h3>{element.title}</h3>
                           <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
        
      </div>
    </section>
  )
}

export default Menu