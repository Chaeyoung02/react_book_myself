//아이콘 사용 + 경로 주의
import { Icon } from '../../components'

export default function UsingIcon() {
    return (
        <div>
            <h3>UsinngIcon</h3>
            <Icon name="home" style={{ color: 'blue' }} />
            <Icon name="check_circle_outline" style={{ color: 'red', fontSize: '50px' }} />
        </div>
    )
}