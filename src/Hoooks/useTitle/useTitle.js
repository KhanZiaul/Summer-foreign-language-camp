import { useEffect } from "react";

function useTitle(title){
    useEffect(()=>{
        document.title = `${title} - CarToyLab`
    },[title])
}
export default useTitle;