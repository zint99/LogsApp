import './index.css'

export default function Content({ content: { desc, time } }) {
    return (
        <div className="content">
            <h2 className="title">{desc}</h2>
            <div className="time">{time + 'mins'}</div>
        </div>
    )
}