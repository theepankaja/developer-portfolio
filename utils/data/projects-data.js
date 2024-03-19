import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'FITFI AI APP',
        description: "Created a Computer Vision App using Tesorflow Pose Estimation framework",
        tools: ['Kotlin', 'MongoDB', 'X-Code', 'AWS SES', 'AWS S3', 'Node Mailer', 'Tensorflow', 'Algolia', 'EC2', 'PM2', 'Nginx'],
        role: 'Chief Technology Officer',
        code: '',
        demo: 'https://fitfi.ai',
        image: crefin,
    },
    {
        id: 2,
        name: 'CONNECT2D TELEDENTISTRY',
        description: 'Worked with team of 15 Engineers to create the first teledentistry app in Toronto During COVID-19.',
        tools: ['Laravel', 'MySQL', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "EC2", "sendgrid"],
        role: 'Chief Technology Officer',
        code: '',
        demo: 'https://connect2dteledentistry.com',
        image: travel,
    },
    {
        id: 3,
        name: 'CONNECT2D DENTISTRY',
        description: 'Builded a AirBnB version for Dentistry. where dental offices can rent out the empty operatories to Dental Professionals.',
        tools: ['React', 'Bootstrap', 'Flutter', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Chief Technology Officer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'POOVAL',
        description: "Pooval is an organic product line which deliver the products all over the world from srilanka.",
        tools: ['Flutterflow', 'Netlify', 'Redux', 'Sendgrid', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Co-Founder',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },