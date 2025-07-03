

export type UmbracoRoute = {
    path: string;
};

export type UmbracoStartItem = {
    id: string;
    path: string;
};

export type HomeProperties = {
    title?: string;
    
};


export type GlobalSettingsProperties = {
    journalHeader?: string;
    saveButtonLabel?: string;
    newEntryLabel?: string; 
    allEntriesLabel?: string; 
    latestLabel?: string;     
};

export type UmbracoCultures = Record<string, unknown>;


export type UmbracoHomeContentItem = {
    contentType: string;
    name: string;
    createDate: string;
    updateDate: string;
    route: UmbracoRoute;
    startItem: UmbracoStartItem;
    properties: HomeProperties; // Use HomeProperties here
    cultures: UmbracoCultures;
};


export type UmbracoSettingsContentItem = {
    contentType: string;
    name: string;
    createDate: string;
    updateDate: string;
    route: UmbracoRoute;
    startItem?: UmbracoStartItem; 
    properties: GlobalSettingsProperties;
    cultures: UmbracoCultures;
};