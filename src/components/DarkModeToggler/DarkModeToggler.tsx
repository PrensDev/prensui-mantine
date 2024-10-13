import { ActionIcon, Tooltip } from "@mantine/core";
import { IconMoon2 } from "@tabler/icons-react";

export default function DarkModeToggler() {
  return (
    <Tooltip label="Toggle Dark Mode">
      <ActionIcon variant="default" size="lg" radius={99}>
        <IconMoon2 size={16} />
      </ActionIcon>
    </Tooltip>
  )
}