import { useLocation } from "react-router";

// Hook
export function useQuery(){
    return new URLSearchParams(useLocation().search);
}