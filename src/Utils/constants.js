 
export const API_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' +   import.meta.env.VITE_TMDB_KEY, }
  };
  
export const  Image_CDN_Url = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {identifier :"en",name: "English"},
  {identifier :"hindi",name: "Hindi"},
  {identifier :"french",name: "French"}, 
]
 
export const GeminiAI_key =  import.meta.env.VITE_GeminiAI_key;