
export default function LogsFilter(props) {
    return (
        <div>
            年份：<select value={props.year} onChange={props.selectYearHandler}>
                <option value="2022" >2022</option>
                <option value="2021" >2021</option>
                <option value="2020" >2020</option>
            </select>
        </div>
    )
}
