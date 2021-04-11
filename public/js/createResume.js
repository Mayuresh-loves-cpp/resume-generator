var list = document.getElementById("eduInfoList");
// console.log(list);
var value = 1;
var value1 = 1;

var addSchoolBtn = document.getElementById("addSchool");

addSchoolBtn.addEventListener('click', () => {
    console.log('after clicking add button');
    var oldLiStr = 'eduInfo' + value.toString();
    const oldLi = document.getElementById(oldLiStr);
    // oldLi.appendChild(document.createElement('p'));
    value += 1;
    const schoolLable = document.createElement("label");
    schoolLable.appendChild(document.createTextNode("University Name"));
    const school = document.createElement("input");
    school.type = 'text';
    const degLable = document.createElement("label");
    degLable.id = 'edudeg';
    degLable.appendChild(document.createTextNode("Degree"));
    const degree = document.createElement("input");
    degree.type = 'text';
    const schoolDiv = document.createElement('div');
    schoolDiv.className = 'eduInfoNew';
    schoolDiv.appendChild(schoolLable);
    schoolDiv.appendChild(school);
    schoolDiv.appendChild(document.createElement('p'));
    schoolDiv.appendChild(degLable);
    schoolDiv.appendChild(degree);
    const degDateLable = document.createElement('label');
    degDateLable.appendChild(document.createTextNode('When you recived your Degree'));
    const degInput = document.createElement('input');
    degInput.type = 'date';
    degInput.id = 'degYear';
    const degDiv = document.createElement('div');
    degDiv.className = 'eduInfo';
    degDiv.id = 'degYearid';
    degDiv.appendChild(degDateLable);
    degDiv.appendChild(degInput);
    const newLi = document.createElement('li');
    newLi.id = 'eduInfo' + value.toString();
    newLi.appendChild(schoolDiv);
    newLi.appendChild(degDiv);
    // console.log(schoolLable);
    // console.log(school);
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
    const workExpLiDiv = document.createElement('div');
    workExpLiDiv.className = 'workExp';
    workExpLiDiv.appendChild(organizationLable);
    workExpLiDiv.appendChild(organizationInput);
    workExpLiDiv.appendChild(document.createElement('p'));
    workExpLiDiv.appendChild(positionLable);
    workExpLiDiv.appendChild(positionInput);
    workExpLiDiv.appendChild(document.createElement('p'));
    workExpLiDiv.appendChild(fromDateLable);
    workExpLiDiv.appendChild(fromDate);
    workExpLiDiv.appendChild(document.createElement('p'));
    workExpLiDiv.appendChild(tillDateLable);
    workExpLiDiv.appendChild(tilldate);
    const workExpLi = document.createElement('li');
    workExpLi.id = 'workExpEle' + value1.toString();
    workExpLi.appendChild(workExpLiDiv);
    const workExpList = document.getElementById('workExpList');
    workExpList.appendChild(workExpLi);
})

var removeWorkExpBtn = document.getElementById('removeWork');

removeWorkExpBtn.addEventListener('click', () => {
    if (value1 > 1) {
        var lastEleId = 'workExpEle' + value1.toString();
        var lastEle = document.getElementById(lastEleId);
        var list = document.getElementById('workExpList');
        list.removeChild(lastEle);
        value1 -= 1;
    }
})

var removeSchoolBtn = document.getElementById('removeSchool');

removeSchoolBtn.addEventListener('click', () => {
    if (value > 1) {
        var lastEleId = 'eduInfo' + value.toString();
        var lastEle = document.getElementById(lastEleId);
        var list = document.getElementById('eduInfoList');
        list.removeChild(lastEle);
        value -= 1;
    }
})