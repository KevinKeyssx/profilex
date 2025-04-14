import type { Certificate } from "$models/certificate";
import type { Lov }         from "$models/profile-lov";


export const transformCertificate = ( lov: Lov ): Certificate[] => 
    lov.lov_vals.map( lovVal => ({
        id              : lovVal.id,
        title           : lovVal.description.split(' - ' )[0],
        issuer          : lovVal.description.split(' - ' )[1],
        link            : lovVal.comment        ?? '',
        date            : lovVal.skill?.date    ?? '',
        description     : lovVal.skill?.description ?? '',
        teacher         : lovVal.skill?.teacher ?? '',
    }));
