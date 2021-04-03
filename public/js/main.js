const deleteButton = document.querySelectorAll('.delete-button')

//// WAS BASED ON LEON'S RAPPER CODE, NOW BASED ON HIS TODO LIST CODE  ///

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

