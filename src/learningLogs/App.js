import { useState } from 'react'
import { nanoid } from 'nanoid'
import Logs from './components/Logs'
import LogsForm from './components/LogsForm/idnex'
import './App.css'

/*
    1.不提升State
        -将Logs状态拿给Logs组件管理
    2.提升State
        -LogsForm负责点击提交后修改Logs
        -Logs负责渲染Logs
*/


export default function App() {
    const [logs, setLogs] = useState([])
    const addLog = (log) => {
        log.id = nanoid()
        setLogs([...logs, log])
    }
    const deleteLog = (logId) => {
        //先根据key找到logs中的删除项
        let newLogs = [...logs]
        const deleteItemIndex = newLogs.findIndex(item => item.id === logId)
        newLogs.splice(deleteItemIndex, 1)
        setLogs(newLogs)
    }

    return <div className="app">
        <LogsForm addLog={addLog} />
        <Logs logs={logs} deleteLog={deleteLog} />
    </div>
}