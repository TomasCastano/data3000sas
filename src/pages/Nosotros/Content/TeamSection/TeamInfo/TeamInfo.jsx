import tiImage from '../../../../../assets/images/ti.webp'
import thImage from '../../../../../assets/images/th.webp'
import servicesImage from '../../../../../assets/images/services.webp'

import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded'
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined'
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined'

import './TeamInfo.css'

const TeamInfo = () => {
    const teamData = [
        {
            title: "Tecnologías de la Información",
            description: "Desarrollamos soluciones tecnológicas que fortalecen la seguridad de la información y optimizan la gestión documental, mejorando la eficiencia y precisión en los datos.",
            icon: LaptopChromebookRoundedIcon,
            image: tiImage
        },
        {
            title: "Gestión Documental",
            description: "Contamos con un equipo especializado que garantiza orden, control y eficiencia en cada etapa del proceso de gestión documental, asegurando calidad y confiabilidad.",
            icon: TopicOutlinedIcon,
            image: servicesImage
        },
        {
            title: "Talento Humano",
            description: "Nuestro equipo de Talento Humano impulsa el crecimiento de cada colaborador con capacitación, apoyo constante y un ambiente laboral cercano.",
            icon: Diversity2OutlinedIcon,
            image: thImage
        }
    ]

    return (
        <div className="team-container">
            {teamData.map((item, index) => (
                <div className="team-card" key={index}>
                    <div className="team-card-image">
                        <img src={item.image.src} alt="Personal de DATA 3000 S.A.S" />
                    </div>
                    <div className="team-card-info">
                        <div className="team-info-header">
                            <item.icon className='icon-bg' />
                            <item.icon className='icon' />
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