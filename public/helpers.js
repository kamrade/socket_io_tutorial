function createMessage(value) {

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yy = today.getFullYear();
  let hh = today.getHours();
  let mi = today.getMinutes();
  let ss = today.getSeconds();
  let ms = today.getMilliseconds();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  let day  = `${mm}/${dd}/${yy}`;
  let time = `${hh}:${mi}:${ss},${ms}`;
  return `${day} ${time}: ${value}`;

}
