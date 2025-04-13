import type { Lov } from "$models/profile-lov";
import type { Project } from "$models/project";

export const transformProject = ( lov: Lov ): Project[] => 
    lov.lov_vals.map( lovVal => ({
        id              : lovVal.id,
        title           : lovVal.description,
        description     : lovVal.comment,
        image           : lovVal.skill?.img ?? '',
        link            : lovVal.skill?.url ?? '',
        github          : lovVal.skill?.github ?? [],
        technologies    : lovVal.skill?.technologies ?? [],
        status          : lovVal.skill?.status ?? 'In Dev'
    }));