import { ActionIcon, Indicator, Tooltip } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";

export default function NotificationsButton() {
  return (
    <Tooltip label="Notifications">
      <Indicator label="99+" size={16}>
        <ActionIcon variant="default" size="lg" radius={99}>
          <IconBell size={16} />
        </ActionIcon>
      </Indicator>
    </Tooltip>
  )
}