const UserView = require('./../../app/views/UserView')

describe("Tests for UserView", () => {

    test("1) Return an error object when trying to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    })

    test("2) Return an error object when trying to create a new user with a payload with invalid properties", () => {
        //fail test 
		//const payload = {username: "hi", name: 12, id: "id"}
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("3) Return an error object when trying to create a new user with a payload with missing properties", () => {
        //fail test 
		//const payload = {username: "hi", name: 12, id: "id"}
        const payload = {username: "username"}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("4) Create a user by a given valid payload", () => {
        //fail test 
        //const payload = {username: "username", id:13, name:"name"}
        const payload = {username: "username", id:12, name:"name"}
        const result = UserView.createUser(payload)
		console.log(result)
		expect(result.name).toBe("name")
		expect(result.username).toBe("username")
		expect(result.id).toBe(12)

    })

})

