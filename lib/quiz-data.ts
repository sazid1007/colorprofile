export interface Question {
  id: number
  text: string
  options: {
    text: string
    scores: {
      red: number
      yellow: number
      green: number
      blue: number
    }
  }[]
}

export interface PersonalityType {
  color: "red" | "yellow" | "green" | "blue"
  name: string
  title: string
  description: string
  traits: string[]
  strengths: string[]
  challenges: string[]
  workStyle: string
  communication: string
}

export const questions: Question[] = [
  {
    id: 1,
    text: "When making decisions, I tend to:",
    options: [
      {
        text: "Act quickly and decisively",
        scores: { red: 3, yellow: 1, green: 0, blue: 0 },
      },
      {
        text: "Consider how it affects others",
        scores: { red: 0, yellow: 1, green: 3, blue: 0 },
      },
      {
        text: "Analyze all available data",
        scores: { red: 0, yellow: 0, green: 0, blue: 3 },
      },
      {
        text: "Go with my gut feeling",
        scores: { red: 1, yellow: 3, green: 0, blue: 0 },
      },
    ],
  },
  {
    id: 2,
    text: "In social situations, I:",
    options: [
      {
        text: "Take charge and lead conversations",
        scores: { red: 3, yellow: 2, green: 0, blue: 0 },
      },
      {
        text: "Listen more than I speak",
        scores: { red: 0, yellow: 0, green: 3, blue: 2 },
      },
      {
        text: "Share stories and make people laugh",
        scores: { red: 1, yellow: 3, green: 1, blue: 0 },
      },
      {
        text: "Observe and analyze the dynamics",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 },
      },
    ],
  },
  {
    id: 3,
    text: "When facing conflict, I:",
    options: [
      {
        text: "Address it head-on immediately",
        scores: { red: 3, yellow: 1, green: 0, blue: 1 },
      },
      {
        text: "Try to find a compromise",
        scores: { red: 0, yellow: 2, green: 3, blue: 1 },
      },
      {
        text: "Avoid it if possible",
        scores: { red: 0, yellow: 0, green: 2, blue: 1 },
      },
      {
        text: "Gather facts before responding",
        scores: { red: 1, yellow: 0, green: 1, blue: 3 },
      },
    ],
  },
  {
    id: 4,
    text: "My ideal work environment is:",
    options: [
      {
        text: "Fast-paced with clear goals",
        scores: { red: 3, yellow: 1, green: 0, blue: 1 },
      },
      {
        text: "Collaborative and friendly",
        scores: { red: 0, yellow: 3, green: 2, blue: 0 },
      },
      {
        text: "Stable and supportive",
        scores: { red: 0, yellow: 1, green: 3, blue: 1 },
      },
      {
        text: "Quiet and organized",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 },
      },
    ],
  },
  {
    id: 5,
    text: "When learning something new, I prefer to:",
    options: [
      {
        text: "Jump in and figure it out as I go",
        scores: { red: 3, yellow: 2, green: 0, blue: 0 },
      },
      {
        text: "Learn with others in a group",
        scores: { red: 1, yellow: 3, green: 2, blue: 0 },
      },
      {
        text: "Take my time and practice gradually",
        scores: { red: 0, yellow: 1, green: 3, blue: 1 },
      },
      {
        text: "Study the theory first",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 },
      },
    ],
  },
  {
    id: 6,
    text: "People would describe me as:",
    options: [
      {
        text: "Direct and results-oriented",
        scores: { red: 3, yellow: 0, green: 0, blue: 1 },
      },
      {
        text: "Enthusiastic and optimistic",
        scores: { red: 1, yellow: 3, green: 1, blue: 0 },
      },
      {
        text: "Patient and reliable",
        scores: { red: 0, yellow: 1, green: 3, blue: 1 },
      },
      {
        text: "Careful and precise",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 },
      },
    ],
  },
  {
    id: 7,
    text: "When working on a team project, I:",
    options: [
      {
        text: "Take the lead and delegate tasks",
        scores: { red: 3, yellow: 1, green: 0, blue: 0 },
      },
      {
        text: "Keep everyone motivated and engaged",
        scores: { red: 1, yellow: 3, green: 1, blue: 0 },
      },
      {
        text: "Support others and maintain harmony",
        scores: { red: 0, yellow: 1, green: 3, blue: 1 },
      },
      {
        text: "Focus on quality and accuracy",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 },
      },
    ],
  },
  {
    id: 8,
    text: "My communication style is:",
    options: [
      {
        text: "Direct and to the point",
        scores: { red: 3, yellow: 0, green: 0, blue: 2 },
      },
      {
        text: "Expressive and animated",
        scores: { red: 1, yellow: 3, green: 0, blue: 0 },
      },
      {
        text: "Warm and considerate",
        scores: { red: 0, yellow: 1, green: 3, blue: 0 },
      },
      {
        text: "Thoughtful and measured",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 },
      },
    ],
  },
]

