const functions = {
    add: (a,b) => a+b,
    isNull: () => null,
    checkValue: (param) => param,
    createUser: () => {
        const user = {firstName: "brad"}
        user["lastName"] = "Dias"
        return user
    }

}

module.exports = functions