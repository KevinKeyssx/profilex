export type Project = {
    id              : number;
    title           : string;
    description     : string;
    image           : string;
    link            : string;
    github          : GitHub[];
    technologies    : string[];
    status          : 'In Dev' | 'In Prod' | 'Beta';
};


export type GitHub = {
    stack   : string;
    url     : string;
}

