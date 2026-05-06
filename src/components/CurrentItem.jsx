const CurrentItem = (props) => {
    const { title, amount } = props;
    const amountClass = amount >= 0 ? "income" : "expense";
    
    return (
        <div className="current-item">
            <div className="title">{title}</div>
            <div className={`amount ${amountClass}`}>${Math.abs(amount)}</div>
        </div>
    );
};

export default CurrentItem;
