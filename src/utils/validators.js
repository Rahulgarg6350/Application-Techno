export function validateEmail(e){
  return /\S+@\S+\.\S+/.test(e);
}
export function validateNotEmpty(s){
  return typeof s === 'string' && s.trim().length>0;
}
