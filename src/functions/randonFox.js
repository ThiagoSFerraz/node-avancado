const fetch = require('node-fetch')

module.exports = async function randonFox(){
    const response = await fetch(`https://randomfox.ca/floof/?ref=apilist.fun`)
    const json = await response.json()

    return json
}

