import BootstrapClient from '@/components/BootstrapClient';

export default function SchoolManagementLayout({
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
