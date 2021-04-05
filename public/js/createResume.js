var list = document.getElementById("eduInfoList");
var value = 1;
var value1 = 1;

var addSchoolBtn = document.getElementById("addSchool");
addSchoolBtn.addEventListener('click', () => {
    console.log('after clicking add button');
    var oldLiStr = 'eduInfo' + value.toString();
    const oldLi = document.getElementById(oldLiStr);
    oldLi.appendChild(document.createElement('p'));
    value += 1;
    const newLi = document.createElement('li');
    newLi.id = 'eduInfo' + value.toString();
    const schoolLable = document.createElement("label");
    schoolLable.appendChild(document.createTextNode("University Name"));
    const school = document.createElement("input");
    school.type = 'text';
    const degLable = document.createElement("label");
    degLable.id = 'edudeg';
    degLable.appendChild(document.createTextNode("Degree"));
    const degree = document.createElement("input");
    degree.type = 'text';
    newLi.appendChild(schoolLable);
    newLi.appendChild(school);
    newLi.appendChild(document.createElement('p'));
    newLi.appendChild(degLable);
    newLi.appendChild(degree);
    console.log(schoolLable);
    console.log(school);
    list.appendChild(newLi);

})

var addWorkExpBtn = document.getElementById("addWork");

addWorkExpBtn.addEventListener('click', () => {
    console.log("clicked in add work exp button");
    const oldEle = document.getElementById('workExpEle' + value1.toString());
    oldEle.appendChild(document.createElement('p'));
    value1 += 1;
    const organizationLable = document.createElement('label');
    organizationLable.appendChild(document.createTextNode('Organization'));
    const organizationInput = document.createElement('input');
    organizationInput.type = 'text';
    const positionLable = document.createElement('label');
    positionLable.id = 'positionLable';
    positionLable.appendChild(document.createTextNode('Position'));
    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    const fromDateLable = document.createElement('label');
    fromDateLable.appendChild(document.createTextNode('From'));
    const fromDate = document.createElement('input');
    fromDate.type = 'date';
    const tillDateLable = document.createElement('label');
    tillDateLable.appendChild(document.createTextNode('Till'));
    const tilldate = document.createElement('input');
    tilldate.type = 'date';
    const workExpLi = document.createElement('li');
    workExpLi.id = 'workExpEle' + value1.toString();
    const workExpList = document.getElementById('workExpList');
    workExpLi.appendChild(organizationLable);
    workExpLi.appendChild(organizationInput);
    workExpLi.appendChild(document.createElement('p'));
    workExpLi.appendChild(positionLable);
    workExpLi.appendChild(positionInput);
    workExpLi.appendChild(document.createElement('p'));
    workExpLi.appendChild(fromDateLable);
    workExpLi.appendChild(fromDate);
    workExpLi.appendChild(document.createElement('p'));
    workExpLi.appendChild(tillDateLable);
    workExpLi.appendChild(tilldate);
    workExpList.appendChild(workExpLi);
})