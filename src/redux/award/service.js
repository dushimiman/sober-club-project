import axios from "axios"

export const awardService=async(data)=>{
    try{
        const res=await axios.post("http://localhost:9095/v1/soberclub/award",data);
        return res;
    } catch(err){
        console.log("error",err);
    }
};
export const getAllAwardService=async()=>{
    try{
        const res=await axios.get("http://localhost:9095/v1/soberclub/award");
        return res;
    } catch(err){
        console.log("error",err);
    }
};