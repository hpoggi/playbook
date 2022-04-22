const UserService = require('./../services/UserService')

class UserView {
    static createUser(payload){
        if(payload===null){
            return {'error': 'payload no existe'}
        }

		for (const value of Object.values(payload)){
		    if(value === null)
                return {'error': 'necesitan tener un valor válido'}
		}

		for (const key of ['id','username', 'name']){
		    if(!payload.hasOwnProperty(key))
                return {'error': 'necesitan tener un valor válido'}
		}

		return UserService.create(payload.id, payload.username, payload.name)



    }
}

module.exports = UserView
//funciona
