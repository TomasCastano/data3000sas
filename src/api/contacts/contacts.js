import api from "../api"

export const sendMessage = async (data) => {
    const response = await api.post("/api/contacts", data)
    return response.data
}