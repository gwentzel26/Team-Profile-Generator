class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role
}
generateHTMLCard(extra){
    return `
    <div class="card">
        <div class="top">
            <h2>${this.name}</h2>
            <h3>${this.role}</h3>
        </div>
        <div class="bottom">
            <ul>
                <li>ID: ${this.id}</li>
                <li>Email: ${this.email}</li>
                ${this.role === "Manager" ? 
                `<li>Office Number: ${extra}</li>` : 
                this.role === "Engineer" ? 
                `<li><a href="https://github.com/${extra}" target = "_blank_">Github Account: ${extra}</a></li>` : 
                `<li>Alma Mater: ${extra}</li>`
            }
            </ul>
        </div>
    </div>
    `
}
}

module.exports = Employee;