var list = document.getElementById("eduInfoList");
console.log(list);
var value = 1;
var addBtn = document.getElementById("addSchool");
console.log(addBtn);
addBtn.addEventListener('click', () => {
    console.log('after clicking add button');
    console.log(value);
    var oldLiStr = 'eduInfo' + value.toString();
    console.log(oldLiStr);
    const oldLi = document.getElementById(oldLiStr);
    oldLi.appendChild(document.createElement('br'));
    oldLi.appendChild(document.createElement('br'));
    value = value + 1;
    const newLi = document.createElement('li');
    newLi.id = 'eduInfo' + value.toString();
    const schoolLable = document.createElement("label");
    schoolLable.appendChild(document.createTextNode("University Name"));
    const school = document.createElement("input");
    school.type = 'text';
    const degLable = document.createElement("label");
    degLable.appendChild(document.createTextNode("Degree"));
    const degree = document.createElement("input");
    degree.type = 'text';
    newLi.appendChild(schoolLable);
    newLi.appendChild(school);
    newLi.appendChild(document.createElement('br'));
    newLi.appendChild(document.createElement('br'));
    newLi.appendChild(degLable);
    newLi.appendChild(degree);
    console.log(schoolLable);
    console.log(school);
    list.appendChild(newLi);

})
// console.log(document.body);

console.log("running script")