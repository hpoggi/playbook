const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "hpoggi", "Hector")
        expect(user.username).toBe("hpoggi")
        expect(user.name).toBe("Hector")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "hpoggi", "Hector")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("hpoggi")
        expect(userInfoInList[2]).toBe("Hector")
        expect(userInfoInList[3]).toBe("Sin bio")
    })


})
