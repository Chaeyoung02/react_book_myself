//useInterval 커스텀 훅 구현
import { useEffect } from "react";

export const useInterval = (callback: () => void, duration: number = 1000) => {
    useEffect(() => {
        const id = setInterval(callback, duration)
        return () => clearInterval(id)
    },[callback,duration])
}