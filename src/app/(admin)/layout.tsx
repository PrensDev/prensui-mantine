"use client";

import DarkModeToggler from "@/components/DarkModeToggler/DarkModeToggler";
import FullScreenToggler from "@/components/FullScreenToggler.tsx/FullScreenToggler";
import NotificationsButton from "@/components/NotificationsButton/NotificationsButton";
import SidebarLinkGroup, { SidebarLinkGroupProps } from "@/components/SidebarLinkGroup/SidebarLinkGroup";
import SidebarUserButton from "@/components/SidebarUserButton/SidebarUserButton";
import { AppShell, Avatar, Burger, Group, ScrollArea, Stack, ThemeIcon, Title } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { IconPhoto } from "@tabler/icons-react";


const sidebarLinkGroupData: SidebarLinkGroupProps[] = [
  {
    label: "Dashboards",
    links: [
      {
        label: "Dashboard 1",
        link: "/dashboard1"
      }, {
        label: "Dashboard 2",
        link: "/dashboard2"
      }
    ]
  }, {
    label: "Charts",
    link: "/chart"
  }, {
    label: "Table",
    link: "/table"
  }
]


export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [isSidebarOpen, sidebarOpenStateHandler] = useDisclosure();
  const sidebarLinkComponents = sidebarLinkGroupData.map(s => <SidebarLinkGroup {...s} key={s.label} />)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !isSidebarOpen } }}
    >
      <AppShell.Header>
        <Group justify="space-between" align="center" h="100%" px="md">
          <Group gap="xs">
            <Burger
              title="Toggle Navbar"
              opened={isSidebarOpen}
              hiddenFrom="sm"
              size="sm"
              onClick={sidebarOpenStateHandler.toggle}
            />
            <ThemeIcon>
              <IconPhoto style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
            <Title size={16}>PrensUI Mantine</Title>
          </Group>
          <Group gap="sm">
            <DarkModeToggler />
            <FullScreenToggler />
            <NotificationsButton />
            <Avatar
              src="https://randomuser.me/api/portraits/men/78.jpg"
              radius="xl"
              alt="Profile Picture"
              size="md"
            />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <AppShell.Section>
          <SidebarUserButton />
        </AppShell.Section>
        <AppShell.Section>
          <ScrollArea>
            {sidebarLinkComponents}
          </ScrollArea>
        </AppShell.Section>

      </AppShell.Navbar>

      <AppShell.Main style={{ background: "#f8f9fa" }}>
        <Stack p="md" gap="md">
          {children}
        </Stack>
      </AppShell.Main>
    </AppShell>
  )
}