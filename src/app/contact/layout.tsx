import BootstrapClient from '@/components/BootstrapClient';

export default function ContactLayout({
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
