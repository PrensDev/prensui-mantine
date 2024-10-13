"use client";

import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import SearchInput from "@/components/SearchInput/SearchInput";
import { ActionIcon, Badge, Group, Tooltip } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from 'mantine-datatable';
import { useEffect, useState } from "react";

const columns: DataTableColumn[] = [
    {
        accessor: "nat"
    }, {
        accessor: "email"
    }, {
        accessor: "gender"
    }, {
        accessor: "cell",
        title: "Contact Number"
    }, {
        accessor: "status",
        render: () => {
            return (
                <Badge size="md">
                    Pending
                </Badge>
            )
        }
    }, {
        accessor: "actions",
        textAlign: "center",
        render: () => {
            return (
                <Tooltip label="More actions">
                    <ActionIcon variant="default" size="md">
                        <IconDots size={16} />
                    </ActionIcon>
                </Tooltip>
            )
        }
    }
]

export default function TablePage() {
    const [records, setRecords] = useState([]);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        fetch("https://randomuser.me/api/?results=100")
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                    console.log(response);
                    setRecords(response?.results || []);
                    setFetching(false);
                }, 2000);
            })
    }, [])

    return (
        <>
            <DashboardHeader
                headerLabel="Datatable"
                breadcrumbLinks={[
                    { label: "Home", href: "/" },
                    { label: "Datatable", href: "/table" },
                ]}
            />

            <Group>
                <Group>
                    <SearchInput />
                </Group>
            </Group>

            <DataTable
                withTableBorder
                withColumnBorders
                borderRadius="md"
                height={450}
                columns={columns}
                records={records}
                fetching={fetching}
                styles={{
                    header: {
                        background: "#e5e7eb",
                        color: "#52525b"
                    }
                }}
            />
        </>
    )
}