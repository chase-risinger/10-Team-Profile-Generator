// create the about section


const generateTeam = rosterArr => {

    const isIntern = rosterArr.filter(roster => {
        if (roster.school) {
            return true;
        } else {
            return false;
        }
    });

    // get array of all non-featured projects
    const isEngineer = rosterArr.filter(roster => {
        if (roster.github) {
            return true;
        } else {
            return false;
        }
    });

    const internHTMLArr = isIntern.map(({ name, email, id, school }) => {
        // goes through each featured project and saves it's unique name, desc, languages, link to a new array called featuredProjectHTMLArr
        return `
      <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
        <h3 class="portfolio-item-title text-light">${name}</h3>
        <h5 class="portfolio-languages">
          Education: ${school}
        </h5>
        <p>ID: ${id}</p>
        <a href="mailto:${email}">Email</a>
      </div>
    `;
    });

    const engineerHTMLArr = isEngineer.map(
        ({ name, email, id, github }) => {
            return `
        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
          <h3 class="portfolio-item-title text-light">${name}</h3>
          
          <p>ID: ${id}</p>
          <a href="mailto:${email}">Email</a>
          <a href="http://www.github.com/${github}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>GitHub</a>
        </div>
      `;
        }
    );
    // saves these new arrays inside this html
    return `
    <section>
      <h2 class="text-dark bg-primary p-2 display-inline-block">Engineers
      <div class="flex-row justify-space-between">
       ${engineerHTMLArr.join('')}</div></h2>
      
      <h2 class="text-dark bg-primary p-2 display-inline-block">Interns
      <div class="flex-row justify-space-between">
     ${internHTMLArr.join('')}
      </div></h2>
    </section>
  `;
};
module.exports = templateData => {
    // destructure page data by section
    const { roster, ...header } = templateData;

    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team-Profile-Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../src/style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Your Team</h1>
        <nav class="flex-row">
          
        </nav>
      </div>
    </header>
    <main class="container my-5">
    <h2 class="text-dark bg-primary p-2 display-inline-block">Manager</h2>
    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
          <h2 class="portfolio-item-title text-light">${header.manager}
          
          <p>ID: ${header.id}</p>
          <a href="mailto:${header.email}">Email</a>
          <p>Office Number: ${header.office}</p>
        </div></h2>
    
    ${generateTeam(roster)}

    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Chase Risinger</h3>
    </footer>
  </body>
  </html>
  `;
};