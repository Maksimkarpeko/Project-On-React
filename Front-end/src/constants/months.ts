export const months = Array.from({length:12},(_,i)=>{
  const data = new Date(2025,i,1);
  const monthStr = String(data.getMonth() + 1).padStart(2,'0');
  return {value:monthStr, label: monthStr}
})