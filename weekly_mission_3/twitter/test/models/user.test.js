const User = require('./../../app/models/user')

describe('Unit Tests for User class', () => {

    test('Create a User object', () => {

        //Codigo a probar

        const user = new User(1, "hpoggi", "Hector", "Bio")


        //Validacion del codigo anterior

        expect(user.id).toBe(1)
        expect(user.usename).toBe("hpoggi")
        expect(user.name).toBe("Hector")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

    });
    
    test('Add getters', () => {
        const user = new User(1, "hpoggi", "Hector", "Bio")

        expect(user.getUsername).toBe('hpoggi')
        expect(user.getBio).toBe('Bio')
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });


})
