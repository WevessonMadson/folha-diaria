export default function getDailySheet() {
    const dataSheet = localStorage.getItem('dailySheet');
  
    let dailySheet = {};
    
    if (!dataSheet) {
        let date = new Date();
        let day = date.getDate();
  
        if (date.getHours() > 19) {
            day += 1;
        }
        
        dailySheet = {
          date: `${day}/${date.getMonth() > 10 ? date.getMonth() : "0" + date.getMonth()}/${date.getFullYear()}`,
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