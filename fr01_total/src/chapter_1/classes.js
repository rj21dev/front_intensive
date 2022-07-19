//@ts-check
export class Employee {
    /**
     * 
     * @param {string} name 
     * @param {string} grade 
     * @param {string[]} hardSkills 
     * @param {string} company 
     */
    constructor(name, grade, hardSkills, company) {
        /**@type {string} */
        this.name = name;

        /**@type {string} */
        this.grade = grade;

        /**@type {string[]} */
        this.hardSkills = hardSkills;

        /**@type {string} */
        this.company = company;
    }

    /**
     * @param {string} newCompanyName 
     */
    changeCompany(newCompanyName) {
        this.company = newCompanyName;
    }

    /**
     * @param {string} newGradeName 
     */
    upGrade(newGradeName) {
        this.grade = newGradeName;
    }

    /**
     * @param {string} newSkillName 
     */
    addSkill(newSkillName) {
        this.hardSkills.push(newSkillName);
    }
}
