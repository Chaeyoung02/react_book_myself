//Input 컴포넌트 테두리 설정
import { Input } from '../../../theme/daisyui'

export default function Border() {
    return (
        <section className="mt-4">
            <h2 className="font-bold text-3xl text-center">Border</h2>
            <div className="flex p-4 mt-4 justify-evenly">
                <div>
                    <label className="input-bordered"/>
                    <Input className="input-bordered"/>
                </div>
                <div>
                    <label className="input-ghost"/>
                    <Input className="input-ghost"/>
                </div>
               
            </div>
        </section>
    )
}