import { ref } from "vue";

interface NewEntryData {
    title: string;
    content: string;
}

export const useEditorContent = () => {
    
    const editorContent = ref("");

    async function saveEntry( entryData: NewEntryData) {
        console.log("Attempting to save entry:", entryData);


    // POST request to entry 
    try {
        const savedEntry = await $fetch("http://localhost:5001/entry", {
            method: "POST",
            body: entryData
        });
        console.log("Entry saved successfully:", saveEntry);

        editorContent.value = "";

        alert("Entry saved successfully!");
      } catch (error) {
        console.log("Failed to save entry:", error)
        alert("Failed to save entry. look at console for details.")
      }
    }
    return {
        editorContent,
        saveEntry
    }

}