const UserService = require('./../../services/UserService')

class UserView {
    static createUser(payload){
        if(payload===null){
            return {'error': 'payload no existe'}
        }

        for key in payload:
            if(payload[key] === null) 
                return {'error': 'necesitan tener un valor válido'}


    }
}

module.exports = UserView
