export function timeConverter(UNIX_timestamp){
    const correctTime = UNIX_timestamp/1000;
    const a = new Date(correctTime * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours() - 12;
    const AMPM = a.getHours() > 12 ? `PM` : `AM`;
    const min = a.getMinutes();
    const time = `${month} ${date} ${year} at ${hour}:${min} ${AMPM}`
    return time;
  }