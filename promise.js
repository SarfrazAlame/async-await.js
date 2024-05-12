const cart = ["shoes", "pants", "kurta"]

const promise = createOrder(cart)

promise.then(function () {
    proceedToPayment(orderId)
})


// create promise
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // validate cart
        if (!validatedCart(cart)) {
            const err = new Error("Cart is not valid")
            reject()
        }
        // logic for createOrder

        const orderId = "12345"
        if (orderId) {
            resolve(orderId)
        }

    })

    return pr
}