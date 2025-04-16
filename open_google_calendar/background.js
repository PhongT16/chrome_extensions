site="https://calendar.google.com/calendar/u/0/r/week/"

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1); // months are 0-based
const day = String(today.getDate());
const formatted = `${year}/${month}/${day}`;

site="https://calendar.google.com/calendar/u/0/r/week/" + formatted
 
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: site });
});

