// Fitness Advisor App - JavaScript

// Dark Mode Management
const DARK_MODE_KEY = 'fitadvisor-dark-mode';

function initializeDarkMode() {
  // Check localStorage for saved preference
  const savedMode = localStorage.getItem(DARK_MODE_KEY);
  
  // Check system preference if no saved preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Use saved preference, otherwise use system preference
  const shouldBeDark = savedMode !== null ? JSON.parse(savedMode) : prefersDark;
  
  if (shouldBeDark) {
    document.body.classList.add('dark-mode');
    updateThemeToggleIcon(true);
  }
}

function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem(DARK_MODE_KEY, JSON.stringify(isDarkMode));
  updateThemeToggleIcon(isDarkMode);
}

function updateThemeToggleIcon(isDarkMode) {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.querySelector('.theme-icon').textContent = isDarkMode ? '☀️' : '🌙';
  }
}

// Sample workout data
const workoutPlans = {
  beginner_muscle_2: {
    name: 'Upper/Lower Split (2 Days)',
    duration: '45-60 min',
    difficulty: 'Beginner',
    description: 'Perfect for beginners with limited time. Focus on compound movements.',
    exercises: [
      'Barbell Squats - 3x5',
      'Barbell Bench Press - 3x5',
      'Barbell Rows - 3x5',
      'Leg Press - 3x8',
      'Dumbbell Flyes - 3x8'
    ]
  },
  beginner_muscle_3: {
    name: 'PPL (3 Days)',
    duration: '60-75 min',
    difficulty: 'Beginner',
    description: 'Push/Pull/Legs split. Great for full-body development.',
    exercises: [
      'Push Day: Bench Press, Shoulder Press, Incline Press',
      'Pull Day: Rows, Pull-ups, Face Pulls',
      'Leg Day: Squats, Deadlifts, Leg Press'
    ]
  },
  intermediate_muscle_4: {
    name: 'Upper/Lower (4 Days)',
    duration: '60-90 min',
    difficulty: 'Intermediate',
    description: 'Advanced hypertrophy split for muscle building.',
    exercises: [
      'Upper A: Heavy compounds + accessories',
      'Lower A: Squats + quad focus',
      'Upper B: Heavy rows + chest variations',
      'Lower B: Deadlifts + hamstring focus'
    ]
  },
  beginner_fat_loss_3: {
    name: 'Full Body Circuit (3 Days)',
    duration: '45-60 min',
    difficulty: 'Beginner',
    description: 'High intensity circuits for fat loss.',
    exercises: [
      'Burpees - 3x12',
      'Jump Squats - 3x12',
      'Mountain Climbers - 3x30 sec',
      'Push-ups - 3x10-15',
      'Running in place - 3x30 sec'
    ]
  },
  intermediate_strength_4: {
    name: 'Strength Focus (4 Days)',
    duration: '75-90 min',
    difficulty: 'Intermediate',
    description: 'Linear periodization for maximal strength.',
    exercises: [
      'Day 1: Bench Press - 5x3, Squats - 5x3',
      'Day 2: Deadlifts - 5x1, Rows - 5x3',
      'Day 3: Overhead Press - 5x3, Leg Press - 5x3',
      'Day 4: Accessory work and weak point training'
    ]
  },
  advanced_overall_5: {
    name: 'Advanced PPLX (5 Days)',
    duration: '90+ min',
    difficulty: 'Advanced',
    description: 'For serious lifters. PPLX = Push, Pull, Legs, X (Weak point day).',
    exercises: [
      'Push Day: Multiple pressing variations',
      'Pull Day: Multiple row/pull variations',
      'Legs 1: Quad focus',
      'Legs 2: Deadlift focus',
      'Weak Point Day: Address your limitations'
    ]
  },
  minimal_endurance_3: {
    name: 'Bodyweight Endurance (3 Days)',
    duration: '30-45 min',
    difficulty: 'Beginner',
    description: 'No equipment needed. Build cardiovascular fitness.',
    exercises: [
      'Running - 20-30 min',
      'Bodyweight circuit: Push-ups, squats, lunges',
      'Jump rope - 3x2 min',
      'High knees - 3x30 sec'
    ]
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initializeDarkMode();
  setupEventListeners();
  loadProgressData();
  displayWorkoutOptions();
});

function setupEventListeners() {
  document.getElementById('assessmentForm').addEventListener('submit', handleAssessment);
  document.getElementById('progressForm').addEventListener('submit', handleProgressEntry);
  document.getElementById('progressDate').valueAsDate = new Date();
  document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
}

