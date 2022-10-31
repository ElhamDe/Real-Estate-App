import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"



export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'eeae8cfecbmsh27690540ff6711ap1b3d73jsn31fd1c690f04',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}