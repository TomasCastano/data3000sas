import servicesImage from '../../../../../assets/images/services.webp'
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded'

import './TeamInfo.css'

const TeamInfo = () => {
    const teamData = [
        {
            title: "Tecnologías de la Información",
            description: "Soluciones tecnológicas avanzadas para la gestión digital de documentos y sistemas de información."
        },
        {
            title: "Gestión Documental",
            description: "Contamos con el personal capacitado para el desempeño de cada una de las actividades involucradas en el proceso de la gestión documental."
        },
        {
            title: "Talento Humano",
            description: "El área de talento humano, nunca te hará sentir lejos de casa, acompañándote en toda dificultad, capacitándote y enseñándote cada vez más."
        }
    ]

    return (
        <div class="team-container">
            {teamData.map((item, index) => (
                <div class="team-card" key={index}>
                    <div class="team-card-image">
                        <img src={servicesImage.src} alt="Personal de DATA 3000 S.A.S" />
                    </div>
                    <div class="team-card-info">
                        <div class="team-info-header">
                            <LaptopChromebookRoundedIcon className='icon-bg' />
                            <LaptopChromebookRoundedIcon className='icon' />
                            <h3>{item.title}</h3>
                        </div>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamInfo