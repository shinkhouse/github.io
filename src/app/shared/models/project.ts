export interface Project {
    name: string;
    description: string;
    url: string;
    sourceCode?: string;
    icon: string;
    date: string;
    tags: Tag[];
    image?: string;
    showProject: boolean;
}
export interface Tag {
    tag: string;
}
