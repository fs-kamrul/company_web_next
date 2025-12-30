import BootstrapClient from '@/components/BootstrapClient';

export default function PrivacyPolicyLayout({
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
