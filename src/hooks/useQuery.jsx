import { useLocation } from "react-router";

// Hook
export function useQuery(){
    return new URLSearchParams(useLocation().search);
}

// Hook
export function useQuery2(){
    return new URLSearchParams(useLocation().search2);
}