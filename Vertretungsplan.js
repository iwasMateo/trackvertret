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
  for (i=0; i<5; i++) {
    console.log(i);
    //console.log(currentURL);
    //https://ceciliengymnasium.de/attachments/article/1372/Vertretungsplan_26.01.2026.pdf
    //const proxyUrl = `https://api.allorigins.win{encodeURIComponent(currentURL)}`;
    //if (await linkGood(pro)) {
    console.log(month);
    let weekday = new Date((date.getFullYear()%100)+2000, date.getMonth(), day)
    weekday.setDate(weekday.getDate()+i)
    console.log(weekday);
    let tempmonth = weekday.getMonth()
    if (tempmonth < 10) {
      tempmonth = `0${tempmonth+1}`
    }
    let currentURL = `https://ceciliengymnasium.de/attachments/article/1512/Vertretungsplan_${weekday.getDate()}.${tempmonth}.20${weekday.getFullYear%100}.pdf`;
    if (weekday.getDay() <6) {
      container.insertAdjacentHTML('beforeend', `<div><p><a href='${currentURL}'>Vertretungsplan ${weekday.getDate()}-${month}-${year}</a></p></div><br>`);
    } else {
      console.log("The day was "+weekday.getDay());
    }
      //} else {
    //  continue;
    //}
  }
}
doshit()
