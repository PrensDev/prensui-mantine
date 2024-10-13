"use client";

import { ActionIcon, TextInput } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function SearchInput({
    clearable = true
}: Readonly<SearchInputProps>) {
    const [query, setQuery] = useState("");

    return (
        <TextInput
            placeholder="Search"
            value={query}
            leftSection={<IconSearch size={16} />}
            rightSection={(
                <>
                    {clearable && query && (
                        <ActionIcon
                            variant="transparent"
                            color="gray"
                            onClick={() => { setQuery("") }}
                        >
                            <IconX size={12} />
                        </ActionIcon>
                    )}
                </>
            )}
            onChange={(event) => { setQuery(event.target.value) }}
        />
    )
}

interface SearchInputProps {
    clearable?: boolean;
}