export const personalityTypes: PersonalityType[] = [
  {
    color: "red",
    name: "Red",
    title: "The Dominant Leader",
    description:
      "You are a natural-born leader who thrives on challenges and results. You're direct, decisive, and goal-oriented, always pushing forward to achieve success.",
    traits: ["Decisive", "Competitive", "Direct", "Results-oriented", "Confident", "Ambitious", "Independent"],
    strengths: [
      "Natural leadership abilities",
      "Quick decision-making under pressure",
      "Goal achievement and execution",
      "Problem-solving with urgency",
      "Taking initiative in challenging situations",
      "Driving results and performance",
      "Competitive advantage mindset",
      "Crisis management skills",
    ],
    challenges: [
      "Can be impatient with slower processes",
      "May overlook important details",
      "Might seem insensitive to others' feelings",
      "Difficulty delegating control",
      "Can be too direct in communication",
      "May rush decisions without full analysis",
      "Tendency to dominate conversations",
    ],
    workStyle: "You prefer fast-paced environments with clear objectives and the authority to make decisions.",
    communication: "You communicate directly and efficiently, focusing on bottom-line results and action items.",
  },
  {
    color: "yellow",
    name: "Yellow",
    title: "The Inspiring Influencer",
    description:
      "You are an enthusiastic and optimistic person who loves to inspire and motivate others. You're creative, social, and always looking for new possibilities.",
    traits: ["Enthusiastic", "Optimistic", "Creative", "Social", "Inspiring", "Energetic", "Spontaneous"],
    strengths: [
      "Motivating and inspiring others",
      "Creative thinking and innovation",
      "Building strong relationships",
      "Generating exciting new ideas",
      "Maintaining positive attitude",
      "Networking and social connections",
      "Adaptability to change",
      "Public speaking and presentation",
    ],
    challenges: [
      "Can be disorganized with details",
      "May lack follow-through on projects",
      "Easily distracted by new opportunities",
      "Overly optimistic about timelines",
      "Difficulty with routine tasks",
      "May promise more than can deliver",
      "Struggles with criticism or rejection",
    ],
    workStyle: "You thrive in collaborative, dynamic environments where you can interact with people and share ideas.",
    communication: "You communicate with enthusiasm and emotion, using stories and examples to engage your audience.",
  },
  {
    color: "green",
    name: "Green",
    title: "The Steady Supporter",
    description:
      "You are a reliable and patient person who values stability and harmony. You're a great team player who supports others and maintains peaceful relationships.",
    traits: ["Patient", "Reliable", "Supportive", "Loyal", "Calm", "Diplomatic", "Consistent"],
    strengths: [
      "Team collaboration and cooperation",
      "Active listening and empathy",
      "Consistency and reliability",
      "Conflict resolution skills",
      "Building trust and loyalty",
      "Creating stable environments",
      "Supporting others' growth",
      "Maintaining work-life balance",
    ],
    challenges: [
      "Resistance to sudden changes",
      "Difficulty saying no to requests",
      "Avoids confrontation when necessary",
      "Can be indecisive under pressure",
      "May suppress own needs for others",
      "Slow to adapt to new technologies",
      "Reluctant to take leadership roles",
    ],
    workStyle: "You prefer stable, supportive environments with clear processes and strong team relationships.",
    communication: "You communicate with warmth and consideration, always thinking about how your words affect others.",
  },
  {
    color: "blue",
    name: "Blue",
    title: "The Careful Analyst",
    description:
      "You are a thoughtful and analytical person who values accuracy and quality. You're detail-oriented, systematic, and always strive for perfection.",
    traits: ["Analytical", "Precise", "Systematic", "Quality-focused", "Thoughtful", "Methodical", "Logical"],
    strengths: [
      "Attention to detail and accuracy",
      "Quality control and standards",
      "Problem analysis and research",
      "Strategic planning and organization",
      "Research and data analysis",
      "Risk assessment and mitigation",
      "Process improvement skills",
      "Technical expertise development",
    ],
    challenges: [
      "Can be perfectionist to a fault",
      "May overthink simple decisions",
      "Slow decision-making process",
      "Critical of others' work quality",
      "Difficulty with ambiguous situations",
      "May get lost in details",
      "Reluctant to take risks",
    ],
    workStyle: "You prefer organized, quiet environments where you can focus on accuracy and quality work.",
    communication:
      "You communicate thoughtfully and precisely, providing detailed information and well-reasoned arguments.",
  },
]

export function calculateResults(answers: Record<number, number>): PersonalityType {
  const scores = { red: 0, yellow: 0, green: 0, blue: 0 }

  Object.entries(answers).forEach(([questionId, optionIndex]) => {
    const question = questions.find((q) => q.id === Number.parseInt(questionId))
    if (question && question.options[optionIndex]) {
      const option = question.options[optionIndex]
      scores.red += option.scores.red
      scores.yellow += option.scores.yellow
      scores.green += option.scores.green
      scores.blue += option.scores.blue
    }
  })

  const dominantColor = Object.entries(scores).reduce((a, b) =>
    scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b,
  )[0] as "red" | "yellow" | "green" | "blue"

  return personalityTypes.find((type) => type.color === dominantColor) || personalityTypes[0]
}
