'use server';

import { signInFormSchema } from "../validators";
import { signIn , signOut } from "@/auth";
// import { isRedirectError } from "next/navigation";

// Sign in the user with provided credentials
export async function signInWithCrdentials(prevState: unknown, formData: FormData) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get("email"),
            password: formData.get("password"),
        });

        await signIn('credentials', user);

        return { success: true, message: 'Signed in successfully' };
    } catch (error) {
        // if (isRedirectError(error)) {
        //     throw error;
        // }
        
        // Check if it's a Next.js redirect error and re-throw it
        if (error && typeof error === 'object' && 'digest' in error && 
            typeof error.digest === 'string' && error.digest.startsWith('NEXT_REDIRECT')) {
            throw error;
        }

        return { success: false, message: (error as Error).message || 'Invalid email or password' };
    }
}

// Sign user out
export async function signOutUser() {
    try {
        await signOut();
        return { success: true, message: 'Signed out successfully' };
    } catch (error) {
        // if (isRedirectError(error)) {
        //     throw error;
        // }

        // Check if it's a Next.js redirect error and re-throw it
        if (error && typeof error === 'object' && 'digest' in error && 
            typeof error.digest === 'string' && error.digest.startsWith('NEXT_REDIRECT')) {
            throw error;
        }

        return { success: false, message: (error as Error).message || 'Sign out failed' };
    }
}   