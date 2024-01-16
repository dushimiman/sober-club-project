import axios from "axios"

export const createWebServicesService=async(data)=>{
    try{
        const res=await axios.post("http://localhost:9095/v1/soberclub/service",data);
        return res;
    } catch(err){
        console.log("error",err);
    }
};
export const getAllWebServicesService=async()=>{
    try{
        const res=await axios.get("http://localhost:9095/v1/soberclub/service");
        return res;
    } catch(err){
        console.log("error",err);
    }
};