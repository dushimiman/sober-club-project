import { webServiceActions } from "./index";

import { createWebServicesService,  getAllWebServicesService } from "./service";

export const AddWebServiceAction=(data)=>async(dispatch)=>{
    dispatch(webServiceActions.setIsFetching(true));
try{
    const res=await createWebServicesService(data);
    if(res?.status===201){
        dispatch(webServiceActions.setIsFetching(false));
        dispatch(webServiceActions.setnew(res.data));
    }
}catch(error){
    console.log("Error"+ error)
}
}
export const getAllWebServiceAction=()=>async(dispatch)=>{
    dispatch(webServiceActions.setIsFetching(true));
try{
    const res=await getAllWebServicesService();
    if(res?.status===200){
        dispatch(webServiceActions.setIsFetching(false));
        dispatch(webServiceActions.setAll(res));
    }
}catch(error){
    console.log("Error"+ error)
}
}