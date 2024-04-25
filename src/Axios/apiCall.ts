import axios from './setup';

export const sendMessage = async(body:any)=>{
    try{
      const response = await axios.post("/contact", body,{
        headers: {
            "Content-Type" : "application/json"
        }
      })
    return response
    }catch(error:any){
      return error.response
    }
}