const functions = require('firebase-functions');
const axios = require('axios')

exports.tournamentCheck = functions.https.onCall(async (data, context) => {
    const API_KEY = process.env.API_KEY

    // try {
    //     var config = {
    //         method: 'get',
    //         url: 'https://apis.roblox.com/datastores/v1/universes/3016391154/standard-datastores/datastore/entries/entry?datastoreName=Tournaments&entryKey=1221',
    //         headers: { 
    //             'x-api-key': 'r1Pa3xbSOkiSYjLvyv7jhiAu+SMELmkK6LTwoVB+EwLVbu2i'
    //         }
    //     };

    //     const response = await axios(config)

    //     return {"response": response.data}
    // } catch (err) {
    //     console.error(err)

    //     return {"error": err}
    // }

    var url = `https://apis.roblox.com/datastores/v1/universes/3016391154/standard-datastores/datastore/entries/entry?datastoreName=Tournaments&entryKey=${data.code}`

    try {
        var config = {
            method: 'get',
            url: url,
            headers: { 
                'x-api-key': API_KEY
            }
        };

        const response = await axios(config)

        return {"response": response.data}
    } catch (err) {
        return {"error": err.message}
    }

    // var url = `https://apis.roblox.com/datastores/v1/universes/3016391154/standard-datastores/datastore/entries/entry?datastoreName=Tournaments&entryKey=${data.code}`

    // var config = {
    //     method: 'get',
    //     url: url,
    //     headers: { 
    //         'x-api-key': API_KEY
    //     }
    // };

    // await axios(config)
    //     .then((response) => {
    //         return {"response": JSON.stringify(response.data)}
    //     })
    //     .catch((error) => {
    //         return {"error": JSON.parse(error).message}
    //     })
});
