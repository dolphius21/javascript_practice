const employeesRequest = new XMLHttpRequest();
employeesRequest.onreadystatechange = () => {
  if (employeesRequest.readyState === 4) {
    const employees = JSON.parse(employeesRequest.responseText);
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
employeesRequest.open('GET', 'employees.json');
employeesRequest.send();

const roomsRequest = new XMLHttpRequest();
roomsRequest.onreadystatechange = () => {
  if (roomsRequest.readyState === 4) {
    const rooms = JSON.parse(roomsRequest.responseText);
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
roomsRequest.open('GET', 'rooms.json');
roomsRequest.send();