import { z } from 'zod';

const envSchema = z.object({
    VITE_PUBLIC_PROFILE_CV : z.string().url(),
    VITE_PUBLIC_TOKEN       : z.string(),
    VITE_PUBLIC_PROFILE_URL : z.string().url()
});

const parsed = envSchema.parse( import.meta.env );

export const ENVS = {
    PROFILE_CV  : parsed.VITE_PUBLIC_PROFILE_CV,
    PROFILE_URL : parsed.VITE_PUBLIC_PROFILE_URL,
    TOKEN       : parsed.VITE_PUBLIC_TOKEN
};
