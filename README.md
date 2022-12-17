# Resume Website

## Setting up the development environment

### Prerequisites

The following programs must be installed on your device. Download links are provided.

- [Git](https://git-scm.com/downloads)
- [Github Desktop](https://desktop.github.com/) (optional)
- [Node.js](https://nodejs.org/en/download/)

### Installation

1. Clone this repository [here](https://github.com/DEEJ4Y/kayal_maam_resume_website).
2. Install missing npm packages from the terminal.

   ```shell
   npm install
   ```

3. Run the development server from the terminal.

   ```shell
   npm run dev
   ```

4. Go to `http://localhost:3000` in your browser to view the website.
5. Save any changes made to the code, it will refresh automatically.

#### Adding the git remote

Run the following commands from the terminal.

```shell
git remote add origin https://github.com/DEEJ4Y/kayal_maam_resume_website.git
```

#### Saving changes

Once changes are made to the code, commit them in git and push the changes to the git remote.

```shell
git add . && git commit -m "Updated code" && git push origin main
```

This will automatically deploy your code to the live server. Changes will be visible in 5-10 minutes.
