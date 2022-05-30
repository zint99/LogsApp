import { useState } from 'react'
import Item from '../Item'
import LogsFilter from '../LogsFilter'
import Card from '../UI/Card/index'
import './index.css'
/*
    -select指定年份，过滤显示指定年份logs
*/

export default function Logs({ logs, deleteLog }) {
    const [logsYear, setLogsYear] = useState(2022)
    const filterLogsData = logs.filter(log => log.date.getFullYear() === logsYear)
    let logsData = filterLogsData.map((data) => <Item key={data.id} {...data} deleteLog={deleteLog} />)
    if (logsData.length === 0) {
        logsData = <h2 className="no-logs">{logsYear}没有日志！请添加</h2>
    }
    const selectYearHandler = (e) => {
        setLogsYear(+e.target.value)
    }
    return (
        <Card className="logs">
            <LogsFilter year={logsYear} selectYearHandler={selectYearHandler} />
            {logsData}
        </Card>
    )
}