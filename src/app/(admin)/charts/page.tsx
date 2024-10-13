import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";

export default function ChartsPage() {
    return (
        <DashboardHeader
            headerLabel="Charts"
            breadcrumbLinks={[
                { label: "Home", href: "/" },
                { label: "Charts", href: "/charts" },
            ]}
        />
    )
}