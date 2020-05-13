import React from 'react'
import Login from './components/Login/Login'

const routes = [
    {
        path: 'login',
        name: 'Login',
        component: Login,
        options: {
            headerShown: false
        }
    }
]

export default routes