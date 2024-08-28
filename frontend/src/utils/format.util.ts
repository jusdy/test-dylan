export function formattedDate(date:Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}.${month}.${year}`;
}
export function formattedTime(date:Date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds =String(date.getSeconds()).padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}`;
}

export function formattedTxID (tx:string) {
  if(tx.length < 8) return tx;
  return `${tx.slice(0,5)}...${tx.slice(-3)}`
}