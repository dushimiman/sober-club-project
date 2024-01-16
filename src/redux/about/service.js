import axios from "axios"

export const aboutService=async(data)=>{
    try{
        const res=await axios.post("http://localhost:9095/v1/soberclub/about",data);
        return res;
    } catch(err){
        console.log("error",err);
    }
};
export const getAllAboutService=async()=>{
    try{
        const res=await axios.get("http://localhost:9095/v1/soberclub/about");
        return res;
    } catch(err){
        console.log("error",err);
    }
};