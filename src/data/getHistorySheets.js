export default function getHistorySheets() {
    const dataHistorySheets = localStorage.getItem('historySheets');
  
    let historySheets = [];
    
    if (dataHistorySheets) {
      historySheets = JSON.parse(dataHistorySheets);
    }
  
    return historySheets;
}