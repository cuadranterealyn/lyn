const fs = require('fs')
const del = function(id, oldnote) {
    const note = JSON.parse(oldnote)
    const newnote = note.filter(function(n,i) {
        return n.id !== id
    
    })
    fs.writeFileSync('note.txt',
    JSON.stringify(newnote))
}
module.exports = del 