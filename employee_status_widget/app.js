const employeesData = new XMLHttpRequest();
employeesData.onreadystatechange = () => {
  if (employeesData.readyState === 4) {
    const employees = JSON.parse(employeesData.responseText);
    const employeeListDiv = document.querySelector('#employeeList');
    let listHTML = `<ul class="bulleted">`;
    employees.forEach(employee => {
      if (employee.inoffice) {
        listHTML += `<li class="in">${employee.name}</li>`
      } else {
        listHTML += `<li class="out">${employee.name}</li>`
      }
    });
    listHTML += `</ul>`
    employeeListDiv.innerHTML = listHTML;
  }
};
employeesData.open('GET', 'employees.json');
employeesData.send();

const roomsData = new XMLHttpRequest();
roomsData.onreadystatechange = () => {
  if (roomsData.readyState === 4) {
    const rooms = JSON.parse(roomsData.responseText);
    const roomListDiv = document.querySelector('#roomList');
    let listHTML = `<ul class="bulleted">`;
    rooms.forEach(room => {
      if (room.available) {
        listHTML += `<li class="empty">${room.room}</li>`
      } else {
        listHTML += `<li class="full">${room.room}</li>`
      }
    });
    listHTML += `</ul>`
    roomListDiv.innerHTML = listHTML;
  }
};
roomsData.open('GET', 'rooms.json');
roomsData.send();