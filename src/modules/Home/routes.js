import React from 'react'
import Home from '.'
import SinglePost from '../Home/components/SinglePost/SinglePost'

const routes = [
    {
        path: 'home',
        name: 'Home',
        component: Home,
        options: {
            headerShown: false
        }
    },
    {
        path: 'post',
        name: 'Post',
        component: SinglePost,
        options: {
            headerShown: false
        }
    }
]

export default routes