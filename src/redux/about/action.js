import { aboutActions } from "./index";

import { aboutService, getAllAboutService } from "./service";

export const AddAboutAction=(data)=>async(dispatch)=>{
    dispatch(aboutActions.setIsFetching(true));
try{
    const res=await aboutService(data);
    if(res?.status===201){
        dispatch(aboutActions.setIsFetching(false));
        dispatch(aboutActions.setAbout(res.data));
    }
}catch(error){
    console.log("Error"+ error)
}
}
export const getAllAboutAction=()=>async(dispatch)=>{
    dispatch(aboutActions.setIsFetching(true));
try{
    const res=await getAllAboutService();
    if(res?.status===200){
        dispatch(aboutActions.setIsFetching(false));
        dispatch(aboutActions.setAll(res));
    }
}catch(error){
    console.log("Error"+ error)
}
}