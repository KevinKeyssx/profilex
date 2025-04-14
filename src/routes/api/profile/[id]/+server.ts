import { ENVS }                 from '$lib/envs';
import { HttpCodes }            from '$lib/enums/http.enum';
import { transformProject }     from '$lib/transforms/project.transform.js';
import { transformCertificate } from '$lib/transforms/certificate.transform';
import { transformImageAbout }  from '$lib/transforms/images-about.transform.js';


export const GET = async ({ params }): Promise<Response> => {
    try {
        const { id } = params;
        const url = `${ENVS.PROFILE_URL}${id}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-T': ENVS.TOKEN
            }
        });

        if ( !response.ok ) {
            return new Response(
                JSON.stringify({ 
                    error: 'Failed to fetch profile data',
                    status: response.status 
                }), 
                { 
                    status: response.status, 
                    headers: { 'Content-Type': 'application/json' } 
                }
            );
        }

        const data      = await response.json();
        const profile   = {
            '7': transformProject( data ),
            '6': transformCertificate( data ),
            '8': transformImageAbout( data )
        }[ id ]

        return new Response(
            JSON.stringify( profile ),
            { 
                status: HttpCodes.OK, 
                headers: { 'Content-Type': 'application/json' } 
            }
        );
    } catch (error: unknown) {
        console.error('Error fetching profile data:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return new Response(
            JSON.stringify({ 
                error: 'Internal server error', 
                message: errorMessage 
            }),
            { 
                status: HttpCodes.INTERNAL_SERVER_ERROR, 
                headers: { 'Content-Type': 'application/json' } 
            }
        );
    }
};
