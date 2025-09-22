"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, CheckCircle, AlertCircle, Users, MessageCircle, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { PersonalityType } from "@/lib/quiz-data"
import { recordQuizResult, getMatchPercentage } from "@/lib/quiz-statistics"

interface ResultsDisplayProps {
  username: string
  result: PersonalityType
  onRetakeQuiz: () => void
  onBackToHome: () => void
}

export function ResultsDisplay({ username, result, onRetakeQuiz, onBackToHome }: ResultsDisplayProps) {
  const [showResults, setShowResults] = useState(false)
  const [currentRevealStep, setCurrentRevealStep] = useState(0)
  const [matchPercentage, setMatchPercentage] = useState(0)

  useEffect(() => {
    // Record the quiz result
    recordQuizResult(result.color)

    // Get match percentage
    const percentage = getMatchPercentage(result.color)
    setMatchPercentage(percentage)

    // Start progressive reveal after initial loading
    const timer = setTimeout(() => {
      setShowResults(true)
      // Start revealing sections one by one
      const revealSteps = [
        () => setCurrentRevealStep(1), // Key traits
        () => setCurrentRevealStep(2), // Strengths
        () => setCurrentRevealStep(3), // Work style & communication
        () => setCurrentRevealStep(4), // Growth areas
        () => setCurrentRevealStep(5), // Color reveal
        () => setCurrentRevealStep(6), // Full results
      ]

      revealSteps.forEach((step, index) => {
        setTimeout(step, (index + 1) * 2000) // 2 second intervals
      })
    }, 1500)

    return () => clearTimeout(timer)
  }, [result.color])

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return {
          bg: "color-red",
          border: "border-red",
          text: "text-red-600",
          icon: "bg-red-100 text-red-600",
        }
      case "yellow":
        return {
          bg: "color-yellow",
          border: "border-yellow",
          text: "text-yellow-600",
          icon: "bg-yellow-100 text-yellow-600",
        }
      case "green":
        return {
          bg: "color-green",
          border: "border-green",
          text: "text-green-600",
          icon: "bg-green-100 text-green-600",
        }
      case "blue":
        return {
          bg: "color-blue",
          border: "border-blue",
          text: "text-blue-600",
          icon: "bg-blue-100 text-blue-600",
        }
      default:
        return {
          bg: "bg-primary",
          border: "border-primary",
          text: "text-primary",
          icon: "bg-primary/10 text-primary",
        }
    }
  }

  const colorClasses = getColorClasses(result.color)

  if (!showResults) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-sm">
          <div className="relative">
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full ${colorClasses.bg} flex items-center justify-center animate-pulse`}
            >
              <span className="text-2xl sm:text-3xl font-bold text-white">?</span>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-current animate-spin opacity-30"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">Analyzing your personality...</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Discovering your color profile</p>
          </div>
        </div>
      </div>
    )
  }

  // Progressive reveal states
  const revealMessages = [
    "Analyzing your personality...",
    "Discovering your key traits...",
    "Identifying your strengths...",
    "Understanding your work style...",
    "Finding growth opportunities...",
    "Revealing your personality color...",
    "Compiling your complete profile..."
  ]

  if (currentRevealStep < 6) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-sm">
          <div className="relative">
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full ${colorClasses.bg} flex items-center justify-center animate-pulse`}
            >
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {currentRevealStep >= 5 ? result.name : "?"}
              </span>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-current animate-spin opacity-30"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">{revealMessages[currentRevealStep]}</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {currentRevealStep >= 5 ? `You are ${result.name}!` : "Building your personality profile"}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onHomeClick={onBackToHome} showHomeButton={true} />

      <div className="container mx-auto px-4 py-6 max-w-4xl pb-24">
        {/* Header */}
        <div className="text-center mb-8 animate-in fade-in-50 slide-in-from-top-4 duration-700">
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full ${colorClasses.bg} flex items-center justify-center animate-bounce shadow-lg`}
          >
            <span className="text-xl sm:text-2xl font-bold text-white">{result.name}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight">
            Hey {username}! You are a <span className={colorClasses.text}>{result.name}</span>
          </h1>
          <h2 className="text-lg sm:text-xl text-muted-foreground mb-4">{result.title}</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {result.description}
          </p>

          {/* Statistics */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
              <TrendingUp className="w-4 h-4" />
              <span>You match {matchPercentage}% of people who took this quiz!</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Key Traits - Reveal Step 1 */}
          {currentRevealStep >= 1 && (
            <Card
              className={`${colorClasses.border} border-2 animate-in fade-in-50 slide-in-from-left-4 duration-500`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                  <div className={`p-2 rounded-lg ${colorClasses.icon}`}>
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  Key Traits
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {result.traits.map((trait, index) => (
                    <Badge key={index} variant="secondary" className="text-sm hover:scale-105 transition-transform">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Strengths - Reveal Step 2 */}
          {currentRevealStep >= 2 && (
            <Card className="animate-in fade-in-50 slide-in-from-right-4 duration-500 delay-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                  <div className="p-2 rounded-lg bg-green-100 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {result.strengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{strength}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Work Style & Communication - Reveal Step 3 */}
          {currentRevealStep >= 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="animate-in fade-in-50 slide-in-from-left-4 duration-500 delay-200">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      <Users className="w-5 h-5" />
                    </div>
                    Work Style
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-700 leading-relaxed">{result.workStyle}</p>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in-50 slide-in-from-right-4 duration-500 delay-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                    <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    Communication Style
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-700 leading-relaxed">{result.communication}</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Growth Areas - Reveal Step 4 */}
          {currentRevealStep >= 4 && (
            <Card className="animate-in fade-in-50 slide-in-from-bottom-4 duration-500 delay-400">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                  <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  Growth Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {result.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
                      <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-in fade-in-50 slide-in-from-bottom-4 duration-500 delay-800">
            <Button
              onClick={onRetakeQuiz}
              variant="outline"
              className="flex items-center justify-center gap-2 bg-transparent hover:scale-105 transition-transform flex-1 h-12"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </Button>
            <Button
              onClick={onBackToHome}
              variant="outline"
              className="flex items-center justify-center gap-2 hover:scale-105 transition-transform flex-1 h-12"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
