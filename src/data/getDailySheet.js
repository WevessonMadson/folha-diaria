export default function getDailySheet() {
    const dataSheet = localStorage.getItem('dailySheet');
  
    let dailySheet = {};
    
    if (!dataSheet) {
        let date = new Date();
        let day = date.getDate();
        let month = (date.getMonth() + 1);
        let year = date.getFullYear();
        
        day = date.getHours() > 20 ? day + 1 : day;
        month = month > 10 ? month : "0" + month;
        
        dailySheet = {
          date: `${day}/${month}/${year}`,
          opened: true,
          createdAt: date,
          focus: '',
          priorities: [{ done: false, text: '' }, { done: false, text: '' }, { done: false, text: '' }, { done: false, text: '' }, { done: false, text: '' }],
          ignories: ['', '', ''],
          dayNote: '',
          todayLearnings: ['', '', '', '', ''],
          todayGratefull: ['', '', '']
        }
    } else {
      dailySheet = JSON.parse(dataSheet);
    }
  
    return dailySheet;
}