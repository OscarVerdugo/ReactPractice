import Axios from "axios";
import Keys from "../keys.js";

export const getDashboardButtons = async (userId) => {
    const response = await Axios.get(`${Keys.apiUrl}menu_options/getMenuOptions?user_id=${userId}`);
    if(response.status !== 200){
        return [];
    }else if(response.data.response.bError === true){
        return [];
    }else {
        return response.data.response.data;
    }
};