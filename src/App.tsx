import ButtonTest from './pages/ch.03/ButtonTest'
import InputTest from './pages/ch.03/InputTest'
import ModalTest from './pages/ch.03/ModalTest'

//import DirectionTest from './pages/ch.03/DirectionTest'
//import WrapTest from './pages/ch.03/WrapTest'
//import MinMaxTest from './pages/ch.03/MinMaxTest'
//import JustifyCenterTest from './pages/ch.03/JustifyCenterTest'
//import AlignTest from './pages/ch.03/AlignTest'
//import UserContainer from './pages/ch.03/UserContainer'
//import CardContainer from './pages/ch.03/CardContainer'

//import DivTest from './pages/ch.03/DivTest'
//import ViewportTest from './pages/ch.03/ViewportTest'
//import HeightTest from './pages/ch.03/HeightTest'
//import PaddingTest from './pages/ch.03/PaddingTest'
//import MarginTest from './pages/ch.03/MarginTest'
//import ImageTest from './pages/ch.03/ImageTest'
//import BackgroundImageTest from './pages/ch.03/BackgroundImageTest'
//import DisplayTest from './pages/ch.03/DisplayTest'
//import DisplayNoneTest from './pages/ch.03/DisplayNoneTest'
//import AvatarTest from './pages/ch.03/AvatarTest'
//import PositionTest from './pages/ch.03/PositionTest'
//import OverlayTest from './pages/ch.03/OverlayTest'

//import Tailwindcss from './pages/ch.03/Tailwindcss'
//import Color from './pages/ch.03/Color'
//import TextsTest from './pages/ch.03/TextsTest'

//import Bootstrap from './pages/ch.03/Bootstrap'
//import Icon from './pages/ch.03/Icon'
//import Style from './pages/ch.03/Style'
//import UsingIcon from './pages/ch.03/UsingIcon'
//import UsingIconWithCSSClass from './pages/ch.03/UsingIconWithCSSClass'
//import './App.css'

//import EventListener from './pages/EventListener'
//import OnClick from './pages/OnClick'
//import ReactOnClick from './pages/ReactOnClick'
//import DispatchEvent from './pages/DispatchEvent'
//import EventBubbling from './pages/EventBubbling'
//import StopPropagation from './pages/StopPropagation'
//import VariousInputs from './pages/VariousInputs'
//import OnChange from './pages/OnChange'
//import FileInput from './pages/FileInput'
//import DragDrop from './pages/DragDrop'
//import FileDrop from './pages/FileDrop'

//import { Component } from "react"
//import ClassComponent from "./ClassComponent"
//import ArrowComponent from "./ArrowComponent"
//import P from "./P"


//export default function App() /*extends Component*/ {

/*isLoading값에 따른 분기
render() {
  const isLoading = true
  const children = isLoading ? (
    <p>loading...</p>
  ) : (
    <ul>
      <li>
        <a href="http://www.google.com">
          <p>go to google</p>
        </a>
      </li>
    </ul>
  )
  return <div>{children}</div>

}*/

/*render() {
  return (
    <ul>
      <ClassComponent />
      <ClassComponent />
    </ul>
  )
}*/

/* function 키워드 방식 함수 컴포넌트
return <div>Hello function-keyword Component!</div>*/
//}

/* 화살표 방식 함수컴포넌트
const App = () => {
  return <h1>function component</h1>
}
export default App

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to google" />
      <ArrowComponent href="https://twitter.com" text="go to Twitter" />
    </ul>
  )
}*/

/* key 값 설정
export default function App() {
  const texts = [<p key="1">hello</p>, <p key="2">world</p>]
  return <div>{texts}</div>
}*/

/* map 메서드 사용 
export default function App() {
  const texts = ['Hello', 'world'].map((text, index) => <p key={index}>{text}</p>)
  return <div>{texts}</div>
}*/

/*children 속성
export default function App() {
  const texts = ['Hello', 'World'].map((text, index) => <p key={index} children={text} />)
  return <div children={texts} />
}*/

/*P 컴포넌트 사용
export default function App() {
  const texts = ['Hello', 'World'].map((text, index) => <P key={index} children={text} />)
  return <div children={texts} />
}*/

/*ch.02 이벤트 처리
export default function App() {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener />
    </div>
  )
}*/

/* 3-1css스타일링
export default function App() {
  return (
    <div>
      <UsingIconWithCSSClass />
      <UsingIcon />
      <Style />
      <Icon />
      <Bootstrap />

    </div>
  )
}*/

/* 3-2 테일윈드 css
export default function App() {
  return (
    <div>
      <TextsTest />
      <Color />
      <Tailwindcss />
    </div>
  )
}*/

/* 3-3 css 상자모델 
export default function App() {
  return (
    <main>
      <OverlayTest />
      <PositionTest />
      <DisplayNoneTest />
      <DisplayTest />
      <AvatarTest />
      <BackgroundImageTest />
      <ImageTest />
      <MarginTest />
      <PaddingTest />
      <HeightTest />
      <ViewportTest />
      <DivTest />
    </main>
  )
}*/

/* 3-4 플렉스 레이아웃 이해하기
export default function App() {
  return (
    <main>
      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
      <WrapTest />
      <DirectionTest />
    </main>
  )
}*/

/* 3-5 daisyui CSS 컴포넌트 이해하기*/
export default function App() {
  return (
    <main>
      <ButtonTest />
      <InputTest />
      <ModalTest />
    </main>
  )
}