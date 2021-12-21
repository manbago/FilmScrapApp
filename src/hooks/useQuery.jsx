import { useLocation } from "react-router";

// Hook
export function useQuery(){
    return new URLSearchParams(useLocation().search);
}

// Hook
export function useQuery2(){
    console.log(useLocation().search);
    return new URLSearchParams(useLocation().search);
}