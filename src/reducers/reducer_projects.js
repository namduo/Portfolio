import CityNails from '../img/project_city_nails.png';
import AquaEmail from '../img/project_aqua_email.png';
import Arcadia from '../img/project_arcadia.png';
import CCH from '../img/project_cch.png';
import News from '../img/project_news.png';

export default function () {
  return [
    { 
      title: 'Arcadia Group', 
      tech: 'HTML5 / CSS3 / Bootstrap / Bitbucket',
      description: 'During my time at NewDay Ltd, I was tasked with managing the Arcadia acquisition websites. This involved creating mobile responsive templates and implementing it across all the brands.',
      imageUrl: Arcadia,
      bg: 'project_arcadia_col',
      projectUrl: 'http://www.burtoncard.com/'  
    },
    { 
      title: 'Aqua', 
      tech: 'Email Design / HTML / SASS / Foundation',
      description: 'During my time at NewDay Ltd, I worked with the aqua team to build various responsive emails for different stages of their automated customer journeys. This included the design, Litmus testing and deployment through Salesforce.',
      imageUrl: AquaEmail,
      bg: 'project_aquaemail_col'
    },
    { 
      title: 'Central Careers Hub', 
      tech: 'Web Design / HTML / CSS3 / Wordpress',
      description: 'I was approached by Andy Gardner (Operations Manager at Central Careers Hub) to create a website for CCH. The requirement was to have a website for blogs that could be easily updated and maintained by any member of CCH.',
      imageUrl: CCH ,
      bg: 'project_cch',
      projectUrl: 'http://www.centralcareershub.co.uk/'
    },
    { 
      title: 'City Nails Ltd', 
      tech: 'Web Design / HTML5 / CSS3 / Bootstrap', 
      description: 'I created a simple responsive website for City Nails. The aim was to make City Nails searchable on google and give their customers access to services, prices and the location on google maps.',
      imageUrl: CityNails,
      bg: 'project_citynails_col',
      projectUrl: 'http://www.city-nails.co.uk/'
    },
    { 
      title: 'News App', 
      tech: 'Express / AJAX / jQuery / APIs / CSS3',
      description: 'This is a personal project I\'ve been working on. The aim is to let users select an online news outlet from the newsapi.org API and view live stories for that selected outlet. This was built using the Express framework.',
      imageUrl: News ,
      bg: 'project_news',
      projectUrl: 'https://github.com/namduo/news'
    }
  ];
}
