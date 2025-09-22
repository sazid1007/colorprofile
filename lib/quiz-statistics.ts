// Statistics tracking for personality quiz results
const STORAGE_KEY = 'personality-quiz-results'

export interface QuizStatistics {
  totalQuizzes: number
  colorCounts: {
    red: number
    yellow: number
    green: number
    blue: number
  }
}

export function getQuizStatistics(): QuizStatistics {
  if (typeof window === 'undefined') {
    return { totalQuizzes: 0, colorCounts: { red: 0, yellow: 0, green: 0, blue: 0 } }
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Error reading quiz statistics:', error)
  }

  return { totalQuizzes: 0, colorCounts: { red: 0, yellow: 0, green: 0, blue: 0 } }
}

export function recordQuizResult(color: 'red' | 'yellow' | 'green' | 'blue'): void {
  if (typeof window === 'undefined') return

  try {
    const stats = getQuizStatistics()
    stats.totalQuizzes += 1
    stats.colorCounts[color] += 1
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
  } catch (error) {
    console.error('Error recording quiz result:', error)
  }
}

export function getMatchPercentage(userColor: 'red' | 'yellow' | 'green' | 'blue'): number {
  const stats = getQuizStatistics()
  if (stats.totalQuizzes === 0) return 0

  return Math.round((stats.colorCounts[userColor] / stats.totalQuizzes) * 100)
}