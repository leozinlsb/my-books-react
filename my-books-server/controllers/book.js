function getBooks (req, res){
    try{
        res.send("Você fez uma requisição do tipo GET")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBooks (req, res){
    res.send('Você fez uma requisição do tipo POST')
}

function patchBooks (req, res){
    res.send('Você fez uma requisição do tipo PATCH')
}

function deleteBooks (req, res){
    res.send('Você fez uma requisição do tipo DELETE')
}

module.exports = {
    getBooks,
    postBooks,
    patchBooks,
    deleteBooks
}