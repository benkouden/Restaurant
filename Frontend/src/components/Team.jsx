import React from 'react'
import { data } from "../Pages/restApi.json"
const Team = () => {
  return (
     <section className='team' id='team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>NOTRE EQUIPE</h1>
                <p>Rencontrez notre équipe dévouée, passionnée par l'art culinaire. Chaque membre apporte son expertise et sa créativité pour offrir le meilleur.
                     Ensemble, nous partageons une vision commune : rendre chaque repas exceptionnel.</p>
            </div>
            <div className="team_container">
            {
                data[0].team.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                           <img src={element.image} alt={element.name} />
                           <h3>{element.name}</h3>
                           <p>{element.designation}</p>
                        </div>
                    )
                })
            }
        </div>
           
        </div>
     </section>
  )
}
export default Team;
