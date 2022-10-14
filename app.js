const add = require('./add')
const read = require('./read')
const write = require('./write')

//get user input
const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {
    //build object 
    note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    //get old note value
    var oldnote = read()
    //add note to note.txt
    add(note, oldnote)
}

if(cmd[2]  == 'read') {
    // import present 
    const present = require('./present')

    present(read())
}
if (cmd[2] === "delete") {
  const id = cmd[3]
  const oldnote = read()
  const del = require ('./del')
  //delete an item from note array
  del(id,oldnote)
  console.log(read)
}