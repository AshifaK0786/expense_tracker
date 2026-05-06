import CurrentItem from "./CurrentItem";

const BalanceContainer = (props) => {
    const { expense } = props;
    const incomeArr = expense.filter((item) => item.amount > 0);
    const expenseArr = expense.filter((item) => item.amount < 0);
    
    let income = 0;
    let expenses = 0;
    
    incomeArr.forEach((item) => {
        income += parseInt(item.amount);
    });
    
    expenseArr.forEach((item) => {
        expenses += parseInt(item.amount);
    });
    
    const balance = income + expenses;
    
    return (
        <div className="balance-container">
            <CurrentItem title="Income" amount={income} />
            <CurrentItem title="Expense" amount={expenses} />
            <CurrentItem title="Balance" amount={balance} />
        </div>
    );
};

export default BalanceContainer;
