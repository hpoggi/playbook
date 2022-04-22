const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user){
        return Object.values(user)
    }

    static updateUserUsername(user, username){
        user.setUsername = username
    }

    static getAllUsernames(users){
        return users.map(user=>user.getUsername)
    }

}

module.exports = UserService
