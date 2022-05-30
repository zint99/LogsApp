import './index.css'

export default function Date({ date }) {
    const month = date.toLocaleDateString('zh-CN', {
        month: 'long'
    })
    const day = date.getDate()

    return (
        <div className="date">
            <div className="month">
                {month}
            </div>
            <div className="day">
                {day}
            </div>
        </div>
    )
}