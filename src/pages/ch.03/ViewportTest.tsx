//뷰포트테스트(웹 브라우저의 크기를 변경하여도 항상 일치)
import { Title } from '../../components'
export default function ViewportTest() {
    return (
        <section className="w-screen h-screen mt-4 bg-indigo-900">
            <Title className="text-white">ViewportTest</Title>
        </section>
    )
}