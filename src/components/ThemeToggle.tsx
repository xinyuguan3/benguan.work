import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">("dark")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setTheme(isDarkMode ? "dark" : "light")
  }, [])

  React.useEffect(() => {
    const root = document.documentElement
    
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      root.classList.toggle("dark", systemPrefersDark)
    } else {
      root.classList.toggle("dark", theme === "dark")
    }
  }, [theme])

  // 在组件挂载时设置为深色模式
  React.useEffect(() => {
    document.documentElement.classList.add("dark")
    setTheme("light")
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">切换主题</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          浅色
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          深色
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          系统
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 