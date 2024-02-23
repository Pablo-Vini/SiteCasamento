import axios, { AxiosPromise } from "axios";
import { DetalhesData } from "../interface/DetalhesData";


const api = axios.create({
    baseURL: "http://localhost:8080/item",
})

export default api;














/*
const API_URL = "http://localhost:8080"

const fetchData = async (): AxiosPromise<DetalhesData[]> => {
    const response= axios.get(API_URL + "/item")
    return response;
}

export function useDetalhesData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['detalhes-data'],
        retry: 2
    })

    return {
        data: query.data?.data
    }
}

function useQuery(arg0: { queryFn: () => AxiosPromise<DetalhesData[]>; queryKey: string[]; retry: number; }) {
    throw new Error("Function not implemented.");
}*/
