import Date from '../Date'
import Content from '../Content'
import Card from '../UI/Card/index'
import './index.css'

export default function Item({ id, date, desc, time, deleteLog }) {

    const deleteItemHandler = (logId) => {
        const isDelete = window.confirm('确定删除？')
        //调用App传入的删除函数,根据当前item的key删
        if (isDelete) {
            deleteLog(logId)
        }
    }
    return (
        <Card className="item">
            <Date date={date} />
            <Content content={{ desc, time }} />
            <div onClick={() => { deleteItemHandler(id) }}>
                <div className="delete">x</div>
            </div>
        </Card>
    )
}