import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full border-t bg-background/50 px-4 py-6 text-center text-sm text-muted-foreground">
            &copy; {currentYear} {APP_NAME}. All rights reserved.
        </footer>
    );
};

export default Footer;
