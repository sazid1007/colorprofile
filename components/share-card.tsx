import { forwardRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { PersonalityType } from "@/lib/quiz-data"

interface ShareCardProps {
  username: string
  result: PersonalityType
}

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(({ username, result }, ref) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return {
          bg: "bg-gradient-to-br from-red-500 via-red-600 to-red-700",
          accent: "bg-red-500",
          light: "bg-red-50",
          textColor: "text-red-600",
        }
      case "yellow":
        return {
          bg: "bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500",
          accent: "bg-yellow-500",
          light: "bg-yellow-50",
          textColor: "text-yellow-600",
        }
      case "green":
        return {
          bg: "bg-gradient-to-br from-green-500 via-green-600 to-emerald-600",
          accent: "bg-green-500",
          light: "bg-green-50",
          textColor: "text-green-600",
        }
      case "blue":
        return {
          bg: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600",
          accent: "bg-blue-500",
          light: "bg-blue-50",
          textColor: "text-blue-600",
        }
      default:
        return {
          bg: "bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700",
          accent: "bg-gray-500",
          light: "bg-gray-50",
          textColor: "text-gray-600",
        }
    }
  }

  const colorClasses = getColorClasses(result.color)

  return (
    <div 
      ref={ref} 
      className="w-[1080px] h-[1080px] bg-white relative overflow-hidden flex flex-col"
      style={{ 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${colorClasses.bg}`}></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-40 -translate-x-40"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-16">
        
        {/* Header with Person Name */}
        <div className="text-center mb-12">
          <h1 className="text-8xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            {username}
          </h1>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <div className={`w-12 h-12 rounded-full ${colorClasses.accent}`}></div>
            </div>
            <h2 className="text-6xl font-black text-white tracking-tight drop-shadow-lg">
              ColorProfile
            </h2>
          </div>
          <div className="w-40 h-2 bg-white/80 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl w-full">
            <CardContent className="p-10 text-center">
              
              {/* Personality Type Section */}
              <div className="mb-8">
                <div className={`w-28 h-28 mx-auto mb-5 rounded-full ${colorClasses.bg} flex items-center justify-center shadow-2xl ring-6 ring-white/50`}>
                  <span className="text-5xl font-black text-white drop-shadow-lg">{result.name}</span>
                </div>
                
                <div className={`inline-block px-6 py-3 rounded-full ${colorClasses.light} border-3 border-white shadow-lg`}>
                  <h3 className="text-2xl font-bold text-gray-700">
                    {result.name} Personality - {result.title}
                  </h3>
                </div>
              </div>

              {/* Key Traits Section */}
              <div className="mb-6">
                <h4 className="text-2xl font-black text-gray-800 mb-4 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Key Traits
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {result.traits.map((trait, index) => (
                    <Badge 
                      key={index} 
                      className="text-sm px-3 py-1 bg-gray-100 text-gray-700 font-bold border border-gray-200 rounded-lg"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Strengths Section */}
              <div>
                <h4 className="text-2xl font-black text-gray-800 mb-4 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Strengths
                </h4>
                <div className="grid grid-cols-2 gap-2 text-left">
                  {result.strengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5"></div>
                      <span className="text-xs text-gray-700 font-medium leading-tight">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-2xl text-white font-bold opacity-90 drop-shadow-lg">
            Discover your personality at ColorProfile.com
          </p>
        </div>
      </div>
    </div>
  )
})

ShareCard.displayName = "ShareCard"
