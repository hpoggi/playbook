const user = {
  username:"@hpoggi",
  name: "Hector Poggi",
  bio: "...",
  city: "CDMX",
  birthday: "01/01/2001",
  age: 19,
  follows: 89,
  followers: 37,

  getuserNameAndFollowers() {
      return `El nombre del usuario es ${this.username} y tiene ${this.followers} followers`
  },

  getName() {
      return `El propietario de la cuenta ${this.username} se llama ${this.name}`
  }

}

console.log(user.getName());
console.log(user.getUsernameAndFollowers());
