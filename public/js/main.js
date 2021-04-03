const deleteButton = document.querySelectorAll('.delete-button')

///////////BASED ON MONGODB'S TUTORIAL///////////////////
/*
async function deleteTask(client, nameOfListing) {
    const result = await MongoClient.db("todo").collection("tasks")
            .deleteOne({ name: task });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
*/

//////////BASED ON MY COMPLETED ZELLWK CRUD TUTORIAL///////
/*
deleteButton.addEventListener('click', _=> {
    const tTask = this.parentNode.childNodes[1].innerText

    fetch('/addTask', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            taskName: tTask
        })
    })
})
*/


//////////////////BASED ON LEON'S CODE  ////////////////////////////////
// I can't see the error

Array.from(deleteButton).forEach((element) => {
    element.addEventListener('click', deleteTask)
})

// ^^^ the above looks good

async function deleteTask() {
    const tTask = this.parentNode.childNodes[1].innerText

    try {
        const response = await fetch('deleteTask', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                task : tTask
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

