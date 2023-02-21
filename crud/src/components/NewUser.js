import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actCreateUser, actUpdateUser } from '../redux/actions'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NewUser() {
    const userPayload = JSON.parse(localStorage.getItem('userUpdate'));
    const navigate = useNavigate()
    useEffect(() => {
        (userPayload) && setInputValue(userPayload.user)
    }, [])
    const [inputValue, setInputValue] = useState(
        {
            email: '',
            password: '',
            fullname: '',
        }
    )
    const handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setInputValue({ ...inputValue, [key]: value })
    }
    const dispatch = useDispatch()
    const handleCreate = (e) => {
        e.preventDefault()
        if (userPayload.action === 'create') {
            dispatch(actCreateUser(inputValue))
            navigate('/')
        } else {
            dispatch(actUpdateUser(inputValue))
            navigate('/')
            localStorage.removeItem('userUpdate')
        }
    }
    const titleElement = (userPayload) && (userPayload.action === 'edit') ? 'Edit' : 'Create New User'
    return (
        <div>
            <h2>{titleElement}</h2>
            <div>
                <label htmlFor='email'>Email</label>
                <input value={inputValue.email} onChange={handleChange} id='email' name='email' type="text" />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input value={inputValue.password} onChange={handleChange} id='password' name='password' type="password" />
            </div>
            <div>
                <label htmlFor='fullname'>Fullname</label>
                <input value={inputValue.fullname} onChange={handleChange} id='fullname' name='fullname' type="text" />
            </div>
            <button onClick={handleCreate}>{(userPayload) && userPayload.action === 'edit' ? 'Edit' : 'Create'}</button>
        </div>
    )
}
