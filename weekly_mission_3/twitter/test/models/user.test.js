const User = require('./../../app/models/user')

describe('Unit Tests for User class', () => {

    test('Create a User object', () => {

        //Codigo a probar

        const user = new User(1, "hpoggi", "Hector", "Bio", "dateCreated", "lastUpdated")


        //Validacion del codigo anterior

        expect(user.id).toBe(1)
        expect(user.usename).toBe("hpoggi")
        expect(user.name).toBe("Hector")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")


    });
})

