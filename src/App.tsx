import { Component } from "react"
import ClassComponent from "./ClassComponent"
export default class App extends Component {
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
  render() {
    return (
      <ul>
        <ClassComponent />
        <ClassComponent />
      </ul>
    )
  }
}