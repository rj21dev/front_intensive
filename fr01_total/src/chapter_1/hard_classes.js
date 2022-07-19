//@ts-check
import { Employee } from "./classes.js";

export class Company {
    /**
     * @param {string} companyName 
     * @param {Project[]} currentProjects 
     * @param {Project[]} completedProjects 
     * @param {{managers: Manager[], developers: BackendDeveloper[] & FrontendDeveloper[]}} staff 
     */
    constructor(companyName, currentProjects, completedProjects, staff) {
        /**@type {string} */
        this.companyName = companyName;

        /**@type {Project[]} */
        this.currentProjects = currentProjects;

        /**@type {Project[]} */
        this.completedProjects = completedProjects;

        /**@type {{managers: Manager[], developers: BackendDeveloper[] & FrontendDeveloper[]}} */
        this.staff = staff;
    }
    
    /**
     * @param {Manager | BackendDeveloper | FrontendDeveloper} member 
     */
    addNewCompanyMember(member) {
        if (this.companyName)
        member.changeCompany(this.companyName);
        if (member instanceof Manager) {
            this.staff.managers.push(member);
        } else {
            this.staff.developers.push(member);
        }
    }

    /**
     * @param {Project} project 
     */
    addProject(project) {
        this.currentProjects.push(project);
    }

    /**
     * @returns {number} number of all workers
     */
    getMembersQuantity() {
        return this.staff.managers.length + this.staff.developers.length;
    }

    /**
     * @param {Project} project 
     */
    completeProject(project) {
        this.currentProjects.filter(e => JSON.stringify(e) !== JSON.stringify(project));
        this.completedProjects.push(project);
        project.team.manager.projectQuantity--;
        project.team.developers.backend.forEach(e => e.projectQuantity--);
        project.team.developers.frontend.forEach(e => e.projectQuantity--);
    }
}

export class Project {
    /**
     * @param {string} projectName 
     * @param {string} minQualification 
     * @param {{manager: Manager, developers: {frontend: FrontendDeveloper[], backend: BackendDeveloper[]}}} team 
     */
    constructor(projectName, minQualification, team) {
        /**@type {string} */
        this.projectName = projectName;

        /**@type {string} */
        this.minQualification = minQualification;

        /**@type {{manager: Manager, developers: {frontend: FrontendDeveloper[], backend: BackendDeveloper[]}}} */
        this.team = team;
    }

    completeProject() {
        // could be either implemented in Company class, or introduced new property
    }

    /**@param {BackendDeveloper | FrontendDeveloper} member */
    addNewProjectMember(member) {
        if ((this.team.manager.checkMember('L1', member)) &&
            (this.team.manager.company === member.company)) {
            if (member instanceof BackendDeveloper) this.team.developers.backend.push(member);
            if (member instanceof FrontendDeveloper) this.team.developers.frontend.push(member);
        }
    }
}
export class Manager extends Employee {
    /**
     * @param {string} name 
     * @param {string} grade 
     * @param {string[]} hardSkills 
     * @param {string} company 
     * @param {number} projectQuantity
     */
    constructor(name, grade, hardSkills, company, projectQuantity) {
        super(name, grade, hardSkills, company);
        /**@type {number} */
        this.projectQuantity = projectQuantity;
    }

    /**
     * @param {string} minQuality
     * @param {BackendDeveloper | FrontendDeveloper} member
     */
    checkMember(minQuality, member) {
        if (member.grade >= minQuality) return true;
        return false;
    }
}

export class FrontendDeveloper extends Employee {
    /**
     * @param {string} name 
     * @param {string} grade 
     * @param {string[]} hardSkills 
     * @param {string} company 
     * @param {number} projectQuantity
     * @param {string[]} stack
     */
     constructor(name, grade, hardSkills, company, projectQuantity, stack) {
        super(name, grade, hardSkills, company);
        /**@type {number} */
        this.projectQuantity = projectQuantity;

        /**@type {string[]} */
        this.stack = stack;

        /**@type {string} */
        this.developerSide = "frontend";
    }

    /**@param {string} someTech */
    expandStack(someTech) {
        this.stack.push(someTech);
    }
}

export class BackendDeveloper extends Employee {
    /**
     * @param {string} name 
     * @param {string} grade 
     * @param {string[]} hardSkills 
     * @param {string} company 
     * @param {number} projectQuantity
     * @param {string[]} stack
     */
     constructor(name, grade, hardSkills, company, projectQuantity, stack) {
        super(name, grade, hardSkills, company);
        /**@type {number} */
        this.projectQuantity = projectQuantity;

        /**@type {string[]} */
        this.stack = stack;

        /**@type {string} */
        this.developerSide = "backend";
    }

    /**@param {string} someTech */
    expandStack(someTech) {
        this.stack.push(someTech);
    }
}
