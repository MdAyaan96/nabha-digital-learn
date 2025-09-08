export const SUBJECT_CONTENT = {
  math: {
    title: "Mathematics",
    lesson: "Algebra",
    icon: "📐",
    color: "from-blue-400 to-purple-600",
    notes: [
      {
        title: "Algebra Basics",
        url: "/content/math/algebra-basics.pdf",
        description: "Introduction to algebraic expressions and equations"
      },
      {
        title: "Linear Equations", 
        url: "/content/math/linear-equations.pdf",
        description: "Solving linear equations step by step"
      }
    ],
    videos: [
      {
        title: "Introduction to Algebra",
        url: "/content/math/intro-algebra.mp4",
        duration: "15:30",
        description: "Basic concepts of algebra"
      },
      {
        title: "Solving Linear Equations",
        url: "/content/math/linear-equations.mp4", 
        duration: "12:45",
        description: "Methods for solving linear equations"
      }
    ],
    assignments: [
      { id: 1, question: "Solve for x: 2x + 5 = 15", type: "text" },
      { id: 2, question: "Simplify: 3x + 2x - 4x", type: "text" },
      { id: 3, question: "If x = 3, what is the value of 2x² + 5x - 1?", type: "text" },
      { id: 4, question: "Expand: (x + 3)(x - 2)", type: "text" },
      { id: 5, question: "Solve: 4x - 7 = 2x + 9", type: "text" },
      { id: 6, question: "Factor: x² + 5x + 6", type: "text" },
      { id: 7, question: "Solve for y: 3y/4 = 12", type: "text" },
      { id: 8, question: "Simplify: (2x³)(3x²)", type: "text" },
      { id: 9, question: "Solve: x² - 4x = 0", type: "text" },
      { id: 10, question: "Find the slope of the line passing through (2,3) and (4,7)", type: "text" }
    ],
    quiz: [
      {
        id: 1,
        question: "What is the value of x in 2x + 3 = 11?",
        options: ["2", "4", "6", "8"],
        correct: "4"
      },
      {
        id: 2,
        question: "Simplify: 5x - 3x + 2x",
        options: ["4x", "6x", "3x", "2x"],
        correct: "4x"
      },
      {
        id: 3,
        question: "What is x² when x = -3?",
        options: ["-9", "9", "6", "-6"],
        correct: "9"
      },
      {
        id: 4,
        question: "Solve: x/2 = 8",
        options: ["4", "16", "12", "6"],
        correct: "16"
      },
      {
        id: 5,
        question: "Factor: x² - 9",
        options: ["(x-3)(x-3)", "(x+3)(x-3)", "(x+9)(x-1)", "Cannot be factored"],
        correct: "(x+3)(x-3)"
      },
      {
        id: 6,
        question: "What is the y-intercept of y = 2x + 5?",
        options: ["2", "5", "-5", "0"],
        correct: "5"
      },
      {
        id: 7,
        question: "Solve: 3x + 4 = 2x + 10",
        options: ["6", "4", "8", "2"],
        correct: "6"
      },
      {
        id: 8,
        question: "Simplify: (x²)³",
        options: ["x⁵", "x⁶", "x⁸", "3x²"],
        correct: "x⁶"
      },
      {
        id: 9,
        question: "What is the coefficient of x in 7x + 3?",
        options: ["3", "7", "10", "1"],
        correct: "7"
      },
      {
        id: 10,
        question: "Solve: x² = 25",
        options: ["5", "-5", "±5", "25"],
        correct: "±5"
      }
    ],
    units: [
      {
        lesson: "Algebra",
        notes: [
          { title: "Algebra Basics", url: "/content/math/algebra-basics.pdf", description: "Introduction to algebraic expressions and equations" },
          { title: "Linear Equations", url: "/content/math/linear-equations.pdf", description: "Solving linear equations step by step" }
        ],
        videos: [
          { title: "Introduction to Algebra", url: "/content/math/intro-algebra.mp4", duration: "15:30", description: "Basic concepts of algebra" },
          { title: "Solving Linear Equations", url: "/content/math/linear-equations.mp4", duration: "12:45", description: "Methods for solving linear equations" }
        ],
        assignments: [
          { id: 1, question: "Solve for x: 2x + 5 = 15", type: "text" },
          { id: 2, question: "Simplify: 3x + 2x - 4x", type: "text" },
          { id: 3, question: "If x = 3, what is the value of 2x² + 5x - 1?", type: "text" },
          { id: 4, question: "Expand: (x + 3)(x - 2)", type: "text" },
          { id: 5, question: "Solve: 4x - 7 = 2x + 9", type: "text" },
          { id: 6, question: "Factor: x² + 5x + 6", type: "text" },
          { id: 7, question: "Solve for y: 3y/4 = 12", type: "text" },
          { id: 8, question: "Simplify: (2x³)(3x²)", type: "text" },
          { id: 9, question: "Solve: x² - 4x = 0", type: "text" },
          { id: 10, question: "Find the slope of the line passing through (2,3) and (4,7)", type: "text" }
        ],
        quiz: [
          { id: 1, question: "What is the value of x in 2x + 3 = 11?", options: ["2", "4", "6", "8"], correct: "4" },
          { id: 2, question: "Simplify: 5x - 3x + 2x", options: ["4x", "6x", "3x", "2x"], correct: "4x" },
          { id: 3, question: "What is x² when x = -3?", options: ["-9", "9", "6", "-6"], correct: "9" },
          { id: 4, question: "Solve: x/2 = 8", options: ["4", "16", "12", "6"], correct: "16" },
          { id: 5, question: "Factor: x² - 9", options: ["(x-3)(x-3)", "(x+3)(x-3)", "(x+9)(x-1)", "Cannot be factored"], correct: "(x+3)(x-3)" },
          { id: 6, question: "What is the y-intercept of y = 2x + 5?", options: ["2", "5", "-5", "0"], correct: "5" },
          { id: 7, question: "Solve: 3x + 4 = 2x + 10", options: ["6", "4", "8", "2"], correct: "6" },
          { id: 8, question: "Simplify: (x²)³", options: ["x⁵", "x⁶", "x⁸", "3x²"], correct: "x⁶" },
          { id: 9, question: "What is the coefficient of x in 7x + 3?", options: ["3", "7", "10", "1"], correct: "7" },
          { id: 10, question: "Solve: x² = 25", options: ["5", "-5", "±5", "25"], correct: "±5" }
        ]
      },
      {
        lesson: "Geometry",
        notes: [
          { title: "Triangles Basics", url: "/content/math/geometry-triangles.pdf", description: "Types of triangles and basic properties" },
          { title: "Circles & Angles", url: "/content/math/geometry-circles.pdf", description: "Angles, arcs, and chords in circles" }
        ],
        videos: [
          { title: "Introduction to Geometry", url: "/content/math/intro-geometry.mp4", duration: "14:20", description: "Points, lines, angles, and shapes" },
          { title: "Triangles & Congruence", url: "/content/math/triangles.mp4", duration: "13:10", description: "Triangle properties and congruence rules" }
        ],
        assignments: [
          { id: 101, question: "Find the sum of interior angles of a triangle.", type: "text" },
          { id: 102, question: "Define a right angle and give its measure.", type: "text" },
          { id: 103, question: "If two angles are 35° and 65°, find the third angle of the triangle.", type: "text" },
          { id: 104, question: "State Pythagoras theorem.", type: "text" },
          { id: 105, question: "Find the perimeter of a square of side 7 cm.", type: "text" },
          { id: 106, question: "What is the radius if the diameter is 12 cm?", type: "text" },
          { id: 107, question: "Define congruent triangles.", type: "text" },
          { id: 108, question: "Name the center from which all points on a circle are equidistant.", type: "text" },
          { id: 109, question: "Calculate the area of a rectangle 8 cm × 5 cm.", type: "text" },
          { id: 110, question: "What do we call a polygon with 5 sides?", type: "text" }
        ],
        quiz: [
          { id: 101, question: "Sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], correct: "180°" },
          { id: 102, question: "A right angle measures:", options: ["30°", "60°", "90°", "120°"], correct: "90°" },
          { id: 103, question: "Longest side of a right triangle:", options: ["Base", "Height", "Hypotenuse", "Median"], correct: "Hypotenuse" },
          { id: 104, question: "A triangle with all equal sides:", options: ["Scalene", "Isosceles", "Equilateral", "Right"], correct: "Equilateral" },
          { id: 105, question: "Perimeter of a square with side s:", options: ["2s", "3s", "4s", "s²"], correct: "4s" },
          { id: 106, question: "Diameter = 2 ×", options: ["Area", "Radius", "Circumference", "Chord"], correct: "Radius" },
          { id: 107, question: "Number of sides in a pentagon:", options: ["4", "5", "6", "7"], correct: "5" },
          { id: 108, question: "Straight angle is:", options: ["90°", "120°", "150°", "180°"], correct: "180°" },
          { id: 109, question: "All angles in an equilateral triangle are:", options: ["45°", "60°", "90°", "120°"], correct: "60°" },
          { id: 110, question: "A chord that passes through the center is a:", options: ["Secant", "Tangent", "Diameter", "Radius"], correct: "Diameter" }
        ]
      }
    ]
  },
  physics: {
    title: "Physics",
    lesson: "Motion",
    icon: "⚡",
    color: "from-green-400 to-blue-600",
    notes: [
      {
        title: "Laws of Motion",
        url: "/content/physics/laws-of-motion.pdf",
        description: "Newton's three laws of motion explained"
      },
      {
        title: "Kinematics",
        url: "/content/physics/kinematics.pdf", 
        description: "Motion in one and two dimensions"
      }
    ],
    videos: [
      {
        title: "Newton's Laws of Motion",
        url: "/content/physics/newtons-laws.mp4",
        duration: "18:20",
        description: "Understanding the fundamental laws of motion"
      },
      {
        title: "Velocity and Acceleration",
        url: "/content/physics/velocity-acceleration.mp4",
        duration: "14:15", 
        description: "Concepts of velocity and acceleration"
      }
    ],
    assignments: [
      { id: 1, question: "State Newton's first law of motion", type: "text" },
      { id: 2, question: "Calculate velocity if distance = 100m and time = 20s", type: "text" },
      { id: 3, question: "What is acceleration? Give its SI unit", type: "text" },
      { id: 4, question: "A car accelerates from 0 to 60 km/h in 10s. Find acceleration", type: "text" },
      { id: 5, question: "Explain the difference between speed and velocity", type: "text" },
      { id: 6, question: "What is momentum? Write its formula", type: "text" },
      { id: 7, question: "Calculate force if mass = 5kg and acceleration = 2m/s²", type: "text" },
      { id: 8, question: "State Newton's third law with an example", type: "text" },
      { id: 9, question: "What is uniform motion? Give two examples", type: "text" },
      { id: 10, question: "Define displacement and how it differs from distance", type: "text" }
    ],
    quiz: [
      {
        id: 1,
        question: "What is the SI unit of velocity?",
        options: ["m/s", "km/h", "m/s²", "N"],
        correct: "m/s"
      },
      {
        id: 2,
        question: "Newton's first law is also known as:",
        options: ["Law of acceleration", "Law of inertia", "Law of action-reaction", "Law of gravity"],
        correct: "Law of inertia"
      },
      {
        id: 3,
        question: "If a car travels 200m in 10s, its speed is:",
        options: ["20 m/s", "2000 m/s", "0.05 m/s", "200 m/s"],
        correct: "20 m/s"
      },
      {
        id: 4,
        question: "Force equals:",
        options: ["mass × velocity", "mass × acceleration", "mass × distance", "mass × time"],
        correct: "mass × acceleration"
      },
      {
        id: 5,
        question: "The rate of change of velocity is:",
        options: ["Speed", "Distance", "Acceleration", "Momentum"],
        correct: "Acceleration"
      },
      {
        id: 6,
        question: "SI unit of force is:",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correct: "Newton"
      },
      {
        id: 7,
        question: "An object at rest will remain at rest unless:",
        options: ["Time passes", "An external force acts on it", "It gets tired", "Gravity stops"],
        correct: "An external force acts on it"
      },
      {
        id: 8,
        question: "Momentum is the product of:",
        options: ["Force and time", "Mass and velocity", "Mass and acceleration", "Force and distance"],
        correct: "Mass and velocity"
      },
      {
        id: 9,
        question: "What type of motion is represented by a straight line on a distance-time graph?",
        options: ["Accelerated motion", "Uniform motion", "Circular motion", "Random motion"],
        correct: "Uniform motion"
      },
      {
        id: 10,
        question: "The slope of a velocity-time graph gives:",
        options: ["Distance", "Speed", "Acceleration", "Force"],
        correct: "Acceleration"
      }
    ],
    units: [
      {
        lesson: "Motion",
        notes: [
          { title: "Laws of Motion", url: "/content/physics/laws-of-motion.pdf", description: "Newton's three laws of motion explained" },
          { title: "Kinematics", url: "/content/physics/kinematics.pdf", description: "Motion in one and two dimensions" }
        ],
        videos: [
          { title: "Newton's Laws of Motion", url: "/content/physics/newtons-laws.mp4", duration: "18:20", description: "Understanding the fundamental laws of motion" },
          { title: "Velocity and Acceleration", url: "/content/physics/velocity-acceleration.mp4", duration: "14:15", description: "Concepts of velocity and acceleration" }
        ],
        assignments: [
          { id: 1, question: "State Newton's first law of motion", type: "text" },
          { id: 2, question: "Calculate velocity if distance = 100m and time = 20s", type: "text" },
          { id: 3, question: "What is acceleration? Give its SI unit", type: "text" },
          { id: 4, question: "A car accelerates from 0 to 60 km/h in 10s. Find acceleration", type: "text" },
          { id: 5, question: "Explain the difference between speed and velocity", type: "text" },
          { id: 6, question: "What is momentum? Write its formula", type: "text" },
          { id: 7, question: "Calculate force if mass = 5kg and acceleration = 2m/s²", type: "text" },
          { id: 8, question: "State Newton's third law with an example", type: "text" },
          { id: 9, question: "What is uniform motion? Give two examples", type: "text" },
          { id: 10, question: "Define displacement and how it differs from distance", type: "text" }
        ],
        quiz: [
          { id: 1, question: "What is the SI unit of velocity?", options: ["m/s", "km/h", "m/s²", "N"], correct: "m/s" },
          { id: 2, question: "Newton's first law is also known as:", options: ["Law of acceleration", "Law of inertia", "Law of action-reaction", "Law of gravity"], correct: "Law of inertia" },
          { id: 3, question: "If a car travels 200m in 10s, its speed is:", options: ["20 m/s", "2000 m/s", "0.05 m/s", "200 m/s"], correct: "20 m/s" },
          { id: 4, question: "Force equals:", options: ["mass × velocity", "mass × acceleration", "mass × distance", "mass × time"], correct: "mass × acceleration" },
          { id: 5, question: "The rate of change of velocity is:", options: ["Speed", "Distance", "Acceleration", "Momentum"], correct: "Acceleration" },
          { id: 6, question: "SI unit of force is:", options: ["Joule", "Newton", "Watt", "Pascal"], correct: "Newton" },
          { id: 7, question: "An object at rest will remain at rest unless:", options: ["Time passes", "An external force acts on it", "It gets tired", "Gravity stops"], correct: "An external force acts on it" },
          { id: 8, question: "Momentum is the product of:", options: ["Force and time", "Mass and velocity", "Mass and acceleration", "Force and distance"], correct: "Mass and velocity" },
          { id: 9, question: "What type of motion is represented by a straight line on a distance-time graph?", options: ["Accelerated motion", "Uniform motion", "Circular motion", "Random motion"], correct: "Uniform motion" },
          { id: 10, question: "The slope of a velocity-time graph gives:", options: ["Distance", "Speed", "Acceleration", "Force"], correct: "Acceleration" }
        ]
      },
      {
        lesson: "Optics",
        notes: [
          { title: "Light & Reflection", url: "/content/physics/optics-reflection.pdf", description: "Laws of reflection, plane mirrors" },
          { title: "Refraction & Lenses", url: "/content/physics/optics-refraction.pdf", description: "Snell's law and lens basics" }
        ],
        videos: [
          { title: "Basics of Light", url: "/content/physics/light-basics.mp4", duration: "16:00", description: "Nature of light and wave model" },
          { title: "Reflection & Refraction", url: "/content/physics/reflection-refraction.mp4", duration: "15:10", description: "Laws, ray diagrams, and examples" }
        ],
        assignments: [
          { id: 201, question: "State the laws of reflection.", type: "text" },
          { id: 202, question: "Define refractive index.", type: "text" },
          { id: 203, question: "Write Snell's law.", type: "text" },
          { id: 204, question: "Differentiate convex and concave lenses.", type: "text" },
          { id: 205, question: "What is the principal focus of a lens?", type: "text" },
          { id: 206, question: "Draw a ray diagram for a plane mirror.", type: "text" },
          { id: 207, question: "Define real and virtual images.", type: "text" },
          { id: 208, question: "State lens formula.", type: "text" },
          { id: 209, question: "List applications of total internal reflection.", type: "text" },
          { id: 210, question: "What is dispersion of light?", type: "text" }
        ],
        quiz: [
          { id: 201, question: "Angle of incidence equals:", options: ["Angle of refraction", "Angle of reflection", "90°", "0°"], correct: "Angle of reflection" },
          { id: 202, question: "n = c/v represents:", options: ["Density", "Refractive index", "Velocity", "Frequency"], correct: "Refractive index" },
          { id: 203, question: "Which lens converges light?", options: ["Concave", "Convex", "Cylindrical", "None"], correct: "Convex" },
          { id: 204, question: "Refraction occurs when light:", options: ["Stops", "Changes medium", "Reflects", "Diffuses"], correct: "Changes medium" },
          { id: 205, question: "TIR stands for:", options: ["Total Internal Reflection", "Total Inverse Refraction", "Total Incident Ray", "Total Image Refraction"], correct: "Total Internal Reflection" },
          { id: 206, question: "A rainbow is due to:", options: ["Reflection only", "Refraction and dispersion", "Polarization", "Diffraction"], correct: "Refraction and dispersion" },
          { id: 207, question: "Mirror that forms always virtual image:", options: ["Plane", "Concave", "Convex", "Parabolic"], correct: "Plane" },
          { id: 208, question: "Unit of focal length:", options: ["m", "s", "kg", "cd"], correct: "m" },
          { id: 209, question: "Snell's law relates angles with:", options: ["Frequencies", "Refractive indices", "Velocities only", "Wavelengths only"], correct: "Refractive indices" },
          { id: 210, question: "Device using TIR:", options: ["Thermometer", "Periscope", "Optical fiber", "Anemometer"], correct: "Optical fiber" }
        ]
      }
    ]
  },
  english: {
    title: "English",
    lesson: "Grammar",
    icon: "📚",
    color: "from-red-400 to-pink-600",
    notes: [
      {
        title: "Parts of Speech",
        url: "/content/english/parts-of-speech.pdf",
        description: "Nouns, verbs, adjectives, and more"
      },
      {
        title: "Sentence Structure",
        url: "/content/english/sentence-structure.pdf",
        description: "Building proper sentences"
      }
    ],
    videos: [
      {
        title: "Grammar Fundamentals",
        url: "/content/english/grammar-fundamentals.mp4",
        duration: "16:45",
        description: "Basic grammar rules and concepts"
      },
      {
        title: "Tenses and Usage",
        url: "/content/english/tenses.mp4",
        duration: "13:30",
        description: "Understanding different tenses"
      }
    ],
    assignments: [
      { id: 1, question: "Identify the noun in: 'The cat sat on the mat'", type: "text" },
      { id: 2, question: "Convert to past tense: 'I eat breakfast every morning'", type: "text" },
      { id: 3, question: "What is an adjective? Give three examples", type: "text" },
      { id: 4, question: "Make a sentence using the word 'beautiful'", type: "text" },
      { id: 5, question: "Identify the verb in: 'She runs very fast'", type: "text" },
      { id: 6, question: "What is the plural of 'child'?", type: "text" },
      { id: 7, question: "Write a sentence in future tense", type: "text" },
      { id: 8, question: "What is a pronoun? Give five examples", type: "text" },
      { id: 9, question: "Correct the sentence: 'He don't like apples'", type: "text" },
      { id: 10, question: "Write the opposite of 'happy'", type: "text" }
    ],
    quiz: [
      {
        id: 1,
        question: "Which is a noun?",
        options: ["Run", "Beautiful", "Book", "Quickly"],
        correct: "Book"
      },
      {
        id: 2,
        question: "What is the past tense of 'go'?",
        options: ["Goes", "Going", "Went", "Gone"],
        correct: "Went"
      },
      {
        id: 3,
        question: "Which word is an adjective?",
        options: ["Sing", "Happy", "Table", "Walk"],
        correct: "Happy"
      },
      {
        id: 4,
        question: "What is the plural of 'mouse'?",
        options: ["Mouses", "Mice", "Mouse", "Mousies"],
        correct: "Mice"
      },
      {
        id: 5,
        question: "Which is a pronoun?",
        options: ["Car", "Red", "They", "Jump"],
        correct: "They"
      },
      {
        id: 6,
        question: "What type of word is 'quickly'?",
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correct: "Adverb"
      },
      {
        id: 7,
        question: "Which sentence is correct?",
        options: ["She don't like it", "She doesn't like it", "She not like it", "She no like it"],
        correct: "She doesn't like it"
      },
      {
        id: 8,
        question: "What is the opposite of 'big'?",
        options: ["Large", "Huge", "Small", "Tall"],
        correct: "Small"
      },
      {
        id: 9,
        question: "Which is in future tense?",
        options: ["I walked", "I walk", "I will walk", "I am walking"],
        correct: "I will walk"
      },
      {
        id: 10,
        question: "What is a verb?",
        options: ["A naming word", "An action word", "A describing word", "A joining word"],
        correct: "An action word"
      }
    ],
    units: [
      {
        lesson: "Grammar",
        notes: [
          { title: "Parts of Speech", url: "/content/english/parts-of-speech.pdf", description: "Nouns, verbs, adjectives, and more" },
          { title: "Sentence Structure", url: "/content/english/sentence-structure.pdf", description: "Building proper sentences" }
        ],
        videos: [
          { title: "Grammar Fundamentals", url: "/content/english/grammar-fundamentals.mp4", duration: "16:45", description: "Basic grammar rules and concepts" },
          { title: "Tenses and Usage", url: "/content/english/tenses.mp4", duration: "13:30", description: "Understanding different tenses" }
        ],
        assignments: [
          { id: 1, question: "Identify the noun in: 'The cat sat on the mat'", type: "text" },
          { id: 2, question: "Convert to past tense: 'I eat breakfast every morning'", type: "text" },
          { id: 3, question: "What is an adjective? Give three examples", type: "text" },
          { id: 4, question: "Make a sentence using the word 'beautiful'", type: "text" },
          { id: 5, question: "Identify the verb in: 'She runs very fast'", type: "text" },
          { id: 6, question: "What is the plural of 'child'?", type: "text" },
          { id: 7, question: "Write a sentence in future tense", type: "text" },
          { id: 8, question: "What is a pronoun? Give five examples", type: "text" },
          { id: 9, question: "Correct the sentence: 'He don't like apples'", type: "text" },
          { id: 10, question: "Write the opposite of 'happy'", type: "text" }
        ],
        quiz: [
          { id: 1, question: "Which is a noun?", options: ["Run", "Beautiful", "Book", "Quickly"], correct: "Book" },
          { id: 2, question: "What is the past tense of 'go'?", options: ["Goes", "Going", "Went", "Gone"], correct: "Went" },
          { id: 3, question: "Which word is an adjective?", options: ["Sing", "Happy", "Table", "Walk"], correct: "Happy" },
          { id: 4, question: "What is the plural of 'mouse'?", options: ["Mouses", "Mice", "Mouse", "Mousies"], correct: "Mice" },
          { id: 5, question: "Which is a pronoun?", options: ["Car", "Red", "They", "Jump"], correct: "They" },
          { id: 6, question: "What type of word is 'quickly'?", options: ["Noun", "Verb", "Adjective", "Adverb"], correct: "Adverb" },
          { id: 7, question: "Which sentence is correct?", options: ["She don't like it", "She doesn't like it", "She not like it", "She no like it"], correct: "She doesn't like it" },
          { id: 8, question: "What is the opposite of 'big'?", options: ["Large", "Huge", "Small", "Tall"], correct: "Small" },
          { id: 9, question: "Which is in future tense?", options: ["I walked", "I walk", "I will walk", "I am walking"], correct: "I will walk" },
          { id: 10, question: "What is a verb?", options: ["A naming word", "An action word", "A describing word", "A joining word"], correct: "An action word" }
        ]
      },
      {
        lesson: "Vocabulary",
        notes: [
          { title: "Common Synonyms", url: "/content/english/synonyms.pdf", description: "Enhance vocabulary with common synonyms" },
          { title: "Antonyms Practice", url: "/content/english/antonyms.pdf", description: "Opposite words and their usage" }
        ],
        videos: [
          { title: "Building Vocabulary", url: "/content/english/vocabulary-building.mp4", duration: "12:50", description: "Strategies to learn new words" },
          { title: "Context Clues", url: "/content/english/context-clues.mp4", duration: "11:40", description: "Using context to infer meanings" }
        ],
        assignments: [
          { id: 301, question: "Write five synonyms of 'happy'.", type: "text" },
          { id: 302, question: "Write five antonyms of 'fast'.", type: "text" },
          { id: 303, question: "Use 'magnificent' in a sentence.", type: "text" },
          { id: 304, question: "Define 'resilient' and use it in a sentence.", type: "text" },
          { id: 305, question: "Write the meaning of 'abundant' and a sentence.", type: "text" },
          { id: 306, question: "Give two homophones and their meanings.", type: "text" },
          { id: 307, question: "Explain 'idiom' with two examples.", type: "text" },
          { id: 308, question: "Write five words from science you know.", type: "text" },
          { id: 309, question: "Find two prefixes and two suffixes and create words.", type: "text" },
          { id: 310, question: "Make a short paragraph using 5 new words.", type: "text" }
        ],
        quiz: [
          { id: 301, question: "Synonym of 'big':", options: ["Tiny", "Huge", "Slim", "Weak"], correct: "Huge" },
          { id: 302, question: "Antonym of 'hot':", options: ["Warm", "Boiling", "Cold", "Mild"], correct: "Cold" },
          { id: 303, question: "'Quick' and 'rapid' are:", options: ["Antonyms", "Synonyms", "Homonyms", "Prefixes"], correct: "Synonyms" },
          { id: 304, question: "'Child' plural is:", options: ["Childs", "Children", "Childes", "Childen"], correct: "Children" },
          { id: 305, question: "Meaning of 'abundant':", options: ["Very few", "Plentiful", "Scarce", "None"], correct: "Plentiful" },
          { id: 306, question: "Opposite of 'difficult':", options: ["Hard", "Easy", "Tough", "Severe"], correct: "Easy" },
          { id: 307, question: "Context clues help to:", options: ["Pronounce words", "Guess meanings", "Write essays", "Spell names"], correct: "Guess meanings" },
          { id: 308, question: "A word with similar meaning is:", options: ["Antonym", "Synonym", "Acronym", "Homophone"], correct: "Synonym" },
          { id: 309, question: "Opposite of 'increase':", options: ["Grow", "Rise", "Decrease", "Expand"], correct: "Decrease" },
          { id: 310, question: "'Bright' antonym:", options: ["Shiny", "Clever", "Dim", "Smart"], correct: "Dim" }
        ]
      }
    ]
  },
  biology: {
    title: "Biology", 
    lesson: "Evolution",
    icon: "🧬",
    color: "from-emerald-400 to-teal-600",
    notes: [
      {
        title: "Theory of Evolution",
        url: "/content/biology/evolution-theory.pdf",
        description: "Darwin's theory and natural selection"
      },
      {
        title: "Evidence of Evolution",
        url: "/content/biology/evolution-evidence.pdf",
        description: "Fossil records and comparative anatomy"
      }
    ],
    videos: [
      {
        title: "Introduction to Evolution",
        url: "/content/biology/intro-evolution.mp4",
        duration: "17:10",
        description: "Basic concepts of evolution and natural selection"
      },
      {
        title: "Human Evolution",
        url: "/content/biology/human-evolution.mp4",
        duration: "15:25",
        description: "The evolution of humans from early ancestors"
      }
    ],
    assignments: [
      { id: 1, question: "Who proposed the theory of evolution by natural selection?", type: "text" },
      { id: 2, question: "What is natural selection? Explain with an example", type: "text" },
      { id: 3, question: "Define evolution in your own words", type: "text" },
      { id: 4, question: "What are fossils and how do they provide evidence for evolution?", type: "text" },
      { id: 5, question: "Explain the concept of 'survival of the fittest'", type: "text" },
      { id: 6, question: "What is adaptation? Give two examples", type: "text" },
      { id: 7, question: "How do vestigial organs support the theory of evolution?", type: "text" },
      { id: 8, question: "What is speciation?", type: "text" },
      { id: 9, question: "Explain how the giraffe's long neck evolved according to Darwin", type: "text" },
      { id: 10, question: "What is the difference between evolution and revolution?", type: "text" }
    ],
    quiz: [
      {
        id: 1,
        question: "Who wrote 'On the Origin of Species'?",
        options: ["Mendel", "Darwin", "Lamarck", "Wallace"],
        correct: "Darwin"
      },
      {
        id: 2,
        question: "Natural selection leads to:",
        options: ["Extinction", "Evolution", "Revolution", "Mutation"],
        correct: "Evolution"
      },
      {
        id: 3,
        question: "Fossils are found in:",
        options: ["Igneous rocks", "Sedimentary rocks", "Metamorphic rocks", "All rocks"],
        correct: "Sedimentary rocks"
      },
      {
        id: 4,
        question: "Which is an example of vestigial organ in humans?",
        options: ["Heart", "Appendix", "Liver", "Kidney"],
        correct: "Appendix"
      },
      {
        id: 5,
        question: "The process by which new species are formed is called:",
        options: ["Adaptation", "Mutation", "Speciation", "Selection"],
        correct: "Speciation"
      },
      {
        id: 6,
        question: "Homologous organs have:",
        options: ["Same function", "Same structure", "Same origin", "Same size"],
        correct: "Same origin"
      },
      {
        id: 7,
        question: "The study of fossils is called:",
        options: ["Geology", "Paleontology", "Archaeology", "Anthropology"],
        correct: "Paleontology"
      },
      {
        id: 8,
        question: "Which factor does NOT affect natural selection?",
        options: ["Variation", "Inheritance", "Time of day", "Selection pressure"],
        correct: "Time of day"
      },
      {
        id: 9,
        question: "Analogous organs have:",
        options: ["Same origin", "Same structure", "Same function", "Same genes"],
        correct: "Same function"
      },
      {
        id: 10,
        question: "Evolution is a:",
        options: ["Fact", "Theory", "Hypothesis", "Law"],
        correct: "Theory"
      }
    ],
    units: [
      {
        lesson: "Evolution",
        notes: [
          { title: "Theory of Evolution", url: "/content/biology/evolution-theory.pdf", description: "Darwin's theory and natural selection" },
          { title: "Evidence of Evolution", url: "/content/biology/evolution-evidence.pdf", description: "Fossil records and comparative anatomy" }
        ],
        videos: [
          { title: "Introduction to Evolution", url: "/content/biology/intro-evolution.mp4", duration: "17:10", description: "Basic concepts of evolution and natural selection" },
          { title: "Human Evolution", url: "/content/biology/human-evolution.mp4", duration: "15:25", description: "The evolution of humans from early ancestors" }
        ],
        assignments: [
          { id: 1, question: "Who proposed the theory of evolution by natural selection?", type: "text" },
          { id: 2, question: "What is natural selection? Explain with an example", type: "text" },
          { id: 3, question: "Define evolution in your own words", type: "text" },
          { id: 4, question: "What are fossils and how do they provide evidence for evolution?", type: "text" },
          { id: 5, question: "Explain the concept of 'survival of the fittest'", type: "text" },
          { id: 6, question: "What is adaptation? Give two examples", type: "text" },
          { id: 7, question: "How do vestigial organs support the theory of evolution?", type: "text" },
          { id: 8, question: "What is speciation?", type: "text" },
          { id: 9, question: "Explain how the giraffe's long neck evolved according to Darwin", type: "text" },
          { id: 10, question: "What is the difference between evolution and revolution?", type: "text" }
        ],
        quiz: [
          { id: 1, question: "Who wrote 'On the Origin of Species'?", options: ["Mendel", "Darwin", "Lamarck", "Wallace"], correct: "Darwin" },
          { id: 2, question: "Natural selection leads to:", options: ["Extinction", "Evolution", "Revolution", "Mutation"], correct: "Evolution" },
          { id: 3, question: "Fossils are found in:", options: ["Igneous rocks", "Sedimentary rocks", "Metamorphic rocks", "All rocks"], correct: "Sedimentary rocks" },
          { id: 4, question: "Which is an example of vestigial organ in humans?", options: ["Heart", "Appendix", "Liver", "Kidney"], correct: "Appendix" },
          { id: 5, question: "The process by which new species are formed is called:", options: ["Adaptation", "Mutation", "Speciation", "Selection"], correct: "Speciation" },
          { id: 6, question: "Homologous organs have:", options: ["Same function", "Same structure", "Same origin", "Same size"], correct: "Same origin" },
          { id: 7, question: "The study of fossils is called:", options: ["Geology", "Paleontology", "Archaeology", "Anthropology"], correct: "Paleontology" },
          { id: 8, question: "Which factor does NOT affect natural selection?", options: ["Variation", "Inheritance", "Time of day", "Selection pressure"], correct: "Time of day" },
          { id: 9, question: "Analogous organs have:", options: ["Same origin", "Same structure", "Same function", "Same genes"], correct: "Same function" },
          { id: 10, question: "Evolution is a:", options: ["Fact", "Theory", "Hypothesis", "Law"], correct: "Theory" }
        ]
      },
      {
        lesson: "Animal Kingdom",
        notes: [
          { title: "Classification Basics", url: "/content/biology/animal-kingdom-classification.pdf", description: "Levels and principles of classification" },
          { title: "Chordates vs Non-chordates", url: "/content/biology/chordates.pdf", description: "Key differences and examples" }
        ],
        videos: [
          { title: "Introduction to Animal Kingdom", url: "/content/biology/animal-kingdom.mp4", duration: "16:35", description: "Overview of major phyla" },
          { title: "Vertebrates & Invertebrates", url: "/content/biology/vertebrates.mp4", duration: "14:55", description: "Characteristics and examples" }
        ],
        assignments: [
          { id: 401, question: "Define taxonomy.", type: "text" },
          { id: 402, question: "Differentiate vertebrates and invertebrates.", type: "text" },
          { id: 403, question: "Write two examples for Arthropoda.", type: "text" },
          { id: 404, question: "What is binomial nomenclature?", type: "text" },
          { id: 405, question: "List three characteristics of Chordates.", type: "text" },
          { id: 406, question: "Give two examples of Amphibia.", type: "text" },
          { id: 407, question: "What is metamerism?", type: "text" },
          { id: 408, question: "Name the phylum of earthworm.", type: "text" },
          { id: 409, question: "Write features of Mammalia.", type: "text" },
          { id: 410, question: "Which phylum includes starfish?", type: "text" }
        ],
        quiz: [
          { id: 401, question: "Phylum of earthworm:", options: ["Annelida", "Arthropoda", "Mollusca", "Echinodermata"], correct: "Annelida" },
          { id: 402, question: "Mammals have:", options: ["Feathers", "Scales", "Mammary glands", "Gills"], correct: "Mammary glands" },
          { id: 403, question: "Insects belong to:", options: ["Mollusca", "Arthropoda", "Cnidaria", "Porifera"], correct: "Arthropoda" },
          { id: 404, question: "Vertebrates possess:", options: ["Notochord", "Backbone", "Segmentation only", "Radial symmetry"], correct: "Backbone" },
          { id: 405, question: "Starfish belongs to:", options: ["Annelida", "Echinodermata", "Platyhelminthes", "Chordata"], correct: "Echinodermata" },
          { id: 406, question: "Snails belong to:", options: ["Mollusca", "Annelida", "Arthropoda", "Nematoda"], correct: "Mollusca" },
          { id: 407, question: "Fishes respire using:", options: ["Lungs", "Skin", "Gills", "Trachea"], correct: "Gills" },
          { id: 408, question: "Binomial nomenclature uses:", options: ["One name", "Two names", "Three names", "Code"], correct: "Two names" },
          { id: 409, question: "Non-chordates lack:", options: ["Heart", "Notochord", "Digestive system", "Nervous system"], correct: "Notochord" },
          { id: 410, question: "Amphibians live:", options: ["Only in water", "Only on land", "Both land and water", "Air only"], correct: "Both land and water" }
        ]
      }
    ]
  },
  punjabi: {
    title: "ਪੰਜਾਬੀ (Punjabi)",
    lesson: "ਭਾਸ਼ਾ ਦੇ ਮੂਲ ਤੱਤ (Language Basics)",
    icon: "🎭",
    color: "from-orange-400 to-red-600",
    notes: [
      {
        title: "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ (Punjabi Alphabet)",
        url: "/content/punjabi/alphabet.pdf",
        description: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੇ ਅੱਖਰ (Gurmukhi script letters)"
      },
      {
        title: "ਸ਼ਬਦ ਰਚਨਾ (Word Formation)",
        url: "/content/punjabi/word-formation.pdf",
        description: "ਸ਼ਬਦਾਂ ਦੀ ਬਣਤਰ ਅਤੇ ਵਰਤੋਂ (Structure and usage of words)"
      }
    ],
    videos: [
      {
        title: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਪਰਿਚਯ (Introduction to Punjabi)",
        url: "/content/punjabi/intro-punjabi.mp4",
        duration: "16:30",
        description: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੇ ਮੂਲ ਸਿਧਾਂਤ (Basic principles of Punjabi language)"
      },
      {
        title: "ਗੁਰਮੁਖੀ ਲਿਪੀ (Gurmukhi Script)",
        url: "/content/punjabi/gurmukhi-script.mp4",
        duration: "14:20",
        description: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਅਧਿਐਨ (Study of Gurmukhi script)"
      }
    ],
    assignments: [
      { id: 1, question: "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ? (How many letters are in Punjabi alphabet?)", type: "text" },
      { id: 2, question: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੇ ਜਨਕ ਕੌਣ ਹਨ? (Who is the creator of Gurmukhi script?)", type: "text" },
      { id: 3, question: "ਪੰਜ ਸਵਰ ਲਿਖੋ (Write five vowels)", type: "text" },
      { id: 4, question: "ਪੰਜਾਬੀ ਵਿੱਚ 'ਸਕੂਲ' ਸ਼ਬਦ ਦਾ ਅਰਥ ਕੀ ਹੈ? (What does 'school' mean in Punjabi?)", type: "text" },
      { id: 5, question: "ਪੰਜ ਵਿਅੰਜਨ ਲਿਖੋ (Write five consonants)", type: "text" },
      { id: 6, question: "ਪੰਜਾਬੀ ਵਿੱਚ ਇੱਕ ਵਾਕ ਲਿਖੋ (Write one sentence in Punjabi)", type: "text" },
      { id: 7, question: "ਮਾਤ੍ਰਾ ਕੀ ਹੁੰਦੀ ਹੈ? (What is a matra?)", type: "text" },
      { id: 8, question: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਮਹੱਤਵ ਲਿਖੋ (Write the importance of Punjabi language)", type: "text" },
      { id: 9, question: "ਤਿੰਨ ਮਾਤ੍ਰਾਵਾਂ ਦੇ ਨਾਮ ਲਿਖੋ (Write names of three matras)", type: "text" },
      { id: 10, question: "ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਇੱਕ ਮਹਾਨ ਕਵੀ ਦਾ ਨਾਮ ਲਿਖੋ (Write name of a great Punjabi poet)", type: "text" }
    ],
    quiz: [
      { id: 1, question: "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ? (How many letters in Punjabi alphabet?)", options: ["35", "38", "41", "44"], correct: "41" },
      { id: 2, question: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੇ ਜਨਕ ਕੌਣ ਹਨ? (Who created Gurmukhi script?)", options: ["ਗੁਰੂ ਨਾਨਕ", "ਗੁਰੂ ਅੰਗਦ", "ਗੁਰੂ ਅਰਜਨ", "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ"], correct: "ਗੁਰੂ ਅੰਗਦ" },
      { id: 3, question: "ਪਹਿਲਾ ਸਵਰ ਕਿਹੜਾ ਹੈ? (What is the first vowel?)", options: ["ਅ", "ਆ", "ਇ", "ਈ"], correct: "ਅ" },
      { id: 4, question: "'ਪੁਸਤਕ' ਦਾ ਅਰਥ ਕੀ ਹੈ? (What does 'pustak' mean?)", options: ["ਕਲਮ", "ਕਿਤਾਬ", "ਕਾਗਜ਼", "ਮੇਜ਼"], correct: "ਕਿਤਾਬ" },
      { id: 5, question: "ਪਹਿਲਾ ਵਿਅੰਜਨ ਕਿਹੜਾ ਹੈ? (What is the first consonant?)", options: ["ਸ", "ਹ", "ਕ", "ਗ"], correct: "ਸ" },
      { id: 6, question: "ਮਾਤ੍ਰਾ ਕਿਸ ਨਾਲ ਲਗਾਈ ਜਾਂਦੀ ਹੈ? (Matra is attached to what?)", options: ["ਸਵਰ", "ਵਿਅੰਜਨ", "ਸ਼ਬਦ", "ਵਾਕ"], correct: "ਵਿਅੰਜਨ" },
      { id: 7, question: "'ਸਕੂਲ' ਸ਼ਬਦ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ? (How many letters in 'school'?)", options: ["3", "4", "5", "6"], correct: "4" },
      { id: 8, question: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਕਿਸ ਲਿਪੀ ਵਿੱਚ ਲਿਖੀ ਜਾਂਦੀ ਹੈ? (In which script is Punjabi written?)", options: ["ਦੇਵਨਾਗਰੀ", "ਗੁਰਮੁਖੀ", "ਰੋਮਨ", "ਅਰਬੀ"], correct: "ਗੁਰਮੁਖੀ" },
      { id: 9, question: "ਸਿਹਾਰੀ ਮਾਤ੍ਰਾ ਕਿਹੜੀ ਹੈ? (Which is the sihari matra?)", options: ["ਾ", "ਿ", "ੀ", "ੁ"], correct: "ਿ" },
      { id: 10, question: "'ਪੰਜਾਬ' ਸ਼ਬਦ ਦਾ ਅਰਥ ਕੀ ਹੈ? (What does 'Punjab' mean?)", options: ["ਪੰਜ ਪਾਣੀ", "ਪੰਜ ਆਬ", "ਪੰਜ ਨਦੀਆਂ", "ਸਾਰੇ ਸਹੀ"], correct: "ਸਾਰੇ ਸਹੀ" }
    ],
    units: [
      {
        lesson: "ਭਾਸ਼ਾ ਦੇ ਮੂਲ ਤੱਤ (Language Basics)",
        notes: [
          { title: "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ (Punjabi Alphabet)", url: "/content/punjabi/alphabet.pdf", description: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੇ ਅੱਖਰ (Gurmukhi script letters)" },
          { title: "ਸ਼ਬਦ ਰਚਨਾ (Word Formation)", url: "/content/punjabi/word-formation.pdf", description: "ਸ਼ਬਦਾਂ ਦੀ ਬਣਤਰ ਅਤੇ ਵਰਤੋਂ (Structure and usage of words)" }
        ],
        videos: [
          { title: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਪਰਿਚਯ (Introduction to Punjabi)", url: "/content/punjabi/intro-punjabi.mp4", duration: "16:30", description: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੇ ਮੂਲ ਸਿਧਾਂਤ (Basic principles of Punjabi language)" },
          { title: "ਗੁਰਮੁਖੀ ਲਿਪੀ (Gurmukhi Script)", url: "/content/punjabi/gurmukhi-script.mp4", duration: "14:20", description: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਅਧਿਐਨ (Study of Gurmukhi script)" }
        ],
        assignments: [
          { id: 1, question: "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ? (How many letters are in Punjabi alphabet?)", type: "text" },
          { id: 2, question: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੇ ਜਨਕ ਕੌਣ ਹਨ? (Who is the creator of Gurmukhi script?)", type: "text" },
          { id: 3, question: "ਪੰਜ ਸਵਰ ਲਿਖੋ (Write five vowels)", type: "text" },
          { id: 4, question: "ਪੰਜਾਬੀ ਵਿੱਚ 'ਸਕੂਲ' ਸ਼ਬਦ ਦਾ ਅਰਥ ਕੀ ਹੈ? (What does 'school' mean in Punjabi?)", type: "text" },
          { id: 5, question: "ਪੰਜ ਵਿਅੰਜਨ ਲਿਖੋ (Write five consonants)", type: "text" },
          { id: 6, question: "ਪੰਜਾਬੀ ਵਿੱਚ ਇੱਕ ਵਾਕ ਲਿਖੋ (Write one sentence in Punjabi)", type: "text" },
          { id: 7, question: "ਮਾਤ੍ਰਾ ਕੀ ਹੁੰਦੀ ਹੈ? (What is a matra?)", type: "text" },
          { id: 8, question: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਮਹੱਤਵ ਲਿਖੋ (Write the importance of Punjabi language)", type: "text" },
          { id: 9, question: "ਤਿੰਨ ਮਾਤ੍ਰਾਵਾਂ ਦੇ ਨਾਮ ਲਿਖੋ (Write names of three matras)", type: "text" },
          { id: 10, question: "ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਇੱਕ ਮਹਾਨ ਕਵੀ ਦਾ ਨਾਮ ਲਿਖੋ (Write name of a great Punjabi poet)", type: "text" }
        ],
        quiz: [
          { id: 1, question: "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ? (How many letters in Punjabi alphabet?)", options: ["35", "38", "41", "44"], correct: "41" },
          { id: 2, question: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੇ ਜਨਕ ਕੌਣ ਹਨ? (Who created Gurmukhi script?)", options: ["ਗੁਰੂ ਨਾਨਕ", "ਗੁਰੂ ਅੰਗਦ", "ਗੁਰੂ ਅਰਜਨ", "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ"], correct: "ਗੁਰੂ ਅੰਗਦ" },
          { id: 3, question: "ਪਹਿਲਾ ਸਵਰ ਕਿਹੜਾ ਹੈ? (What is the first vowel?)", options: ["ਅ", "ਆ", "ਇ", "ਈ"], correct: "ਅ" },
          { id: 4, question: "'ਪੁਸਤਕ' ਦਾ ਅਰਥ ਕੀ ਹੈ? (What does 'pustak' mean?)", options: ["ਕਲਮ", "ਕਿਤਾਬ", "ਕਾਗਜ਼", "ਮੇਜ਼"], correct: "ਕਿਤਾਬ" },
          { id: 5, question: "ਪਹਿਲਾ ਵਿਅੰਜਨ ਕਿਹੜਾ ਹੈ? (What is the first consonant?)", options: ["ਸ", "ਹ", "ਕ", "ਗ"], correct: "ਸ" },
          { id: 6, question: "ਮਾਤ੍ਰਾ ਕਿਸ ਨਾਲ ਲਗਾਈ ਜਾਂਦੀ ਹੈ? (Matra is attached to what?)", options: ["ਸਵਰ", "ਵਿਅੰਜਨ", "ਸ਼ਬਦ", "ਵਾਕ"], correct: "ਵਿਅੰਜਨ" },
          { id: 7, question: "'ਸਕੂਲ' ਸ਼ਬਦ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ? (How many letters in 'school'?)", options: ["3", "4", "5", "6"], correct: "4" },
          { id: 8, question: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਕਿਸ ਲਿਪੀ ਵਿੱਚ ਲਿਖੀ ਜਾਂਦੀ ਹੈ? (In which script is Punjabi written?)", options: ["ਦੇਵਨਾਗਰੀ", "ਗੁਰਮੁਖੀ", "ਰੋਮਨ", "ਅਰਬੀ"], correct: "ਗੁਰਮੁਖੀ" },
          { id: 9, question: "ਸਿਹਾਰੀ ਮਾਤ੍ਰਾ ਕਿਹੜੀ ਹੈ? (Which is the sihari matra?)", options: ["ਾ", "ਿ", "ੀ", "ੁ"], correct: "ਿ" },
          { id: 10, question: "'ਪੰਜਾਬ' ਸ਼ਬਦ ਦਾ ਅਰਥ ਕੀ ਹੈ? (What does 'Punjab' mean?)", options: ["ਪੰਜ ਪਾਣੀ", "ਪੰਜ ਆਬ", "ਪੰਜ ਨਦੀਆਂ", "ਸਾਰੇ ਸਹੀ"], correct: "ਸਾਰੇ ਸਹੀ" }
        ]
      }
    ]
  },
};

export function getContentByGrade(
  subject: keyof typeof SUBJECT_CONTENT,
  grade: "8" | "9" | "10",
  unitIndex: number = 0
) {
  const base = SUBJECT_CONTENT[subject] as any;
  const units = (base.units as Array<any>) ?? [
    {
      lesson: base.lesson,
      notes: base.notes,
      videos: base.videos,
      assignments: base.assignments,
      quiz: base.quiz,
    },
  ];

  const difficulty =
    grade === "8" ? "basic" : grade === "9" ? "intermediate" : "advanced";

  const safeIndex = Math.min(Math.max(unitIndex, 0), units.length - 1);
  const unit = units[safeIndex];

  return {
    title: base.title,
    lesson: unit.lesson,
    notes: unit.notes,
    videos: unit.videos,
    assignments: unit.assignments,
    quiz: unit.quiz,
    difficulty,
  };
}