function handleAssessment(e) {
  e.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  const experience = document.getElementById('experience').value;
  const goal = document.getElementById('goal').value;
  const frequency = document.getElementById('frequency').value;
  const equipment = document.getElementById('equipment').value;
  const injuries = document.getElementById('injuries').value;

  if (!age || !experience || !goal || !frequency || !equipment) {
    alert('Please fill in all required fields');
    return;
  }

  const recommendation = getWorkoutRecommendation(experience, goal, frequency, equipment);
  displayAssessmentResults(age, experience, goal, frequency, recommendation, injuries);
}

function getWorkoutRecommendation(experience, goal, frequency, equipment) {
  const key = `${experience}_${goal}_${frequency}`;
  return workoutPlans[key] || getDefaultPlan(experience, frequency);
}

function getDefaultPlan(experience, frequency) {
  // Fallback recommendations
  const fallbacks = {
    beginner_2: workoutPlans.beginner_muscle_2,
    beginner_3: workoutPlans.beginner_muscle_3,
    intermediate_4: workoutPlans.intermediate_muscle_4,
    advanced_5: workoutPlans.advanced_overall_5
  };
  return fallbacks[`${experience}_${frequency}`] || workoutPlans.beginner_muscle_3;
}

function displayAssessmentResults(age, experience, goal, frequency, plan, injuries) {
  const resultsDiv = document.getElementById('assessmentResults');
  resultsDiv.classList.remove('hidden');

  const injuryNote = injuries ? `<p><strong>Note on your injury:</strong> ${injuries}</p>` : '';

  resultsDiv.innerHTML = `
    <h3>Your Personalized Fitness Plan ✅</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin-bottom: 30px;">
      <div style="background: var(--bg-light); padding: 15px; border-radius: 8px; color: var(--text-dark);">
        <strong>Age:</strong> ${age}
      </div>
      <div style="background: var(--bg-light); padding: 15px; border-radius: 8px; color: var(--text-dark);">
        <strong>Level:</strong> ${capitalize(experience)}
      </div>
      <div style="background: var(--bg-light); padding: 15px; border-radius: 8px; color: var(--text-dark);">
        <strong>Goal:</strong> ${formatGoal(goal)}
      </div>
      <div style="background: var(--bg-light); padding: 15px; border-radius: 8px; color: var(--text-dark);">
        <strong>Frequency:</strong> ${frequency} days/week
      </div>
    </div>

    <h4 style="color: var(--secondary-color); margin-bottom: 15px;">${plan.name}</h4>
    <div style="background: linear-gradient(135deg, var(--secondary-color), #0a3d62); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <p><strong>Duration per session:</strong> ${plan.duration}</p>
      <p><strong>Difficulty:</strong> ${plan.difficulty}</p>
      <p style="margin-top: 15px; font-size: 0.95rem;">${plan.description}</p>
    </div>

    <h4 style="color: var(--secondary-color); margin-bottom: 15px;">Exercises:</h4>
    <ul style="margin-left: 20px; line-height: 1.8; color: var(--text-dark);">
      ${plan.exercises.map(ex => `<li>${ex}</li>`).join('')}
    </ul>

    ${injuryNote}

    <div style="background: #fff3cd; border-left: 4px solid #ff9800; padding: 15px; border-radius: 4px; margin-top: 20px;">
      <strong>💡 Pro Tips:</strong>
      <ul style="margin-left: 20px; margin-top: 10px;">
        <li>Start with lighter weights to master form</li>
        <li>Rest 48-72 hours between training the same muscle groups</li>
        <li>Warm up 5-10 minutes before each session</li>
        <li>Track your lifts to ensure progressive overload</li>
        <li>Combine this with proper nutrition for best results</li>
      </ul>
    </div>
  `;

  resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

function displayWorkoutOptions() {
  const container = document.getElementById('workoutsContainer');
  container.innerHTML = '';

  Object.values(workoutPlans).slice(0, 6).forEach(plan => {
    const card = document.createElement('div');
    card.className = 'workout-card';
    card.innerHTML = `
      <h4>${plan.name}</h4>
      <div class="meta">⏱️ ${plan.duration} | 📊 ${plan.difficulty}</div>
      <p>${plan.description}</p>
      <ul>
        ${plan.exercises.slice(0, 3).map(ex => `<li>${ex}</li>`).join('')}
      </ul>
      <button class="submit-button" style="grid-column: auto;" onclick="alert('Complete your assessment for personalized recommendations!')">Learn More</button>
    `;
    container.appendChild(card);
  });
}

function calculateMacros() {
  const weight = parseFloat(document.getElementById('bodyweight').value);
  const goal = document.getElementById('goalType').value;

  if (!weight || weight < 50) {
    alert('Please enter a valid body weight');
    return;
  }

  let protein, fat, carbs, calories;

  switch(goal) {
    case 'muscle':
      protein = weight * 1; // 1g per lb
      fat = weight * 0.35; // 0.35g per lb
      carbs = weight * 1.5; // 1.5g per lb
      calories = (protein + carbs) * 4 + fat * 9;
      break;
    case 'fat_loss':
      protein = weight * 1.1; // Higher protein to preserve muscle
      fat = weight * 0.25;
      carbs = weight * 0.75; // Lower carbs
      calories = (protein + carbs) * 4 + fat * 9;
      break;
    case 'maintenance':
      protein = weight * 0.8;
      fat = weight * 0.33;
      carbs = weight * 1;
      calories = (protein + carbs) * 4 + fat * 9;
      break;
  }

  displayMacroResults(protein, fat, carbs, calories);
}

function displayMacroResults(protein, fat, carbs, calories) {
  const resultsDiv = document.getElementById('macroResults');
  resultsDiv.innerHTML = `
    <p>
      <span>Daily Protein</span>
      <span class="macro-value">${protein.toFixed(0)}g</span>
    </p>
    <p>
      <span>Daily Fat</span>
      <span class="macro-value">${fat.toFixed(0)}g</span>
    </p>
    <p>
      <span>Daily Carbs</span>
      <span class="macro-value">${carbs.toFixed(0)}g</span>
    </p>
    <p style="border-top: 1px solid rgba(255,255,255,0.3); padding-top: 12px;">
      <span style="font-size: 1.1rem;">Daily Calories</span>
      <span class="macro-value" style="font-size: 1.3rem;">${calories.toFixed(0)}</span>
    </p>
  `;
}

function handleProgressEntry(e) {
  e.preventDefault();

  const entry = {
    date: document.getElementById('progressDate').value,
    weight: parseFloat(document.getElementById('weight').value),
    waist: parseFloat(document.getElementById('waist').value) || null,
    chest: parseFloat(document.getElementById('chest').value) || null,
    arms: parseFloat(document.getElementById('arms').value) || null,
    legs: parseFloat(document.getElementById('legs').value) || null
  };

  // Save to localStorage
  let progressData = JSON.parse(localStorage.getItem('progressData')) || [];
  progressData.push(entry);
  localStorage.setItem('progressData', JSON.stringify(progressData));

  // Clear form
  document.getElementById('progressForm').reset();
  document.getElementById('progressDate').valueAsDate = new Date();

  // Refresh display
  loadProgressData();
  alert('✅ Progress logged successfully!');
}

function loadProgressData() {
  const progressData = JSON.parse(localStorage.getItem('progressData')) || [];
  const listDiv = document.getElementById('progressList');

  if (progressData.length === 0) {
    listDiv.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 30px;">No progress entries yet. Start logging your measurements!</p>';
    return;
  }

  listDiv.innerHTML = progressData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((entry, idx) => {
      const prev = progressData[idx + 1];
      const weightChange = prev ? (entry.weight - prev.weight).toFixed(1) : 'N/A';
      const changeEmoji = prev ? (entry.weight < prev.weight ? '📉' : '📈') : '';

      return `
        <div class="progress-item">
          <div>
            <div class="progress-item-date">${new Date(entry.date).toLocaleDateString()}</div>
            <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 5px;">
              ${entry.waist ? `Waist: ${entry.waist}" | ` : ''}
              ${entry.chest ? `Chest: ${entry.chest}" | ` : ''}
              ${entry.arms ? `Arms: ${entry.arms}" | ` : ''}
              ${entry.legs ? `Legs: ${entry.legs}"` : ''}
            </div>
          </div>
          <div>
            <div class="progress-item-weight">${entry.weight} lbs</div>
            <div style="font-size: 0.85rem; color: var(--primary-color); text-align: right;">${changeEmoji} ${weightChange} lbs</div>
          </div>
        </div>
      `;
    }).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatGoal(goal) {
  const goalMap = {
    muscle: 'Build Muscle',
    fat_loss: 'Lose Fat',
    strength: 'Increase Strength',
    endurance: 'Build Endurance',
    overall: 'Overall Fitness'
  };
  return goalMap[goal] || goal;
}