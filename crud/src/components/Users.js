import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actDelUser, actGetUser } from '../redux/actions'
import { GET_USER } from '../redux/const/actionType'
import users from '../redux/reducers/users'
import { useNavigate } from 'react-router-dom'

export default function Users() {
    localStorage.removeItem('userUpdate')
    const navigate = useNavigate()
    const listUsers = useSelector(state => state.users)
    useEffect(() => {
        dispatch(actGetUser())
    }, [])
    const handleDel = (user) => {
        dispatch(actDelUser(user))
    }
    const handleEdit = (user) => {
        navigate('/newUser')
        const updateUser = {
            user: user,
            action: 'edit',
        }
        localStorage.setItem('userUpdate', JSON.stringify(updateUser))
    }
    const elementUsers = listUsers.map((user, index) => {
        return <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>123</td>
            <td>{user.fullname}</td>
            <td><button onClick={() => handleEdit(user)}>edit</button></td>
            <td><button onClick={() => handleDel(user)}>delete</button></td>
        </tr>
    })
    const dispatch = useDispatch()
    return (
        <div>
            <h2>List Students</h2>
            <table>
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>UserID</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Fullname</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {elementUsers}
                </tbody>
            </table>
            <button onClick={() => navigate('/newUser')}>Create New User</button>
        </div>
    )
}
