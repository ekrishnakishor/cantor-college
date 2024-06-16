const courses = [
    { title: "Computing", subtitle: "Undergraduate", ucasCode: "G504", summary: "Learn how to code, configure and integrate applications, databases and systems architectures which form the pillars of modern technology in today’s world.", awardName: "BSc (Honours)" },
    { title: "Computer Networks", subtitle: "Undergraduate", ucasCode: "G420", summary: "This course includes general computing skills in programming, cyber security, information systems, management and professionalism in a technical environment.", awardName: "BSc (Honours)" },
    { title: "Cyber Security with Forensics", subtitle: "Undergraduate", ucasCode: "F4G4", summary: "Prepare for a career in cyber security by designing security systems, identifying evidence of cybercrimes and acting as detectives in a digital world.", awardName: "BSc (Honours)" },
    { title: "Computer Science for Games", subtitle: "Undergraduate", ucasCode: "G611", summary: "Create the software powering the next generation of blockbuster games.", awardName: "BSc (Honours)" },
    { title: "Software Engineering", subtitle: "Undergraduate", ucasCode: "G600", summary: "Gain experience in the whole software development process and prepare for a career in software engineering.", awardName: "BEng (Honours)" },
    { title: "Computer Science", subtitle: "Undergraduate", ucasCode: "G400", summary: "Gain a solid foundation in the core areas of computer science, including programming, algorithms, data structures and software development.", awardName: "BSc (Honours)" },
    { title: "Computing with Foundation Year", subtitle: "Undergraduate", ucasCode: "A020", summary: "Gain a degree in computing – with an initial foundation year to prepare for the course.", awardName: "BSc (Honours)" },
    { title: "Cyber Security with Forensics with Foundation Year", subtitle: "Undergraduate", ucasCode: "A023", summary: "Gain a degree in cyber security with forensics, with an initial foundation year to prepare for the course.", awardName: "BSc (Honours)" },
    { title: "Software Engineering with Foundation Year", subtitle: "Undergraduate", ucasCode: "A017", summary: "Gain a degree in software engineering, with an initial foundation year to prepare for the course.", awardName: "BEng (Honours)" },
    { title: "Cyber Security with Foundation Year", subtitle: "Undergraduate", ucasCode: "A093", summary: "Gain a degree in cyber security – with an initial foundation year to prepare for the course.", awardName: "BSc (Honours)" },
    { title: "Information Technology with Business Studies with Foundation Year", subtitle: "Undergraduate", ucasCode: "A019", summary: "Gain a degree in information technology with business studies, with an initial foundation year to prepare for the course.", awardName: "BSc (Honours)" },
    { title: "Computer Science with Foundation Year", subtitle: "Undergraduate", ucasCode: "A022", summary: "Gain a degree in computer science, with an initial foundation year to prepare for the course.", awardName: "BSc (Honours)" },
    { title: "Computer Science for Games with Foundation Year", subtitle: "Undergraduate", ucasCode: "A092", summary: "Gain a degree in computer science for games, with an initial foundation year to prepare for the course.", awardName: "BSc (Honours)" },
    { title: "Business and Digital Technology with Foundation Year", subtitle: "Undergraduate", ucasCode: "A018", summary: "Gain a degree in business and digital communications technology – with an initial foundation year to prepare for the course.", awardName: "BSc (Honours)" },
    { title: "Computing", subtitle: "Postgraduate", ucasCode: "", summary: "A course enhanced by real-life project experience for non-computing graduates wanting to pursue a career in the IT industry.", awardName: "MSc" },
    { title: "Computing and Informatics", subtitle: "Postgraduate", ucasCode: "", summary: "Conduct a period of intensive, supervised study where you critically investigate and evaluate an approved topic and make an original contribution to knowledge.", awardName: "MPhil" },
    { title: "Cyber Security", subtitle: "Postgraduate", ucasCode: "", summary: "Develop your skills and academic knowledge in the growing field of cyber security through academic teaching, industry input and practical skills development. Currently applications for this course are only open to home students.", awardName: "MSc" },
    { title: "Graphic Design", subtitle: "Undergraduate", ucasCode: "W210", summary: "Develop your own creative and innovative approach to graphic design by challenging and exploring contemporary practices through a series of exciting and diverse projects.", awardName: "BA (Honours)" },
    { title: "Interior Architecture and Design", subtitle: "Undergraduate", ucasCode: "W250", summary: "Develop your own creative and sustainable approach to interior architecture and design by challenging and exploring contemporary practices through a series of exciting and diverse projects.", awardName: "BA (Honours)" },
    { title: "Jewellery, Materials and Design", subtitle: "Undergraduate", ucasCode: "W721", summary: "Develop your own creative and innovative approach to jewellery design, challenging and exploring contemporary practices through new technologies and craft techniques.", awardName: "BA (Honours)" },
    { title: "Game Design and Development", subtitle: "Undergraduate", ucasCode: "A112", summary: "Study a course with a distinctive, practice-based approach to games design – gaining a diverse skill set and useful experience within the field.", awardName: "BA (Honours)" },
    { title: "Product Design", subtitle: "Undergraduate", ucasCode: "D009", summary: "Develop a highly creative approach to producing innovative 'future-facing' products by exploring and challenging design through a series of exciting and diverse projects.", awardName: "BSc (Honours)" },
    { title: "Product Design", subtitle: "Undergraduate", ucasCode: "W240", summary: "Develop a creative and innovative approach to product design and service innovation by challenging and exploring contemporary practices through a series of exciting and diverse projects.", awardName: "BA (Honours)" },
    { title: "Digital Media Production", subtitle: "Undergraduate", ucasCode: "W212", summary: "Design and produce new media products in film, animation, interactive media, web, apps, VR, cross-media and games.", awardName: "BA (Honours)" }
];

const itemsPerPage = 6;
let currentPage = 1;

function displayCourses() {
    const courseContainer = document.getElementById('course-container');
    courseContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCourses = courses.slice(startIndex, endIndex);

    paginatedCourses.forEach(course => {
        const courseBox = document.createElement('div');
        courseBox.className = 'course-box';

        const fullTimeLabel = document.createElement('div');
        fullTimeLabel.className = 'full-time-label';
        fullTimeLabel.textContent = 'Full Time';
        courseBox.appendChild(fullTimeLabel);

        const title = document.createElement('h2');
        title.textContent = course.title;
        courseBox.appendChild(title);

        const subtitle = document.createElement('h3');
        subtitle.textContent = course.subtitle;
        courseBox.appendChild(subtitle);

        const paragraph = document.createElement('p');
        paragraph.innerHTML = course.summary;
        courseBox.appendChild(paragraph);

        const courseName = document.createElement('h4');
        courseName.textContent = course.awardName;
        courseName.style.backgroundColor = "#ff0"; // Highlighted background color
        courseBox.appendChild(courseName);

        const ucasCode = document.createElement('h4');
        ucasCode.textContent = course.ucasCode;
        courseBox.appendChild(ucasCode);

        courseContainer.appendChild(courseBox);
    });

    updatePagination();
}

function updatePagination() {
    const pageInfo = document.getElementById('page-info');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(courses.length / itemsPerPage)}`;

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(courses.length / itemsPerPage);
}

function nextPage() {
    if (currentPage < Math.ceil(courses.length / itemsPerPage)) {
        currentPage++;
        displayCourses();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayCourses();
    }
}

document.addEventListener('DOMContentLoaded', displayCourses);
