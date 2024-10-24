document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('nav ul');
    const currentYearSpan = document.getElementById('currentYear');

    // Menu toggle
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Set current year
    currentYearSpan.textContent = new Date().getFullYear();

    // Experience data
    const experiences = [
        {
            title: "Hackathon Participant",
            company: "Masscoders",
            date: "June 2024",
            description: "Developed responsive web applications using HTML, CSS, and JavaScript, with a focus on enhancing user experience and optimizing performance."
        },
        {
            title: "Hackathon Participant",
            company: "Aishwi Technologies & IBM",
            date: "April 2023",
            description: "Participated in a live hackathon on web development. Collaborated with team members to develop innovative solutions, and earned certifications for participation and performance."
        },
        {
            title: "Salesforce Developer Virtual Internship",
            company: 'Salesforce',
            date: "May 2023 - July 2023",
            description: "Gained expertise in Salesforce tools, data handling, and automation, focusing on driving customer satisfaction and improving operational efficiency across various business environments."
        },
    ];

    // Render experience timeline
    const experienceContainer = document.getElementById('experienceContainer');
    experiences.forEach((exp, index) => {
        const expEl = document.createElement('div');
        expEl.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-in`;
        expEl.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p>${exp.date}</p>
                <p>${exp.description}</p>
            </div>
        `;
        experienceContainer.appendChild(expEl);
    });

    // Skills data
    const skills = [
        { name: "Python", icon: "code" },
        { name: "SQL", icon: "database" },
        { name: "Data Science", icon: "database" },
        { name: "Machine Learning", icon: "brain" },
        { name: "Web Development", icon: "globe" },
        { name: "Git", icon: "git-branch" },
    ];

    // Render skills
    const skillsContainer = document.getElementById('skillsContainer');
    skills.forEach(skill => {
        const skillEl = document.createElement('div');
        skillEl.className = 'skill-item fade-in';
        skillEl.innerHTML = `
            <div class="skill-icon">
                <i data-lucide="${skill.icon}"></i>
            </div>
            <h3>${skill.name}</h3>
        `;
        skillsContainer.appendChild(skillEl);
    });

    // Projects data
    const projects = [
        {
            title: "Movie Streaming Website",
            description: 'A movie streaming website built with HTML, CSS, and JavaScript, utilizing Google Drive for video storage and providing comprehensive details on films, including cast, director, and trailers.',
            link: "https://ottnight.me/"
        },
        {
            title: "Predictive Analytics Tool",
            description: 'We are a team of 4, collaborated to research on Cardio thoracic disease prediction using Machine Learning. Developed a model that predicts the disease with an accuracy of 95%. The model is based on the Gaussian Naïve Bayes algorithm which fits best for it. Helped in Analyzing and Interpretation of the data that is required and also worked in developing the algorithm.',
            link: "https://cardio-thoracic.42web.io/?i=1"
        },
        {
            title: "Movie Ticket Booking System",
            description: 'Created an online ticket booking system featuring user sign-up, login, and ticket booking functionalities. Includes a responsive interface for easy movie selection and booking.',
            link: "https://sreetechie03.github.io/movie-ticket-booking/21121A3243/Movie%20Ticket%20Booking.html"
        }
    ];

    // Render projects
    const projectsContainer = document.getElementById('projectsContainer');
    projects.forEach(project => {
        const projectEl = document.createElement('div');
        projectEl.className = 'project-item fade-in';
        projectEl.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        `;
        projectsContainer.appendChild(projectEl);
    });

    // Certifications data
    const certifications = [
        {
            title: "ServiceNow Certified Administrative Developer",
            url: "https://drive.google.com/file/d/1AUGKSYpLodM5hLyIqv7RB-PEdKYwE0v6/preview",
            icon: "award"
        },
        {
            title: "Python Foundation Certification (Infosys Springboard)",
            url: "https://drive.google.com/file/d/1CQNGsU8Zn92F0pe-Yc7GzQwEUB-YBtY8/preview",
            icon: "code"
        },
        {
            title: "Microsoft Power BI Data Analyst Professional Certificate",
            url: "https://coursera.org/share/a5c8b6761f3f40c52ad8ee1ce5540cb7",
            icon: "bar-chart"
        },
        {
            title: "Google Project Management: Professional Certificate",
            url: "https://coursera.org/share/bb690a40292469dd2e63fc5d7369bbed",
            icon: "clipboard-list"
        },
        {
            title: "Pearson – MePro Level 10 English Standard Course",
            url: "https://drive.google.com/file/d/1uat0XzjH4p6gG_VaSKXHUAkBwIuSgRYq/view",
            icon: "file-text"
        }
    ];

    // Render certifications
    const certificationsContainer = document.getElementById('certificationsContainer');
    certifications.forEach(cert => {
        const certEl = document.createElement('div');
        certEl.className = 'certification-item fade-in';
        certEl.innerHTML = `
            <div class="certification-icon">
                <i data-lucide="${cert.icon}"></i>
            </div>
            <h3 class="certification-title">${cert.title}</h3>
            <a href="${cert.url}" class="certification-link" target="_blank" rel="noopener noreferrer">
                View Certificate
                <i data-lucide="external-link"></i>
            </a>
        `;
        certificationsContainer.appendChild(certEl);
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Fade-in animation
    const fadeElems = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => observer.observe(elem));

    // Initialize Lucide icons
    lucide.createIcons();
});