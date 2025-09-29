import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.PUBLIC_BACKEND_URL,
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("❌ Error en la solicitud:", error)

        return Promise.reject({
            message: error.response?.data?.message || "Error en la solicitud",
            status: error.response?.status,
        })
    }
)

export default api