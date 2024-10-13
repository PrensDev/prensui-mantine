import { UnstyledButton } from "@mantine/core";

export default function SidebarLinkGroup(props: SidebarLinkGroupProps) {
	return (
		<UnstyledButton w="100%" p="md">
			{props.label}
		</UnstyledButton>
	)
}

export interface SidebarLinkGroupProps {
	label: string;
	link?: string;
	links?: SidebarLinkGroupProps[];
}