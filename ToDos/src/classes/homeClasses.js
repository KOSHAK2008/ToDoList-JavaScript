class human {
    name = '';
    age = '';
    gender = '';

}

class employer extends human {
    firm = '';
    place = '';
    demand = '';

    salary(dollars) {
        console.log(`Pays ${dollars} dollars a week`);
    }

    workDay (online) {
        console.log(`Is online ${online} hours a day`);
    }
    
    recruitment() {
        console.log('Hiring after interview');
    }
}

 class engineer extends employer{
     education = '';
     experience = '';
     work = '';

     constructor(name, age, gender) {
                super();
                this.name = name;
                this.age = age;
                this.gender = gender;
            }

     timeWork(hours) {
        console.log(`Works ${hours} hours a day`);
    }

    solves(problem) {
        console.log(`Solvers ${problem} problems per day`);
    }
 }

 class tester extends employer {
    education = '';
    experience = '';
    work = '';
    timeWork(hours) {
        console.log(`Works ${hours} hours a day`);
    }

    constructor(know, reputation) {
        super();
        this.education = know.education;
        this.experience = reputation.experience;
    }

    salaryTester(dollar) {
        console.log(`Pays ${dollar} dollars a day`);
    }

 }

 console.dir(tester);
 console.dir(engineer);