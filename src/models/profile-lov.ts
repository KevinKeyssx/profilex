import type { GitHub } from "./project";

export type Skill = {
    img?            : string;
    url?            : string;
    technologies?   : string[];
    github?         : GitHub[];
    status?         : 'In Dev' | 'In Prod';
    issuer?         : string;
    date?           : string;
}

export type LovVal = {
    id          : number;
    description : string;
    comment     : string;
    active      : boolean;
    created_at  : string;
    lov_id      : number;
    skill       : Skill | null;
}


export type Lov = {
    id          : number;
    description : string;
    comment     : string;
    active      : boolean;
    created_at  : string;
    lov_vals    : LovVal[];
    skill       : Skill | null;
}


