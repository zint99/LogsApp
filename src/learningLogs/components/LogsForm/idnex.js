import React, { useState } from 'react'
import Card from '../UI/Card/index'
import './index.css'

/*
    - 根据表单数据构建新的logItem对象
*/
export default function LogsForm({ addLog }) {
    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')
    const onChangeDate = (e) => {
        setInputDate(e.target.value)
    }
    const onChangeDesc = (e) => {
        setInputDesc(e.target.value)
    }
    const onChangeTime = (e) => {
        setInputTime(e.target.value)
    }
    const onFormSubmit = (e) => {
        //阻止表单的默认提交
        e.preventDefault()
        //警告
        if (inputDate === '' || inputDesc === '' || inputTime === '') {
            alert('请填入正确格式')
            return
        }
        //根据表单数据构建新的logItem对象
        const logItem = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }
        //清除表单数据
        setInputDate('')
        setInputDesc('')
        setInputTime('')
        //传递数据到父组件,并修改logs状态
        addLog(logItem)
    }
    return (
        <Card className="logs-form">
            <form onSubmit={onFormSubmit}>
                <div className='form-item'>
                    <label htmlFor='date'>日期</label>
                    <input id='date' type='date' value={inputDate} onChange={onChangeDate} />
                </div>
                <div className='form-item'>
                    <label htmlFor='desc'>内容</label>
                    <input id='desc' type='text' value={inputDesc} onChange={onChangeDesc} />
                </div>
                <div className='form-item'>
                    <label htmlFor='time'>时长</label>
                    <input id='time' type='number' value={inputTime} onChange={onChangeTime} />
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    )
}
