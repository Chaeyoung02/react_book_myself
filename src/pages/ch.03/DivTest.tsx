//Div 컴포넌트 사용하기
import { Title, Subtitle, Div, Icon } from '../../components'
export default function DivTest() {
    return (
        <section className="mt-4">
            <Title>DivTest</Title>
            {/* 웹 브라우저의 높이 결정 메커니즘 적용하기 */}
            {/* <Div className="text-center text-blue-100 bg-blue-600"></Div> */}
            <Div className="text-center text-blue-100 bg-blue-600" height="6rem">
                <Icon name="home" className='text-3xl' />
                <Subtitle>Home</Subtitle>
            </Div>
        </section>
    )
}