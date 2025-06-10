<a id="readme-top"></a>

<!-- PROJECT TITLE -->
<br />
<div align="center">
  <h3 align="center">Github Projects Hub</h3>

  <p align="center">
   A project can search username and projects or repositories in Github
    <br />
    <br />
    <a href="https://github-projects-hub.vercel.app">View Demo</a>

  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is developed to make it easier for everyone to access and search for information about users and projects on GitHub. With this application, users can search for specific usernames to view detailed profile information, including name, number of repositories, followers, and other available data from GitHub.

In addition, the application allows users to search for repositories using specific keywords. This feature helps users find relevant repositories related to their interests or needs, whether it’s open-source projects, innovative codebases, or ongoing collaborations.

The main goal of this project is to empower users by providing quick and simple access to data and resources on GitHub without the need for manual searching, which can be time-consuming. With a user-friendly and fast interface, this application is designed to assist developers, students, or anyone interested in software development to explore and discover various projects on GitHub efficiently.

Furthermore, this application can serve as an educational tool for learning about the GitHub API and web.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This is the stack for build this project.

-   [![React][React.js]][React-url]
-   [![Tanstack Query][Tanstack Query]][TanstackQuery-url]
-   [![Zod][Zod]][Zod-url]
-   [![Github][Github]][Github-url]
-   [![Vercel][Vercel]][Vercel-url]
-   [![Vite][Vite]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   yarn
    ```sh
    npm install yarn@latest -g
    ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/alpredovandy/github-projects-hub.git
    ```
2. Move to repo
    ```sh
    cd github-projects-hub
    ```
3. Install Yarn packages
    ```sh
    yarn install
    ```
4. Enter your API and Limit in `.env`
    ```js
    VITE_GITHUB_API_URL = 'https://api.github.com';
    VITE_LIMIT_DATA = 5; // Example limit when we want to get
    ```
5. Change git remote url to avoid accidental pushes to base project
    ```sh
    git remote set-url origin github_username/repo_name
    git remote -v # confirm the changes
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Record -->

## Record


https://github.com/user-attachments/assets/93fd7201-b78d-4d3d-8bd9-75e4a043678d


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Top contributors:

<a href="https://github.com/alpredovandy/github-projects-hub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=alpredovandy/github-projects-hub" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Alpredo Pandiangan - alpredo.vandy@gmail.com

Project Link: [https://github.com/alpredovandy/github-projects-hub](https://github.com/alpredovandy/github-projects-hub)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org
[Tanstack Query]: https://img.shields.io/badge/reactquery-whitesmoke?style=for-the-badge&logo=react-query
[TanstackQuery-url]: https://tanstack.com/query/latest
[Zod]: https://img.shields.io/badge/zod-blue?style=for-the-badge&logo=zod
[Zod-url]: https://zod.dev
[Github]: https://img.shields.io/badge/github-api-black?style=for-the-badge&logo=github
[Github-url]: https://github.com
[Vercel]: https://img.shields.io/badge/vercel-black?style=for-the-badge&logo=vercel
[Vercel-url]: https://vercel.com
[Vite]: https://img.shields.io/badge/vite-FFFFE0?style=for-the-badge&logo=vite
[Vite-url]: https://vite.dev
