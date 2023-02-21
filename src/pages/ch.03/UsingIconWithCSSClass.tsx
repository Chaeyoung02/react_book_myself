//classname, style, name icon 컴포넌트,className 지정
import { Icon } from '../../components'
export default function UsingIconWithCSSClass() {
    return (
        <div>
            <h3>UsingIconWithCSSClass</h3>
            <Icon name='home' className="text-blue" />
            <Icon name="check_circle_outline" className="text-red" style={{ fontSize: '50px' }} />
        </div>
    )
} 