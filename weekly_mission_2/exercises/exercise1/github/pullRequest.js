const pullRequest = {
    title: "pullRequest1",
    branchName: "main",
    dateCreated: "2013-10-21T13:28:06.419Z",
    status: "Open",
    repositoryNameAssociated: "Repositorio1",
    getStatus: function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return this.title;
    }
}

console.log()