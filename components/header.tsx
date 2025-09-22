"use client"

import { Button } from "@/components/ui/button"
import { Palette, Home } from "lucide-react"

interface HeaderProps {
  onHomeClick?: () => void
  showHomeButton?: boolean
}

export function Header({ onHomeClick, showHomeButton = false }: HeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 flex items-center justify-center animate-pulse">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ColorProfile
            </span>
          </div>
          {showHomeButton && onHomeClick && (
            <Button variant="ghost" onClick={onHomeClick} size="sm" className="hover:scale-105 transition-transform">
              <Home className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
