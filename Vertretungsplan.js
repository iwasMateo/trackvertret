const date = new Date();
let year = date.getFullYear() % 100;
let month = date.getMonth();
console.log(month);
if (month<10) {
  month = `0${month+1}`;
}
let day = date.getDate();
// async function linkGood(url) {
//  try {
//      const response = await fetch(url, { method: 'HEAD' });
//      //const isPdf = response.headers.get('content-type')?.includes('application/pdf');
//      if (response.ok) {
//        console.log("link was good");
//        return true;
//      } else {return false;}
//  } catch (error) {
//    console.log("error");
//      return false;
//  }
//}
function doshit() {
  const div = document.getElementById("container");
  for (i=0; i<3; i++) {
    console.log(i);
    let currentURL = `https://ceciliengymnasium.de/attachments/article/1512/Vertretungsplan_${day+i}.${month}.20${year}.pdf`;
    //console.log(currentURL);
    //https://ceciliengymnasium.de/attachments/article/1372/Vertretungsplan_26.01.2026.pdf
    //const proxyUrl = `https://api.allorigins.win{encodeURIComponent(currentURL)}`;
    //if (await linkGood(pro)) {
    console.log(month);
    let weekday = new Date((date.getFullYear()%100)+2000, date.getMonth(), day+i)
    console.log(weekday);
    if (weekday.getDay() <6) {
      container.insertAdjacentHTML('beforeend', `<div><p><a href='${currentURL}'>Vertretungsplan ${day+i}-${month}-${year}</a></p></div><br>`);
    } else {
      console.log("The day was "+weekday.getDay());
    }
      //} else {
    //  continue;
    //}
  }
}
doshit()
