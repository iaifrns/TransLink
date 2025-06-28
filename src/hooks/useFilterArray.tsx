import { useEffect, useState } from "react"

const useFilterArray = (array: any[], text:string, pointer: string) => {
    const [newArr, setNewArr] = useState<any[]>([])

    useEffect(()=>{
        setNewArr(array.filter(it => it[pointer].includes(text)))
    },[text, array])

    return newArr
}

export default useFilterArray