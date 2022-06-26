import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const  fetchApi = async (url) => {
 const {data} = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '31367b5480msh146cdac71a4dee0p1e3504jsnbc947c4b8871',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
 })
 return data;
}