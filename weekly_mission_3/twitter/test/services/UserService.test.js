const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "hpoggi", "Hector")
        expect(user.username).toBe("hpoggi")
        expect(user.name).toBe("Hector")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

})
