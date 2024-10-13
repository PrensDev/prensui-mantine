import { Anchor, Breadcrumbs, Stack, Title } from "@mantine/core";

const getBreadcrumbLinks = (links: DashboardHeaderBreadcrumbLink[]) => {
    return links.map(link => (
        <Anchor
            style={{ fontSize: 12 }}
            href={link.href}
            key={link.label}
        >{link.label}</Anchor>
    ));
}

export default function DashboardHeader({ headerLabel, breadcrumbLinks }: Readonly<DashboardHeaderProps>) {
    return (
        <Stack gap="xs">
            {breadcrumbLinks && <Breadcrumbs>{getBreadcrumbLinks(breadcrumbLinks)}</Breadcrumbs>}
            <Title order={2} fw={700}>{ headerLabel }</Title>
        </Stack>
    )
}


interface DashboardHeaderProps {
    headerLabel: string;
    breadcrumbLinks?: DashboardHeaderBreadcrumbLink[]
}

interface DashboardHeaderBreadcrumbLink {
    label: string;
    href: string;
}