const repository = {
 name: "LaunchX",
 author: "hpoggi",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repositorio:" + repository.name)
console.log("Issues totales: " + repository.getTotalIssues())
console.log(repository.getGeneralInfo())