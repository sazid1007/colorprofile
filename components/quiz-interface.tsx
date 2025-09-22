"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { questions, calculateResults, type PersonalityType } from "@/lib/quiz-data"

interface QuizInterfaceProps {
  username: string
  onComplete: (result: PersonalityType) => void
  onBack: () => void
}

export function QuizInterface({ username, onComplete, onBack }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [selectedOption, setSelectedOption] = useState<string>("")

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1
  const canProceed = selectedOption !== ""

  const handleOptionSelect = (optionIndex: string) => {
    setSelectedOption(optionIndex)
  }

  const handleNext = () => {
    if (selectedOption === "") return

    const newAnswers = {
      ...answers,
      [question.id]: Number.parseInt(selectedOption),
    }
    setAnswers(newAnswers)

    if (isLastQuestion) {
      const result = calculateResults(newAnswers)
      onComplete(result)
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption("")
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      const previousAnswer = answers[questions[currentQuestion - 1].id]
      setSelectedOption(previousAnswer !== undefined ? previousAnswer.toString() : "")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onHomeClick={onBack} showHomeButton={true} />

      <div className="flex items-center justify-center p-4 min-h-[calc(100vh-160px)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-6 animate-in fade-in-50 slide-in-from-top-4 duration-500">
            <div className="flex items-center justify-center gap-2 mb-2">
              <User className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium text-primary">Hi, {username}!</span>
            </div>
            <p className="text-sm text-muted-foreground">Let's discover your color profile</p>
          </div>

          {/* Header */}
          <div className="mb-6 sm:mb-8 animate-in fade-in-50 slide-in-from-left-4 duration-500 delay-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2 sm:h-3" />
          </div>

          {/* Question Card */}
          <Card className="mb-6 sm:mb-8 animate-in fade-in-50 zoom-in-95 duration-500 delay-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-balance leading-relaxed">{question.text}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedOption} onValueChange={handleOptionSelect} className="space-y-3 sm:space-y-4">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 p-3 sm:p-4 rounded-lg border hover:bg-muted/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer ${
                      selectedOption === index.toString() ? "bg-primary/5 border-primary" : ""
                    }`}
                    onClick={() => handleOptionSelect(index.toString())}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-sm leading-relaxed">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mb-6 sm:mb-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 bg-transparent hover:scale-105 transition-transform"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
            >
              {isLastQuestion ? "Get Results" : "Next"}
              {!isLastQuestion && <ChevronRight className="w-4 h-4" />}
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="text-center animate-in fade-in-50 slide-in-from-bottom-4 duration-500 delay-300">
            <div className="flex justify-center space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index < currentQuestion
                      ? "bg-primary scale-110"
                      : index === currentQuestion
                        ? "bg-primary/50 scale-125 animate-pulse"
                        : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
