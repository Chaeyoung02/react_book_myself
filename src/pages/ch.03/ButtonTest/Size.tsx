//btn 클래스 기본으로 반영
import { Button } from '../../../theme/daisyui'

export default function Size() {
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">Size</h2>
            <div className="mt-4 flex justify-evenly">
                <Button className="btn-lg btn-primary">size lg</Button>
                <Button className="btn-lg btn-secondary">size md</Button>
                <Button className="btn-lg btn-accent">size sm</Button>
                <Button className="btn-lg btn-info">size xs</Button>
            </div>
        </section>
    )
}