# Pustak Ghar - Study Resources Platform

## Overview

Pustak Ghar is a comprehensive platform that provides free study materials, notes, previous year questions (PYQs), video playlists, and more for university students. The platform is designed to help students "Crush the Test and Unleash Success" by offering organized educational resources.

## Features

- **University/Course Selection**: Users can select their university and course to access relevant materials
- **Branch/Year Navigation**: Filter resources by academic branch and year
- **Subject-wise Resources**: Access notes, videos, PYQs, and syllabus for each subject
- **Responsive Design**: Works on both desktop and mobile devices
- **Modern UI**: Animated gradient background with clean interface

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS with animations
- **Routing**: React Router
- **State Management**: React Hooks (useState, useEffect)
- **Data Structure**: JSON-based resource organization

## Project Structure

```
/src
├── assets/                 # Image assets
├── components/
│   ├── Branches.jsx        # Main data structure
│   ├── Content.jsx        # Subject content display
│   ├── NavBar.jsx         # Navigation bar component
│   ├── NoNavbarpath.jsx   # Paths without navbar
│   ├── ResourcesData.jsx  # Additional resource data
│   ├── SearchBook.jsx     # Main search component
│   ├── SearchBranch.jsx   # Branch/year selection
│   ├── SubjectSelect.jsx  # Subject selection
│   └── SubjectDetails.jsx # Detailed subject view
├── styles/
│   ├── NavBar.css         # Navigation bar styling
│   └── SearchBook.css     # Main page styling
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pustak-ghar.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pustak-ghar
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Select your university and course from the dropdown menus
2. Choose your academic branch and year
3. Browse available subjects
4. Click on a subject to view all available resources:
   - Notes
   - Video tutorials
   - Previous year questions
   - Syllabus

## Data Structure

The platform uses a hierarchical JSON structure (`Branches.jsx`) to organize resources:

```
University → Courses → Branches → Years → Subjects → Resources
```

Each subject contains:
- Notes (with titles and links)
- YouTube tutorial links
- Previous year questions
- Syllabus information

## Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- Add user authentication
- Implement resource upload functionality
- Add search across all resources
- Include user ratings/reviews for resources
- Expand university/course coverage

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


