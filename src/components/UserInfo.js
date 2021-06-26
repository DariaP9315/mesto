export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this.name = document.querySelector(nameSelector);
        this.job = document.querySelector(jobSelector);
    }
    getUserInfo() {
        return [this.name.textContent, this.job.textContent];
    }
    setUserInfo(name, job) {
        this.name.textContent = name;
        this.job.textContent = job;
    }
  }
