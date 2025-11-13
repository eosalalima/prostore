'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem, 
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    {theme === "light" ? <SunIcon /> : theme === "dark" ? <MoonIcon /> : <SunMoon />}
                </Button>
            </DropdownMenuTrigger>           
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    onClick={() => setTheme("light")}
                >
                    <SunIcon className="mr-2" /> Light
                </Button>
                <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    onClick={() => setTheme("dark")}
                >
                    <MoonIcon className="mr-2" /> Dark
                </Button>
                <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    onClick={() => setTheme("system")}
                >
                    <SunMoon className="mr-2" /> System
                </Button>
            </DropdownMenuContent>     
        </DropdownMenu>
    );
};

export default ModeToggle;