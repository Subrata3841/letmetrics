# 🚀 LetMetrics

> **A cinematic LeetCode progress tracker with stunning visual effects**

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](#demo)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](package.json)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## 🎯 Overview

**LetMetrics** is a modern, cinematic web application that allows developers to track and visualize their LeetCode progress. Built with vanilla JavaScript and featuring stunning visual effects, it provides an immersive experience for monitoring coding achievements.

### ✨ Key Highlights

- **Cinematic UI**: Beautiful floating orbs, particle effects, and gradient animations
- **Real-time Data**: Fetches live statistics from LeetCode's GraphQL API
- **Responsive Design**: Optimized for all screen sizes and devices
- **Performance Optimized**: Smooth animations with efficient rendering
- **Professional Styling**: Modern design with Poppins font family

## 🌟 Features

| Feature | Description | Status |
|---------|-------------|--------|
| **User Search** | Enter any LeetCode username to fetch statistics | ✅ |
| **Progress Visualization** | Circular progress bars for Easy/Medium/Hard problems | ✅ |
| **Detailed Stats** | Comprehensive problem-solving statistics | ✅ |
| **Cinematic Effects** | Floating particles, orbs, and animated backgrounds | ✅ |
| **Responsive Layout** | Mobile-friendly design | ✅ |
| **Error Handling** | Graceful error messages and loading states | ✅ |
| **Scroll Management** | Smart scroll indicators and smooth transitions | ✅ |

## 🎬 Demo

### Screenshots

| Desktop View | Mobile View |
|--------------|-------------|
| ![Desktop](https://via.placeholder.com/400x300?text=Desktop+View) | ![Mobile](https://via.placeholder.com/200x300?text=Mobile+View) |

### Live Demo
[🔗 View Live Demo](https://your-demo-link.com) *(Replace with actual demo link)*

## 🛠️ Technologies Used

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **HTML5** | Latest | Structure and semantics |
| **CSS3** | Latest | Styling and animations |
| **JavaScript ES6+** | Latest | Interactive functionality |
| **Google Fonts** | Poppins | Typography |

### APIs & Services
- **LeetCode GraphQL API** - User statistics and problem data
- **Proxy Services** - CORS handling for API requests

## 📦 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API requests
- Local web server (optional, for development)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/letmetrics.git
   cd letmetrics
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using Python server
   python -m http.server 8000
   
   # Option 3: Using Node.js serve
   npx serve .
   ```

3. **Start tracking!**
   - Enter a valid LeetCode username
   - View your progress statistics
   - Enjoy the cinematic experience

## 🎮 Usage

### Basic Usage

1. **Enter Username**: Type your LeetCode username in the input field
2. **Click Search**: Press the search button to fetch your statistics
3. **View Progress**: Watch as your stats load with beautiful animations
4. **Explore Stats**: Scroll to see detailed problem-solving metrics

### Advanced Features

| Action | Description |
|--------|-------------|
| **Scroll Indicator** | Shows when more content is available below |
| **Responsive Adaptation** | Automatically adjusts to screen size |
| **Error Recovery** | Provides helpful messages for invalid usernames |
| **Animation Control** | Smooth transitions and optimized performance |

## 🔌 API Reference

### LeetCode GraphQL Endpoint

```javascript
// Primary endpoint
const API_URL = 'https://leetcode.com/graphql/';

// Query structure
const query = `
  query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      profile {
        realName
        aboutMe
        userAvatar
        location
        skillTags
        websites
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;
```

### Request Format

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `username` | String | Yes | Valid LeetCode username |
| `query` | String | Yes | GraphQL query string |

### Response Format

```json
{
  "data": {
    "matchedUser": {
      "profile": {
        "realName": "User Name",
        "userAvatar": "avatar_url",
        "location": "Location"
      },
      "submitStatsGlobal": {
        "acSubmissionNum": [
          {
            "difficulty": "Easy",
            "count": 150,
            "submissions": 200
          }
        ]
      }
    }
  }
}
```

## 📁 File Structure

```
LetMetrics/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Styling and animations
├── ⚡ script.js           # JavaScript functionality
├── 📖 README.md           # Project documentation
└── 🖼️ assets/             # Images and resources (optional)
    ├── 🎬 screenshots/     # Application screenshots
    └── 🎯 icons/           # Project icons
```

### File Descriptions

| File | Size | Purpose | Key Features |
|------|------|---------|--------------|
| `index.html` | ~3KB | Page structure | Semantic HTML, meta tags, accessibility |
| `style.css` | ~65KB | Visual styling | CSS animations, responsive design, themes |
| `script.js` | ~40KB | App logic | API integration, DOM manipulation, effects |

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

| Aspect | Standard |
|--------|----------|
| **JavaScript** | ES6+, JSDoc comments |
| **CSS** | BEM methodology, CSS custom properties |
| **HTML** | Semantic markup, accessibility |
| **Git** | Conventional commits |

### Issue Templates

- 🐛 **Bug Report**: Describe the issue with steps to reproduce
- ✨ **Feature Request**: Suggest new functionality
- 📚 **Documentation**: Improve or add documentation
- 🎨 **Design**: UI/UX improvements

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 LetMetrics Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

## 🆘 Support

### Get Help

| Method | Link | Response Time |
|--------|------|---------------|
| 📧 **Email** | support@letmetrics.com | 24-48 hours |
| 🐛 **Issues** | [GitHub Issues](https://github.com/yourusername/letmetrics/issues) | 1-3 days |
| 💬 **Discussions** | [GitHub Discussions](https://github.com/yourusername/letmetrics/discussions) | Community driven |

### FAQ

<details>
<summary><strong>Q: Why can't I see my private LeetCode data?</strong></summary>
<br>
A: LetMetrics only accesses publicly available LeetCode profile information. Make sure your profile is public in your LeetCode settings.
</details>

<details>
<summary><strong>Q: The application is loading slowly. What can I do?</strong></summary>
<br>
A: This might be due to CORS proxy limitations. Try refreshing the page or check your internet connection. The app uses external proxy services which might have rate limits.
</details>

<details>
<summary><strong>Q: Can I contribute new features?</strong></summary>
<br>
A: Absolutely! Check our contributing guidelines and open an issue to discuss your idea before implementing.
</details>

---

<div align="center">

### 🌟 Star this repo if you found it helpful!

**Made with ❤️ by the LetMetrics Team**

[⬆ Back to Top](#-letmetrics)

</div>
