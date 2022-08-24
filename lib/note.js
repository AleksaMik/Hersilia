const fs = require('fs');
const path = require ('path');

function newNote(body,noteArray) {
    const note = body;
    noteArray.push(note);

    fs.writeFileSync(
        path.join(_dirname, '..db/db.json'),
        JSON.stringify({
            notes: noteArray
        }, null, 2)
    )
    return note;
};