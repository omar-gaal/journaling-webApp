import type { Entry } from "~/types/entry";
import { Title } from '../../../.nuxt/components';


export default defineEventHandler(async (event) => {
    
    try {
        const entries = await $fetch<Entry[]>("http://localhost:5001/entry");
        
        const titlesWithIds = entries.map(entry => ({
            _id: entry._id,
            title: entry.title
        }));
        return titlesWithIds;
        
    } catch (error) {
        console.log("Failed to fetch titles:", error)
        return { error: "Failed to fetch titles"};
    }
})
