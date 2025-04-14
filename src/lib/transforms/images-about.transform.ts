import type { ImageAbout } from "$models/images-about";
import type { Lov }         from "$models/profile-lov";


export const transformImageAbout = ( lov: Lov ): ImageAbout[] => 
    lov.lov_vals.map( lovVal => ({
        id      : lovVal.id,
        title   : lovVal.description,
        url     : lovVal.comment,
    }));
