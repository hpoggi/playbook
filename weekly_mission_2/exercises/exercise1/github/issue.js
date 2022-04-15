
const issue = {
    title: "Issue 1",
    repositoryNameAssociated: "Repositorio 1",
    status: "Open",
    numberOfComments: 4,
    labels: ["label1", "label2", "label3"],
    author: "Author",
    dateCreated: "2013-10-21T13:28:06.419Z",
    lastUpdated: "2013-10-21T13:28:06.419Z",
    getTitleAndAuthor: function(){
        return this.title + this.author;
    },
    getGeneralInfo: function(){
        return `This issue ${this.name} was created by ${this.author}`
    }
    
}

console.log("Titulo del issue:" + issue.title)
console.log("Numero de comentarios: " + issue.numberOfComments);
console.log(issue.getGeneralInfo())