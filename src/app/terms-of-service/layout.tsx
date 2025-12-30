import BootstrapClient from '@/components/BootstrapClient';

export default function TermsLayout({
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
