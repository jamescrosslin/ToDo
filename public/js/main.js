const deleteButton = document.querySelectorAll('.delete-button')

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
                taskName : tTask
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

