// base date values; keep numeric fields separate from formatted strings
const date = new Date();
// two‑digit year for the current date (used only as a fallback, each weekday
// will compute its own two‑digit year instead of reusing this value).
let year = date.getFullYear() % 100;
let day = date.getDate();
// keep the numeric month for calculating future dates; don't clobber it with
// a formatted string that will break `new Date(...)` calls.
let month = date.getMonth();
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
  const container = document.getElementById("container");

  const baseYear = date.getFullYear();
  const baseMonth = date.getMonth(); // 0‑based month number
  const baseDay = date.getDate();

  for (let i = 0; i < 5; i++) {
    let weekday = new Date(baseYear, baseMonth, baseDay + i);
    console.log(weekday);

    if (weekday.getDay() < 6) {
      let y2 = weekday.getFullYear() % 100;
      let m2 = weekday.getMonth() + 1;
      if (m2 < 10) m2 = `0${m2}`;
      let d2 = weekday.getDate();
      if (d2 < 10) d2 = `0${d2}`;

      let currentURL =
        `https://ceciliengymnasium.de/attachments/article/1512/` +
        `Vertretungsplan_${d2}.${m2}.20${y2}.pdf`;

      container.insertAdjacentHTML(
        'beforeend',
        `<div><p><a href="${currentURL}">Vertretungsplan ${d2}-${m2}-${y2}</a></p></div><br>`
      );
    } else {
      console.log("The day was " + weekday.getDay());
    }
  }
}
doshit()
