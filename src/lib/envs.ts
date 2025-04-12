import { z } from 'zod';

const envSchema = z.object({
    VITE_PUBLIC_PROFILE_CV_URL : z.string().url(),
    VITE_PUBLIC_TOKEN       : z.string()
});

const parsed = envSchema.parse( import.meta.env );

export const ENVS = {
    PROFILE_CV  : parsed.VITE_PUBLIC_PROFILE_CV_URL,
    TOKEN       : parsed.VITE_PUBLIC_TOKEN
};
