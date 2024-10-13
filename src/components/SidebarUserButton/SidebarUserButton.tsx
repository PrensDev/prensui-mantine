import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";

export default function SidebarUserButton() {
  return (
    <UnstyledButton p="md">
      <Group>
        <Avatar
          src="https://randomuser.me/api/portraits/men/78.jpg"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm">PrensDev</Text>
          <Text size="xs" c="dimmed">prensdev@gmail.com</Text>
        </div>

      </Group>
    </UnstyledButton>
  )
}