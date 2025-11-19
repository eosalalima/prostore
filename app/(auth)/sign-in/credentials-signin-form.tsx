'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signInDefaultValues } from "@/lib/constants";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCrdentials } from "@/lib/actions/user.actions";

const CredentialsSignInForm = () => {
    const [data, action] = useActionState(signInWithCrdentials, {
        success: false,
        message: '',
    });

    const SignInButton = () => {
        const { pending } = useFormStatus();
        
        return (
            <Button                    
                className="w-full"
                variant="default"
                disabled={pending}
            >
                { pending ? 'Signing In...' : 'Sign In' }
            </Button>
        );  
    };

    return (<form action={action} method="POST">
        <div className="space-y-6">
            <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    defaultValue={signInDefaultValues.email}
                />  
            </div>

            <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    defaultValue={signInDefaultValues.password}
                />  
            </div>

            <div>
                <SignInButton />
            </div>

            { data && !data.success && (
                <div className="text-center text-destructive">
                    {data.message}
                </div>
            ) }

            <div className="text-sm text-center text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" target="_self" className="link">
                    Sign Up
                </Link>
            </div>
        </div>
    </form>);
};

export default CredentialsSignInForm;
