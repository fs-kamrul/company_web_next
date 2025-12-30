import BootstrapClient from '@/components/BootstrapClient';

export default function LaravelWebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BootstrapClient />
            {children}
        </>
    );
}
