

import type { UmbracoContentItem } from '~/types';

export const useUmbracoData = () => {
    const apiUrl = 'http://localhost:35865/umbraco/delivery/api/v2/content/item';

    const {data: umbracoData, pending, error, refresh} = useFetch<UmbracoContentItem>(apiUrl);

    return {
        umbracoData,
        pending, 
        error,
        refresh
    };

}