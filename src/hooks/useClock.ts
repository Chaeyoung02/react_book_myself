//useClock 커스텀 훅 구현
import {useState} from 'react'
import {useInterval} from './useInterval'

export const useClock = () => {
    const [today, setToday] = useState(new Date())
    useInterval(() => setToday(new Date()))
    return today
}

