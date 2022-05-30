//高阶组件，给子组件统一加上圆角和阴影样式

import React from 'react'
import './index.css'

export default function Card(props) {
    return (
        <div className={`card ${props.className}`}>{props.children}</div>
    )
}

