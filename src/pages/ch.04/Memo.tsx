//useMemo 훅으로 Memo 컴포넌트 구현하기
import { Title, Avatar } from '../../components'
import * as D from '../../data'
import { useMemo } from 'react'

export default function CreateOrUseTest() {
    const headTexts = useMemo<string[]>(() => [
        'No.', 'Name', 'Job Title', 'Email Adress'
    ],[])
    const users = useMemo<D.IUser[]>(() =>
        D.makeArray(100).map(D.makeRandomUser),[]
    )
    const head = useMemo(() =>
        headTexts.map(text => <th key={text}>{text}</th>)
        ,[headTexts]
    )
    const body = useMemo(() => 
        users.map((user, index) => (
            <tr key={user.uuid}>
                <th>{index +1}</th>
                <td className="felx items-center">
                    <Avatar src = {user.avatar} size="1.5rem"/>
                    <p className="ml-2">{user.name}</p>
                </td>
                <td>{user.jobTitle}</td>
                <td>{user.email}</td>
            </tr>
        )),
        [users]
    )
    return (
        <div className="mt-4">
            <Title>CrateOrUSeTest</Title>
            <div className="overflow-x-auto mt-4 p-4">
                <table className="table table-zebra table-compact w-full">
                    <thead>
                        <tr>{head}</tr>
                    </thead>
                    <tbody>{body}</tbody>
                </table>
            </div>
        </div>
    )
}