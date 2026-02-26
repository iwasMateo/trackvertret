const date = new Date();
let year = date.getFullYear() % 100;
let month = date.getMonth();
if (month<10) {
  month = `0${month}`;
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
    let currentURL = `https://ceciliengymnasium.de/attachments/article/1372/Vertretungsplan_${day+i}.${month}.20${year}.pdf`;
    //console.log(currentURL);
    //const proxyUrl = `https://api.allorigins.win{encodeURIComponent(currentURL)}`;
    //if (await linkGood(pro)) {
      container.insertAdjacentHTML('beforeend', `<div><p><a href='${currentURL}'>Vertretungsplan_${day+i}-${month}-${year}</a></p></div><br>`);
    //} else {
    //  continue;
    //}
  }
}
doshit()
