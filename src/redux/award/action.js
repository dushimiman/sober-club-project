import { awardActions } from "./index";

import { awardService, getAllAwardService } from "./service";

export const AddAwardAction=(data)=>async(dispatch)=>{
    dispatch(awardActions.setIsFetching(true));
try{
    const res=await awardService(data);
    if(res?.status===201){
        dispatch(awardActions.setIsFetching(false));
        dispatch(awardActions.setnew(res.data));
    }
}catch(error){
    console.log("Error"+ error)
}
}
export const getAllAwardAction=()=>async(dispatch)=>{
    dispatch(awardActions.setIsFetching(true));
try{
    const res=await getAllAwardService();
    if(res?.status===200){
        dispatch(awardActions.setIsFetching(false));
        dispatch(awardActions.setAll(res));
    }
}catch(error){
    console.log("Error"+ error)
}
}