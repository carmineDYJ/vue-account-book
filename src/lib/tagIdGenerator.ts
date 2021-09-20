let id:number = parseInt(window.localStorage.getItem('tagMaxId')  || '0') || 0;

function generateId(){
  id ++;
  window.localStorage.setItem('tagMaxId', String(id));
  return id;
}

export default generateId;