export const useEditorContent = () => {

       
    const editorContent = ref(""); 
    
    onMounted ( () => {
        const saved = localStorage.getItem('journal-entry');
    if(saved) {
        editorContent.value = saved
    }   
});

function saveEntry() {
    localStorage.setItem('journal-entry', editorContent.value)
    alert('saved!')
}

return {
    editorContent,
    saveEntry
}

}