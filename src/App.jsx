import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Datascience } from './pages/Datascience';
import { Fullstack } from './pages/Fullstack';
import { Hacking } from './pages/Hacking';
import { Youtube } from './pages/Youtube';
import { BlockChain } from './pages/BlockChain';
export const App = () => {


  //Setting the data 
const data = [
  {   id:1,
      "type": "datascinece",
      "title": "Introduction to Data Science",
      "image": "https://datasciencedojo.com/wp-content/uploads/MicrosoftTeams-image-62-2048x2048.jpg.webp",
      "description": "Learn the basics of data science and its applications.",
      "tutor": "Alice Johnson",
      "created_date": "2024-01-15"
  },
  {
    id:2,
      "type": "fullstack",
      "title": "Full Stack Development Bootcamp",
      "image": "https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65d5bfdfd47c1b5be1847c95_65d02a69bb7642d3cbd99ba9-7b0cc31922f9059b7cb1944ca7987df5.jpeg",
      "description": "Become a full stack developer with this comprehensive bootcamp.",
      "tutor": "Bob Smith",
      "created_date": "2024-02-10"
  },
  {    id:3,
      "type": "youtube",
      "title": "Creating Engaging YouTube Content",
      "image": "https://logos-download.com/wp-content/uploads/2016/02/YouTube_Logo_2015.png",
      "description": "Tips and tricks for creating engaging content on YouTube.",
      "tutor": "Cathy Lee",
      "created_date": "2024-03-05"
  },
  {
    id:4,
      "type": "blockchain",
      "title": "Understanding Blockchain Technology",
      "image": "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
      "description": "A comprehensive guide to blockchain technology and its uses.",
      "tutor": "David Kim",
      "created_date": "2024-04-01"
  },
  {
    id:5,
      "type": "hacking",
      "title": "Ethical Hacking Basics",
      "image": "https://www.tarlogic.com/wp-content/uploads/2022/03/hacking-2-1024x576.jpg",
      "description": "Learn the fundamentals of ethical hacking and cybersecurity.",
      "tutor": "Eva Martinez",
      "created_date": "2024-05-12"
  },
  { 
    id:6,
      "type": "datascinece",
      "title": "Data Visualization Techniques",
      "image": "https://images.inc.com/uploaded_files/image/1920x1080/getty_518119836_236936.jpg",
      "description": "Master data visualization tools and techniques.",
      "tutor": "Frank Wilson",
      "created_date": "2024-06-20"
  },
  { 
    id:7,
      "type": "fullstack",
      "title": "Building RESTful APIs",
      "image": "https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65d5bfdfd47c1b5be1847c95_65d02a69bb7642d3cbd99ba9-7b0cc31922f9059b7cb1944ca7987df5.jpeg",
      "description": "Learn to create and consume RESTful APIs.",
      "tutor": "Grace Taylor",
      "created_date": "2024-07-15"
  },
  {
    id:8,
      "type": "youtube",
      "title": "Monetizing Your YouTube Channel",
      "image": "https://logos-download.com/wp-content/uploads/2016/02/YouTube_Logo_2015.png",
      "description": "Strategies to monetize your YouTube content effectively.",
      "tutor": "Hank Adams",
      "created_date": "2024-08-30"
  },
  { 
    id:9,
      "type": "blockchain",
      "title": "Smart Contracts Explained",
      "image": "https://img.freepik.com/free-vector/smart-contract-isometric-landing-page-concept-electronic-signature-blockchain-crypto-technology-businessmen-handshake-huge-tablet-with-digital-online-e-contract-document-3d-vector-web-banner_107791-9273.jpg?t=st=1730644295~exp=1730647895~hmac=64f960d911ec458820f1d6bc01f53d45360cf43128fa31ffdd19034e4a8d6911&w=1380",
      "description": "Understand the concept of smart contracts in blockchain.",
      "tutor": "Ivy Roberts",
      "created_date": "2024-09-25"
  },
  {
    id:10,
      "type": "hacking",
      "title": "Penetration Testing Essentials",
      "image": "https://media.istockphoto.com/id/1143736474/photo/dark-web-hooded-hacker.jpg?s=1024x1024&w=is&k=20&c=oEWJ_EubsVPlJUnWG3wHaUcjSyhJK4f32nBOr_0ah94=",
      "description": "A guide to the essentials of penetration testing.",
      "tutor": "Jack Nguyen",
      "created_date": "2024-10-10"
  },
  {    id:11,
      "type": "datascinece",
      "title": "Machine Learning Fundamentals",
      "image": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cG6U1qstYDijh9bPL42e-Q.jpeg",
      "description": "An introduction to machine learning algorithms and applications.",
      "tutor": "Kimberly Brown",
      "created_date": "2024-01-22"
  },
  {
    id:12,
      "type": "fullstack",
      "title": "Frontend Development with React",
      "image": "https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65d5bfdfd47c1b5be1847c95_65d02a69bb7642d3cbd99ba9-7b0cc31922f9059b7cb1944ca7987df5.jpeg",
      "description": "Learn how to build dynamic user interfaces using React.",
      "tutor": "Liam Green",
      "created_date": "2024-02-18"
  },
  {
    id:13,
      "type": "youtube",
      "title": "SEO for YouTube Videos",
      "image": "https://www.wordstream.com/wp-content/uploads/2022/08/what-does-seo-stand-for.png",
      "description": "Optimize your videos for better visibility on YouTube.",
      "tutor": "Mia White",
      "created_date": "2024-03-12"
  },
  {
    id:14,
      "type": "blockchain",
      "title": "Cryptocurrency Investment Strategies",
      "image": "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
      "description": "Learn effective strategies for investing in cryptocurrencies.",
      "tutor": "Noah Wilson",
      "created_date": "2024-04-20"
  },
  { 
    id:15,
      "type": "hacking",
      "title": "Web Application Security",
      "image": "https://media.istockphoto.com/id/1143736474/photo/dark-web-hooded-hacker.jpg?s=1024x1024&w=is&k=20&c=oEWJ_EubsVPlJUnWG3wHaUcjSyhJK4f32nBOr_0ah94=",
      "description": "Learn how to secure web applications from common vulnerabilities.",
      "tutor": "Olivia Taylor",
      "created_date": "2024-05-30"
  },
  {
    id:16,
      "type": "datascinece",
      "title": "Deep Learning with TensorFlow",
      "image": "https://www.tensorflow.org/images/tf_logo_social.png",
      "description": "A hands-on guide to deep learning using TensorFlow.",
      "tutor": "Peter Clark",
      "created_date": "2024-06-25"
  },
  {
    id:17,
      "type": "fullstack",
      "title": "Server-Side Development with Node.js",
      "image": "https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65d5bfdfd47c1b5be1847c95_65d02a69bb7642d3cbd99ba9-7b0cc31922f9059b7cb1944ca7987df5.jpeg",
      "description": "Master server-side programming with Node.js.",
      "tutor": "Quinn Lee",
      "created_date": "2024-07-14"
  },
  {
    id:18,
      "type": "youtube",
      "title": "Editing Techniques for YouTube",
      "image": "https://i.ytimg.com/vi/FVR8zz8ci2k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrBmkm2BW0ND1KlU8gqdM892GHgg",
      "description": "Enhance your video editing skills for YouTube.",
      "tutor": "Riley Thompson",
      "created_date": "2024-08-22"
  }
];


//Creating a function to handle relevant data

const handleRelevantData=(data, filter)=>{
  if(filter==="")
  {
    return data;
  }
  else
  {
    const newData = data.filter((singleDataPoint)=>singleDataPoint.type === filter);
  console.log(newData)
  return newData;
  }
  
}

//Setting the routes
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home  
    data={data}
    handleData = {handleRelevantData} />,
    errorElement:<NotFound />
  },
  {
    path:'/datascience',
    element:<Datascience  
    data={data}
    handleData = {handleRelevantData}  />,
  },
  {
    path:'/fullstack',
    element:<Fullstack  
    data={data}
    handleData = {handleRelevantData}/>,
  },
  {
    path:'/hacking',
    element:<Hacking 
    data={data}
    handleData = {handleRelevantData}/>,
  },
  {
    path:'/youtube',
    element:<Youtube 
    data={data}
    handleData = {handleRelevantData}/>,
  },
  {
    path:'/blockchain',
    element:<BlockChain  
    data={data}
    handleData = {handleRelevantData}/>,
  },
  
]);







  
  return (
    <RouterProvider  router={router}/>
  )
}
