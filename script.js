function myFunction() {

  const teamCalendarId = 'this is target calendr ID'
  const teamCalendar = CalendarApp.getCalendarById(teamCalendarId)

  var today = new Date();


  const option = {
    description: 'event discription',
  }

  var title = ''
  var toban = ''
  var tobanCnt = 0
  var tobanList = ['NAME1', 'NAME2', 'NAME3']

  const n = 100;
  //�@��������n����܂œ����
  for (let i = 0; i < n; i++) {
    today.setDate(today.getDate()+1)
    if(isBusinessDay(today)){
      toban = tobanList[tobanCnt%tobanList.length]
      title = '���₢���킹����:' + toban
      teamCalendar.createAllDayEvent(title, today, option);
      tobanCnt += 1
    }
  }
}


function isBusinessDay(date){
  if (date.getDay() == 0 || date.getDay() == 6) {
    return false;
  }
  // �j���J�����_�[
  var calJa = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com');
  if(calJa.getEventsForDay(date).length > 0){
    return false;
  }
  return true;
}
