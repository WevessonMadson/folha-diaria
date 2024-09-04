import moment from 'moment';

export default function getDailySheet() {
    const dataSheet = localStorage.getItem('dailySheet');
  
    let dailySheet = {};
    
    if (!dataSheet) {
      const date = moment();

      console.log(date);

      const newDate = date.isAfter(date.clone().hour(19), 'hour')
        ? date.add(1, 'day')
        : date;
        
        dailySheet = {
          date: newDate.format('DD/MM/YYYY'),
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