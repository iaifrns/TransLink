import { useEffect } from "react"
import { apiUrl } from "../constants/apiRoutes"

const useFetchRoles = (setIsLoading: (v:boolean) => void, setRoles: (v: Role[]) => void) => {
    const fetchRoles = async () => {
        setIsLoading(true)
        try{
            const response = await fetch(apiUrl.getRoles)
            if(!response.ok){
                return alert('An error occured please Try later')
            }
            const result = await response.json()
            setRoles(result)
        }catch(e){
            console.log(e)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchRoles()
    },[])
}

export default useFetchRoles