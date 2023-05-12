# RO-ucas-Project individual project
As the higher education landscape in Romania continues to evolve and expand, there is a growing need for a central platform that can provide comprehensive information on the various universities and programs available in the country. A UCAS-like website for Romanian universities could serve as this platform, offering students, educators, and parents a one-stop destination for exploring and comparing educational options, while also simplifying the application process.

Such a website could provide detailed information on the different universities and programs in Romania, including program descriptions, admission requirements, application deadlines, and tuition fees. It could also offer resources and tools for students to plan and prepare for their education, such as scholarship and financial aid information, tips for writing personal statements and admissions essays, and guidance on obtaining necessary visas for international students.

This platform could incorporate features such as university rankings, performance metrics, and advanced search tools to help users make informed decisions about their educational choices. By creating a user-friendly and comprehensive resource, this UCAS-like website would be instrumental in making higher education in Romania more accessible and transparent for both domestic and international students.<br/> 

#Author 
Liviu Ciuca

#How to run
- add the .env file in /serve --> check word doc for the data
- $cd into ./serve --> $npm run start:dev
- in a new terminal $cd into ./client --> $npm run dev
<br/>
test server
- install pytest --> run $pytest in the terminal
<br/>
test client 
- run $docker build -t my-cypress-tests .
- then $docker run --rm --network="host" -v "$(pwd)/cypress/videos:/app/cypress/videos" my-cypress-tests
<br/> 
