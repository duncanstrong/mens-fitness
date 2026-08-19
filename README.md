# FitAdvisor - Men's Fitness Web App

A personalized fitness coaching web application designed to help men achieve their fitness goals through tailored workout plans, nutrition guidance, and progress tracking.

## Features

### 🏋️ Fitness Assessment
- Comprehensive profile questionnaire
- Factors considered:
  - Age and experience level
  - Primary fitness goal (muscle building, fat loss, strength, endurance, overall fitness)
  - Available training frequency
  - Available equipment
  - Current injuries or limitations

### 💪 Personalized Workout Plans
- Multiple evidence-based training splits:
  - **Upper/Lower Split** (2-4 days/week)
  - **Push/Pull/Legs (PPL)** (3-6 days/week)
  - **Full Body** (2-3 days/week)
  - **Strength Focus** (4+ days/week)
  - **Bodyweight Training** (minimal equipment)

- Plans tailored to:
  - Experience level (Beginner, Intermediate, Advanced)
  - Fitness goals
  - Available training frequency
  - Equipment access

### 🥗 Nutrition Guidance
- **Macro Calculator**: Personalized macronutrient recommendations based on:
  - Body weight
  - Fitness goal
  - Training frequency

- **Nutrition Tips**:
  - Protein intake guidelines
  - Hydration recommendations
  - Meal timing strategies
  - Post-workout nutrition
  - Micronutrient guidance

### 📊 Progress Tracking
- Log measurements including:
  - Body weight
  - Waist circumference
  - Chest size
  - Arm size
  - Leg size

- Visual progress history
- Automatic change calculation
- Local data storage (no login required)

## Getting Started

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/duncanstrong/mens-fitness.git
   cd mens-fitness
   ```

2. Open `index.html` in your web browser
   - No build process or dependencies required
   - Fully client-side application

### Usage
1. **Take the Assessment**: Complete the fitness profile questionnaire
2. **Receive Recommendations**: Get a personalized workout plan
3. **Review Nutrition Guidance**: Calculate your macros and review nutrition tips
4. **Track Progress**: Log your measurements weekly or bi-weekly
5. **Adjust as Needed**: Update your profile based on progress

## Technology Stack
- **HTML5**: Semantic markup and form structure
- **CSS3**: Modern styling with CSS Grid and Flexbox, responsive design
- **JavaScript**: Client-side logic and local data persistence
- **LocalStorage**: Client-side data persistence (no backend required)

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Works offline (all functionality client-side)

## File Structure
```
mens-fitness/
├── index.html       # Main HTML structure
├── styles.css       # Styling and responsive design
├── app.js          # Application logic
└── README.md       # Documentation
```

## Features in Detail

### Workout Plans
Each plan includes:
- Recommended exercises with sets/reps
- Session duration estimates
- Difficulty rating
- Training frequency recommendations

### Macro Calculator
Provides daily targets for:
- **Protein**: 0.8-1.1g per lb (varies by goal)
- **Fat**: 0.25-0.35g per lb
- **Carbohydrates**: 0.75-1.5g per lb
- **Total Calories**: Derived from macros

Goal-specific ratios:
- **Muscle Building**: Higher calories and carbs for energy and growth
- **Fat Loss**: Higher protein (preserve muscle), lower carbs
- **Maintenance**: Balanced approach

### Progress Tracking
- Automatic calculation of changes from previous entry
- Historical data visualization
- No data limits (stored locally)

## Important Disclaimer

⚠️ **Medical Disclaimer**: This app provides general fitness information and should not be considered medical advice. Always consult with healthcare providers before starting any new exercise program, especially if you have pre-existing conditions or injuries.

## Tips for Success

1. **Start Conservatively**: Begin with lighter weights to master proper form
2. **Progressive Overload**: Gradually increase weight, reps, or intensity
3. **Consistency**: Train regularly on your scheduled days
4. **Recovery**: Allow adequate rest between sessions
5. **Nutrition**: Combine the recommended macros with consistent training
6. **Tracking**: Log your workouts and measurements regularly
7. **Adjustments**: Update your plan based on progress and feedback

## Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues.

## License
MIT License - Feel free to use this project for personal or commercial purposes.

## Support
For questions or issues, please open an issue on GitHub or contact the developer.

---

**Built with dedication to your fitness journey. 💪**
