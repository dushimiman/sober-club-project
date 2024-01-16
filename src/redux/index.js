import { configureStore } from "@reduxjs/toolkit";
import award from "./award";
import about from "./about";
import webService from "./manageServices";

const store=configureStore({
    reducer:{
        award:award,
        about:about,
        webService:webService,
    }
})

export default store;