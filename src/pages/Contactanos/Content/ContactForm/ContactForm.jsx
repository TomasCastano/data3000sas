import { useState } from 'react'
import { sendMessage } from "../../../../api/contacts/contacts"
import Snackbar from '@mui/material/Snackbar'

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'

import './ContactForm.css'

const ContactForm = () => {

    const [open, setOpen] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        website: '',
        services: []
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (name === "services") {
            setFormData((prev) => ({
                ...prev,
                services: checked
                    ? [...prev.services, value]
                    : prev.services.filter((service) => service !== value)
            }))
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }

    if (formData.website) {
        alert("Error inesperado. Intenta nuevamente.");
        return;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await sendMessage(formData)
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                message: '',
                website: '',
                services: []
            })
            setOpen(true)
        } catch (error) {
            console.error('Error al enviar:', error)
            alert('Hubo un error al enviar tu mensaje')
        }
    }

    return (
        <section className="contact-section">
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Gracias por tu mensaje. Nos pondremos en contacto contigo pronto."
                className='success-message'
            />
            <div className="form-header">
                <h2>Queremos escucharte</h2>
                <p>Déjanos tu mensaje y nuestro equipo se pondrá en contacto contigo.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Nombre <span>*</span></label>
                        <input type="text" id="name" name="name" value={formData.name} autoComplete="name" required placeholder="Ingresa tu nombre" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Empresa <span className="optional">(opcional)</span></label>
                        <input type="text" id="company" name="company" value={formData.company} autoComplete="company" placeholder="Nombre de tu empresa" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico <span>*</span></label>
                    <input type="email" id="email" name="email" value={formData.email} autoComplete="email" required placeholder="tu@email.com" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Teléfono <span className="optional">(opcional)</span></label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} autoComplete="tel" placeholder="Ej: +57-310-123-4567" onChange={handleChange} />
                </div>

                <input 
                    type="text"
                    name="website"
                    style={{ display: "none" }}
                    onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                    tabIndex="-1"
                    autoComplete="off"
                />

                <div className="services-section">
                    <h3>Servicios de interés <span className="optional">(opcional)</span></h3>
                    <div className="checkbox-group">
                        <div className="checkbox-item">
                            <input
                                type="checkbox"
                                name="services"
                                value="diagnostico"
                                id="diagnostico"
                                checked={formData.services.includes("diagnostico")}
                                onChange={handleChange}
                            />
                            <label htmlFor="diagnostico">Diagnóstico</label>
                        </div>

                        <div className="checkbox-item">
                            <input
                                type="checkbox"
                                name="services"
                                value="organizacion"
                                id="organizacion"
                                checked={formData.services.includes("organizacion")}
                                onChange={handleChange}
                            />
                            <label htmlFor="organizacion">Organización</label>
                        </div>

                        <div className="checkbox-item">
                            <input
                                type="checkbox"
                                name="services"
                                value="digitalizacion"
                                id="digitalizacion"
                                checked={formData.services.includes("digitalizacion")}
                                onChange={handleChange}
                            />
                            <label htmlFor="digitalizacion">Digitalización</label>
                        </div>

                        <div className="checkbox-item">
                            <input
                                type="checkbox"
                                name="services"
                                value="almacenamiento"
                                id="almacenamiento"
                                checked={formData.services.includes("almacenamiento")}
                                onChange={handleChange}
                            />
                            <label htmlFor="almacenamiento">Almacenamiento</label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Mensaje <span>*</span></label>
                    <textarea id="message" name="message" value={formData.message} required placeholder="Cuéntanos qué necesitas o en qué podemos ayudarte..." rows="5" onChange={handleChange} />
                </div>


                <button type="submit" className="submit-btn" id="submitBtn">Enviar mi consulta</button>
                <p className="privacy-policy">
                    Tus datos están seguros con nosotros. Solo los usaremos para responder tu consulta.
                    <VerifiedUserIcon className='icon' />
                </p>
            </form>
        </section>
    )
}

export default ContactForm