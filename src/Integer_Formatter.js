   // # Intialising Integer_Formater 
 const Integer_Formater = new Intl.NumberFormat('en-us',{maximumFractionDigits :0})
// Function for a FormatOperand
export default function formatOperand(operand) {
  if(operand == null) return
  const[integer, decimal] = operand.split('.')
  if(decimal == null) return Integer_Formater.format(integer)
  return`${Integer_Formater.format(integer)}.${decimal}`
}