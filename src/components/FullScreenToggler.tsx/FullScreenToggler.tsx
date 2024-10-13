"use client";

import { ActionIcon, Tooltip } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";

export default function FullScreenToggler() {
  const { fullscreen, toggle } = useFullscreen();

  return (
    <Tooltip label="Toggle Full Screen">
      <ActionIcon variant="default" size="lg" radius={99} onClick={toggle}>
        {fullscreen ? <IconArrowsMinimize size={16} /> : <IconArrowsMaximize size={16} />}
      </ActionIcon>
    </Tooltip>
  )
}