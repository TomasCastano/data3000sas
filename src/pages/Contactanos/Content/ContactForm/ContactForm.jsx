import { useState, useEffect } from 'react'
import { sendMessage } from "../../../../api/contacts/contacts"
import Snackbar from '@mui/material/Snackbar'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import './ContactForm.css'

const ContactForm = () => {
    const [open, setOpen] = useState(false)
    const [showAlfrescoSelect, setShowAlfrescoSelect] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        website: '',
        services: [],
        alfrescoPlan: ''
    })

    useEffect(() => {
        if (formData.services.includes('alfresco')) {
            const timer = setTimeout(() => {
                setShowAlfrescoSelect(true)
            }, 50)
            return () => clearTimeout(timer)
        } else {
            setShowAlfrescoSelect(false)
        }
    }, [formData.services])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (name === "services") {
            setFormData((prev) => {
                const updatedServices = checked
                    ? [...prev.services, value]
                    : prev.services.filter((service) => service !== value);
                
                return {
                    ...prev,
                    services: updatedServices,
                    alfrescoPlan: updatedServices.includes('alfresco') ? prev.alfrescoPlan : ''
                };
            })
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData.website) {
            console.warn("Bot detectado.");
            return;
        }

        try {
            await sendMessage(formData)
            setFormData({
                name: '', company: '', email: '', phone: '',
                message: '', website: '', services: [], alfrescoPlan: ''
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

                <input type="text" name="website" style={{ display: "none" }} onChange={handleChange} tabIndex="-1" autoComplete="off" />

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
                                value="almacenamiento"
                                id="almacenamiento"
                                checked={formData.services.includes("almacenamiento")}
                                onChange={handleChange}
                            />
                            <label htmlFor="almacenamiento">Almacenamiento</label>
                        </div>
                        
                        <div className="checkbox-item">
                            <input type="checkbox" name="services" value="alfresco" id="alfresco" checked={formData.services.includes("alfresco")} onChange={handleChange} />
                            <label htmlFor="alfresco">Alfresco</label>
                        </div>
                    </div>

                    {formData.services.includes('alfresco') && (
                        <div className={`form-group alfresco-select-container ${showAlfrescoSelect ? 'show' : ''}`}>
                            <label htmlFor="alfrescoPlan">¿En qué plan estás interesado? <span>*</span></label>
                            <select 
                                id="alfrescoPlan" 
                                name="alfrescoPlan" 
                                value={formData.alfrescoPlan} 
                                onChange={handleChange}
                                required
                                className="styled-select"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="cloud">Alfresco en la nube de Data 3000 S.A.S</option>
                                <option value="managed">Alfresco en tu servidor, administrado por Data 3000 S.A.S</option>
                                <option value="self-managed">Alfresco en tu servidor, autoadministrado</option>
                            </select>
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Mensaje <span>*</span></label>
                    <textarea id="message" name="message" value={formData.message} required placeholder="Cuéntanos qué necesitas..." rows="5" onChange={handleChange} />
                </div>

                <button type="submit" className="submit-btn">Enviar mi consulta</button>
                <p className="privacy-policy">
                    Tus datos están seguros con nosotros. <VerifiedUserIcon className='icon' />
                </p>
            </form>
        </section>
    )
}

export default ContactForm