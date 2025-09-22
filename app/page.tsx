"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Brain, Users, Target, BarChart3, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { QuizInterface } from "@/components/quiz-interface"
import { ResultsDisplay } from "@/components/results-display"
import { Footer } from "@/components/footer"
import type { PersonalityType } from "@/lib/quiz-data"

export default function HomePage() {
  const [currentView, setCurrentView] = useState<"home" | "username" | "quiz" | "results">("home")
  const [username, setUsername] = useState("")
  const [quizResult, setQuizResult] = useState<PersonalityType | null>(null)

  const handleStartQuiz = () => {
    setCurrentView("username")
  }

  const handleUsernameSubmit = () => {
    if (username.trim()) {
      setCurrentView("quiz")
    }
  }

  const handleQuizComplete = (result: PersonalityType) => {
    setQuizResult(result)
    setCurrentView("results")
  }

  const handleBackToHome = () => {
    setCurrentView("home")
    setQuizResult(null)
    setUsername("")
  }

  const handleRetakeQuiz = () => {
    setQuizResult(null)
    setCurrentView("quiz")
  }

  if (currentView === "username") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
          <Card className="w-full max-w-md animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-pulse">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Welcome to ColorProfile!</CardTitle>
              <CardDescription>Let's get to know you better</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">What's your name?</Label>
                <Input
                  id="username"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleUsernameSubmit()}
                  className="text-center"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" onClick={() => setCurrentView("home")} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleUsernameSubmit} disabled={!username.trim()} className="flex-1">
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  if (currentView === "quiz") {
    return <QuizInterface username={username} onComplete={handleQuizComplete} onBack={handleBackToHome} />
  }

  if (currentView === "results" && quizResult) {
    return (
      <ResultsDisplay
        username={username}
        result={quizResult}
        onRetakeQuiz={handleRetakeQuiz}
        onBackToHome={handleBackToHome}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <div className="animate-in fade-in-50 slide-in-from-top-4 duration-700">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance">
              Discover Your
              <span className="bg-gradient-to-r from-primary via-accent to-muted bg-clip-text text-transparent animate-pulse">
                {" "}
                Color Profile
              </span>
            </h1>
          </div>
          <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-200">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty">
              Based on Thomas Erikson's "Surrounded by Idiots", discover whether you're a Red leader, Yellow influencer,
              Green supporter, or Blue analyst.
            </p>
          </div>
          <div className="animate-in fade-in-50 zoom-in-50 duration-500 delay-400">
            <Button
              onClick={handleStartQuiz}
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </div>
        </div>

        {/* Color Types Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            {
              color: "red",
              title: "Red",
              subtitle: "The Dominant Leader",
              icon: Target,
              description: "Direct, decisive, and results-oriented. Natural leaders who thrive on challenges.",
              delay: "delay-100",
            },
            {
              color: "yellow",
              title: "Yellow",
              subtitle: "The Inspiring Influencer",
              icon: Users,
              description: "Enthusiastic, optimistic, and creative. Love to inspire and motivate others.",
              delay: "delay-200",
            },
            {
              color: "green",
              title: "Green",
              subtitle: "The Steady Supporter",
              icon: Users,
              description: "Patient, reliable, and supportive. Great team players who value harmony.",
              delay: "delay-300",
            },
            {
              color: "blue",
              title: "Blue",
              subtitle: "The Careful Analyst",
              icon: BarChart3,
              description: "Analytical, precise, and quality-focused. Detail-oriented perfectionists.",
              delay: "delay-500",
            },
          ].map((type, index) => (
            <Card
              key={type.color}
              className={`border-${type.color} hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in-50 slide-in-from-bottom-4 ${type.delay}`}
            >
              <CardHeader className="text-center pb-3">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full color-${type.color} flex items-center justify-center hover:rotate-12 transition-transform duration-300`}
                >
                  <type.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle
                  className={`text-${type.color === "red" ? "primary" : type.color === "blue" ? "accent" : `${type.color}-600`} text-lg sm:text-xl`}
                >
                  {type.title}
                </CardTitle>
                <CardDescription className="text-sm">{type.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <Card className="max-w-4xl mx-auto animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-600">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl sm:text-2xl">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
              About This Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-center text-sm sm:text-base leading-relaxed">
              This personality assessment is based on the DISC model popularized by Thomas Erikson in his bestselling
              book "Surrounded by Idiots". The assessment helps you understand your dominant behavioral style and how
              you interact with others.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary" className="text-xs sm:text-sm">
                8 Questions
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">
                5 Minutes
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">
                Instant Results
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">
                Detailed Analysis
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
