
// 컴포넌트 내부에서 children  속성 사용
import type { FC, ReactNode } from 'react'

export type PProps = {
    children?: ReactNode
}
const P: FC<PProps> = props => {
    const { children } = props
    return <p children={children} />
}
export default P

/* PropsWithChildren 제네릭 타입 사용
import type {FC, PropsWithchildren} from 'react'
02:
export type PProps = {}
const P: FC<PropsWithchildren<PProps>> = props => {
    return <p {...props}/>
}
export default P */

