//#1 and #2
let json = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
      {
        "firstName": "Sam",
        "department": "tech",
        "designation": "manager",
        "salary": 40000,
        "raise eligible": true,
      },
      {
        "firstName": "Mary",
        "department": "finance",
        "designation": "trainee",
        "salary": 18500,
        "raise eligible": true,
      },
      {
        "firstName": "Bill",
        "department": "HR",
        "designation": "executive",
        "salary": 21200,
        "raise eligible": false,
      }
    ]
  };

  console.log(json); //print initial JSON for #1 and #2 to console

//#3
  const newemployee = {
    "firstName": "Anna",
    "department": "tech",
    "designation": "executive",
    "salary": 25600,
    "raise eligible": false,
  };

  json["employees"].push(newemployee);  

  console.log(json); //print updated JSON to console for #3
  
  //#4
  let total = 0;
  for (let i = 0; i < 4; i++) { 
    total += json.employees[i].salary
  }
  console.log(total);

//#5
let newSalary = 0
for(let i = 0; i < 4; i++) {
  if (json.employees.raiseEligible === true){
    newSalary = json.employees.salary+(json.employees.salary*0.1)
    raiseEligible = false
  }
}
console.log(newSalary)

//#6
let workFromHome = ['Anna', 'Sam']

for (let name of workFromHome){
  for(let employees of json.employees){
    if(name === employees.firstName){
      employees.workFromHome = true;
      json.wfh.push(name);
      console.log(`${employees.firstName} works from home: ${employees.workFromHome}`);
    }
  }
}