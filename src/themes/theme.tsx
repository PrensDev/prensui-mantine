"use client";

import { createTheme, Menu, Tooltip } from "@mantine/core";

export const theme = createTheme({
    primaryColor: "violet",
    components: {
        Menu: Menu.extend({
            defaultProps: {
                offset: 4
            }
        }),
        Tooltip: Tooltip.extend({
            defaultProps: {
                offset: 4,
                color: "#495057",
                openDelay: 750
            },
            styles: {
                tooltip: {
                    fontSize: "12px"
                }
            }
        })
    }
})