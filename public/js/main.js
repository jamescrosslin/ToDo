const deleteButton = document.querySelectorAll('#delete-button')

/* This incomplete version of delete is based on the Zellwk tutorial. I did not finish writing it yet

deleteButton.addEventListener('click', _=> {
    fetch()
})
*/

// This was my attempt at using Leon's code from rap-names-express. I Haven't been able to get it to work yet.

Array.from(deleteButton).forEach((element) => {
    element.addEventListener('click', deleteTask)
})

async function deleteTask() {
    const tTask = this.parentNode.childNodes[1].innerText

    try {
        const response = await fetch('deleteTask', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'taskS' : tTask
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

