"use client";

import {ThemeProvider as NextThemeProvider} from "next-themes";
import React from "react";

export default function ThemeProvider({children,...props}:React.ComponentProps<typeof NextThemeProvider>){

    return (
<NextThemeProvider>{children}</NextThemeProvider>
    )
}