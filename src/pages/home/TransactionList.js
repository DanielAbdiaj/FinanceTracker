
//styles 
import styles from './Home.module.css';
import { useFirestore } from '../../hooks/useFirestore';



export default function TransactionList({transactions}) {

    const {deleteDocument,response}=useFirestore('transactions');
    
    const totalTransaction= transactions.reduce(
      (total,currentTransaction) =>  
      total = total + parseFloat(currentTransaction.amount), 0 
      );


  return (
   
    <ul className={styles.transactions}>

    <p className={styles.amount}>Total money spend : ${totalTransaction}</p>

        {transactions.map((transaction)=>(
            <li key={transaction.id}>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>${transaction.amount}</p>
                <button onClick={()=> deleteDocument(transaction.id)}>x</button>
            </li>

        ))}
    </ul>
  )
}
