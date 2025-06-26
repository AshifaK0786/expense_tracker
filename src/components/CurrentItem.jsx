const CurrentItem=(props)=>{
    const {expense}=props;
return(
    <div>
        <div className="current-item">
            <div className="title">{props.title}</div>
            <div className="amount">{props.amount}</div>
        </div>
    </div>
)
}
export default CurrentItem;