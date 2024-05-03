import { Project } from 'src/app/shared/models/project';

export const Projects: Project[] = [
    {
        name: 'Daily Affirmations Alexa Skill',
        description:
            'I built this skill originally in college and have continued to improve on it. It is an Alexa skill for getting daily affirmations. Users can ask Alexa for an affirmation, and Alexa will respond with a positive affirmation. The skill is built using Node.js and the Alexa Skills Kit SDK.',
        url: 'https://www.amazon.com/dp/B07K14RC3J/',
        sourceCode: '',
        icon: 'github',
        date: '2024-01-25T00:00:00.000Z',
        image: 'assets/project-images/alexa-logo.png',
        tags: [{ tag: 'Node.js' }, { tag: 'Alexa Skills Kit' }],
        showProject: true
    },
    {
        name: 'HeartMind Therapy Notes',
        description:
            'HeartMind Therapy Notes app is a React-based application designed to streamline the process of creating mental health therapy notes. It features a quick form for therapists to fill out, which then automatically generates a comprehensive narrative note, enhancing efficiency and accuracy in documentation.',
        url: 'https://shinkhouse.github.io/therapy-notes',
        icon: 'github',
        date: '2024-01-01T00:00:00.000Z',
        image: 'assets/project-images/therapynotes.png',
        tags: [{ tag: 'React' }, { tag: 'TypeScript' }],
        showProject: true
    },
    {
        name: 'Angular Dashboard Example',
        description:
            'A simple dashboard application built with Angular and Angular Material, featuring a variety of custom components such as cards and dashboard elements. It offers a user-friendly interface with dark mode and density change options, providing a versatile and interactive experience for managing personal finances.',
        url: 'https://shinkhouse.github.io/angular-dashboard-example',
        sourceCode: 'https://www.github.com/shinkhouse/angular-dashboard-example',
        icon: 'github',
        date: '2023-12-30T00:00:00.000Z',
        image: 'assets/project-images/angular-dashboard-example.png',
        tags: [{ tag: 'Angular' }, { tag: 'Angular Material' }, { tag: 'TypeScript' }],
        showProject: true
    },
    {
        name: 'Spotify Clone',
        description:
            'A clone of the Spotify music streaming service built using Angular. Users can browse and search for songs, create playlists, and listen to music. The app is built using Angular, TypeScript, and utilizes the Spotify API for fetching music data.',
        url: 'https://shinkhouse.github.io/spotify-clone/home',
        sourceCode: 'https://www.github.com/shinkhouse/spotify-clone',
        icon: 'github',
        date: '2023-12-01T00:00:00.000Z',
        image: 'assets/project-images/spotify-clone.png',
        tags: [{ tag: 'Angular' }, { tag: 'TypeScript' }, { tag: 'REST API' }, { tag: 'Spotify' }],
        showProject: true
    },
    {
        name: 'Fizzbuzz Contacts',
        description:
            'A simple web app for managing contacts, inspired by Google Contacts. It allows users to add, edit, and delete contacts, as well as search for specific contacts. The app is built using Angular and TypeScript, and it utilizes a REST API for data storage and retrieval.',
        url: 'https://shinkhouse.github.io/fizzbuzz-contacts-portal/contacts',
        sourceCode: 'https://github.com/shinkhouse/fizzbuzz-contacts-portal',
        icon: 'github',
        date: '2023-12-15T00:00:00.000Z',
        image: 'assets/project-images/fizzbuzz-contacts.png',
        tags: [{ tag: 'Angular' }, { tag: 'TypeScript' }, { tag: 'REST API' }],
        showProject: true
    },
    {
        name: 'Send Feedback',
        description:
            'A clone of Google`s "Send Feedback" drawer, this feedback collection application allows users to submit feedback on a product or service, along with a screenshot, to report an issue or request a feature on a platform.',
        url: 'https://shinkhouse.github.io/send-feedback-v2',
        sourceCode: 'https://github.com/shinkhouse/send-feedback-v2',
        icon: 'github',
        date: '2023-11-01T00:00:00.000Z',
        image: 'assets/project-images/send-feedback-v2.png',
        tags: [{ tag: 'Angular' }, { tag: 'TypeScript' } ],
        showProject: true
    },
    {
        name: 'Cookbook',
        description:
            'A starter application for managing recipes and cooking instructions. Users can create, view, and delete recipes, as well as search for recipes based on ingredients or categories. The app is built using JavaScript, HTML, and CSS.',
        url: 'https://shinkhouse.github.io/cookbook',
        sourceCode: 'https://github.com/shinkhouse/cookbook',
        icon: 'github',
        date: '2022-01-05T00:00:00.000Z',
        image: 'assets/project-images/cookbook.png',
        tags: [{ tag: 'JavaScript' }, { tag: 'HTML' }, { tag: 'CSS' }],
        showProject: true
    },
    {
        name: 'Microsoft To Do Clone',
        description:
            'A clone of the Microsoft To Do application built using React. Users can create and manage tasks, set due dates and reminders, and organize tasks into different lists. The app is built using React, JavaScript, and CSS.',
        url: 'https://shinkhouse.github.io/react-todo/',
        sourceCode: 'https://github.com/shinkhouse/react-todo',
        icon: 'github',
        date: '2021-04-15T00:00:00.000Z',
        image: 'assets/project-images/react-todo.png',
        tags: [{ tag: 'React' }, { tag: 'JavaScript' }, { tag: 'CSS' }],
        showProject: true
    },
    {
        name: 'Giphy Search',
        description:
            'An Angular-based application for searching and displaying GIFs using the Giphy API. Users can search for GIFs based on keywords and view the results in a grid layout. The app is built using Angular, TypeScript, and utilizes the Giphy API for fetching GIF data.',
        url: 'https://shinkhouse.github.io/giphy-v2/',
        sourceCode: 'https://github.com/shinkhouse/giphy-v2',
        icon: 'github',
        date: '2019-01-01T00:00:00.000Z',
        image: 'assets/project-images/giphy-v2.png',
        tags: [{ tag: 'Angular' }, { tag: 'TypeScript' }, { tag: 'REST API' }, { tag: 'Giphy' }],
        showProject: true
    },
    {
        name: 'Calculator',
        description:
            "A simple calculator application built using JavaScript. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division. Users can input numbers and perform calculations using the calculator's interface.",
        url: 'https://shinkhouse.github.io/calculator/',
        sourceCode: 'https://github.com/shinkhouse/calculator',
        icon: 'github',
        date: '2017-01-01T00:00:00.000Z',
        tags: [{ tag: 'JavaScript' }, { tag: 'HTML' }, { tag: 'CSS' }],
        showProject: false
    },
    {
        name: 'Emoji Picker Menu',
        description:
            'A menu for selecting emojis, built using JavaScript, HTML, and CSS. The menu displays a collection of emojis that users can choose from and copy to their clipboard. The menu is designed to be easily integrated into web applications and provides a convenient way for users to insert emojis into text fields.',
        url: 'https://codepen.io/shinkhouse/pen/wQpPYj',
        sourceCode: '',
        icon: 'codepen',
        date: '2019-01-01T00:00:00.000Z',
        tags: [{ tag: 'JavaScript' }, { tag: 'HTML' }, { tag: 'CSS' }],
        showProject: false
    },
    {
        name: 'Chat Application',
        description:
            'A chat application built using Node.js, featuring a handmade emoji picker menu. The application allows users to create chat rooms, join existing rooms, and send messages in real-time. The emoji picker menu provides a convenient way for users to insert emojis into their messages. The application is built using Node.js, JavaScript, HTML, and CSS.',
        url: 'https://messaging-server-shinkhouse.herokuapp.com/',
        sourceCode: 'https://github.com/shinkhouse/chat-application',
        icon: 'github',
        date: '2019-02-01T00:00:00.000Z',
        tags: [{ tag: 'Node.js' }, { tag: 'JavaScript' }, { tag: 'HTML' }, { tag: 'CSS' }],
        showProject: false
    },
    {
        name: 'Portfolio v2',
        description:
            'The second iteration of my personal portfolio website. This version of the portfolio showcases my projects, skills, and experience. The website is built using HTML and CSS, and it provides a clean and professional design to present my work.',
        sourceCode: 'https://github.com/shinkhouse/portfolio-v2',
        url: 'https://shinkhouse.github.io/portfolio-v2',
        icon: 'github',
        date: '2016-06-01T00:00:00.000Z',
        tags: [{ tag: 'HTML' }, { tag: 'CSS' }],
        showProject: false
    },
    {
        name: 'Portfolio v3',
        description:
            'The third iteration of my personal portfolio website. This version of the portfolio features an updated design and layout compared to the previous version. It showcases my projects, skills, and experience in a visually appealing and user-friendly manner. The website is built using HTML and CSS.',
        sourceCode: 'https://github.com/shinkhouse/portfolio-v3',
        url: 'https://shinkhouse.github.io/portfolio-v3',
        icon: 'github',
        date: '2016-09-01T00:00:00.000Z',
        tags: [{ tag: 'HTML' }, { tag: 'CSS' }],
        showProject: false
    },
    {
        name: 'Portfolio v4',
        description:
            'The fourth iteration of my personal portfolio website. This version of the portfolio introduces new features and improvements to the design and functionality. It provides an enhanced user experience and showcases my projects, skills, and experience. The website is built using HTML and CSS.',
        sourceCode: 'https://github.com/shinkhouse/portfolio-v4',
        url: 'https://shinkhouse.github.io/portfolio-v4',
        icon: 'github',
        date: '2018-01-01T00:00:00.000Z',
        tags: [{ tag: 'HTML' }, { tag: 'CSS' }],
        showProject: false
    },
    {
        name: 'Portfolio v6',
        description:
            'The sixth iteration of my personal portfolio website. This version of the portfolio incorporates the latest web technologies and design trends to create a modern and visually appealing website. It showcases my projects, skills, and experience in a dynamic and interactive manner. The website is built using HTML and CSS.',
        url: 'https://shinkhouse.github.io/portfolio-v6',
        sourceCode: 'https://github.com/shinkhouse/portfolio-v6',
        icon: 'github',
        date: '2019-06-01T00:00:00.000Z',
        tags: [{ tag: 'HTML' }, { tag: 'CSS' }],
        showProject: false
    },
    {
        name: 'Felt Message Board',
        description:
            'A message generator inspired by my high school felt letter record board. The application allows users to create custom messages using a set of felt letter tiles. Users can arrange the tiles to form words and phrases, and the application generates an image of the message. The generated message can be shared or saved. The application is built using JavaScript, HTML, and CSS.',
        url: 'https://shinkhouse.github.io/felt-message-board',
        sourceCode: 'https://github.com/shinkhouse/felt-message-board',
        icon: 'github',
        date: '2017-01-01T00:00:00.000Z',
        tags: [{ tag: 'JavaScript' }, { tag: 'HTML' }, { tag: 'CSS' }],
        showProject: false
    },
    {
        name: 'Weather',
        description:
            'An application for getting weather information using Darksky and Google Maps APIs. The application allows users to search for weather information by location and displays the current weather conditions, as well as a forecast for the next few days. The app is built using JavaScript, HTML, and CSS, and it utilizes the Darksky and Google Maps APIs for weather data and geolocation.',
        url: 'https://shinkhouse.github.io/weather',
        sourceCode: 'https://github.com/shinkhouse/weather',
        icon: 'github',
        date: '2020-02-01T00:00:00.000Z',
        tags: [{ tag: 'JavaScript' }, { tag: 'HTML' }, { tag: 'CSS' }, { tag: 'API' }],
        showProject: false
    }
];
