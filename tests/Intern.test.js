const Intern = require("../lib/Intern");

describe("THIS IS TEST FOR INTERN CLASS ", ()=> {
    it("should have a school property when instantiated with the school parameter", ()=> {
        const name = "Gavin";
        const id = 10;
        const email = "Gavin@mail.com";
        const school = "Boston University";

        const emp = new Intern(name, id, email, school);
        expect(emp.school).toEqual(school);
    })

    it("Should return the school property when getschool method is invoked", ()=> {
        const name = "Gavin";
        const id = 10;
        const email = "Gavin@mail.com";
        const school = "Boston University";

        const emp = new Intern(name, id, email, school);
        expect(emp.getSchool()).toEqual(school);
    })

    it("Should return 'Intern' when the getRole method is invoked", ()=> {
        const name = "Gavin";
        const id = 10;
        const email = "Gavin@mail.com";
        const school = "Boston University";

        const emp = new Intern(name, id, email, school);
        expect(emp.getRole()).toEqual("Intern");
    })
})