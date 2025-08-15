import type { Entry } from "~/types/entry";


export default defineEventHandler(async (event) => {
    
    try {
        const entries = await $fetch<Entry[]>("http://localhost:5001/entry");
        const titles = entries.map(entries => entries.title);
        return titles;
    } catch (error) {
        console.log("Failed to fetch titles:", error)
        return { error: "Failed to fetch titles"};
    }
})
