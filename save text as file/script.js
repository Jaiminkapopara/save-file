const textarea = document.querySelector('textarea')
const fileNameInput = document.querySelector('.file-name input')
const selectMenu = document.querySelector('.save-as select')
const saveBtn = document.querySelector('.save-btn')

saveBtn.addEventListener('click', () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value})
    //URL.createObjectURL create a url that represent passed object
    const fileUrl = URL.createObjectURL(blob)
    const link = document.createElement('a') // creating <a> 
    link.download = fileNameInput.value // passing filename as download value of link
    link.href = fileUrl // passing fileUrl as href value of link
    link.click() // clicking link so the file download
})

selectMenu.addEventListener('click', () => {

    const selectedOption = selectMenu.options[selectMenu.selectedIndex].text.split(' ')[0]
    saveBtn.innerHTML = `Save As ${selectedOption} File`
})

