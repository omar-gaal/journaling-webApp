


export type UmbracoRoute = {
    path: string;
   
};


export type UmbracoStartItem = {
    id: string;
    path: string;

};


export type UmbracoProperties = {
    title: string;
    helloWorld: string;



};


export type UmbracoCultures = Record<string, any>;


export type UmbracoContentItem = {
    contentType: string;
    name: string;
    createDate: string;
    updateDate: string;
    route: UmbracoRoute;
    startItem: UmbracoStartItem;
    properties: UmbracoProperties;
    cultures: UmbracoCultures;
};

