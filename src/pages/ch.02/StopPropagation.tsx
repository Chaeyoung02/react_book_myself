//이벤트 캡쳐링
import type { SyntheticEvent } from "react";
export default function StopPropagation() {
    const onDivClick = (e: SyntheticEvent) => console.log('click event bubbles on <div>')
    const onButtonClick = (e: SyntheticEvent) => {
        console.log('mouse click occurs on <button> and call stopPropagation')
        e.stopPropagation()

    }
    return (
        <div onClick={onDivClick}>
            <p>StopPropagation</p>
            <button onClick={onButtonClick}>click me and stop propagation</button>
        </div>
    )
}