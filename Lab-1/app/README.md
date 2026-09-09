# Lab 1 – DevOps Foundations & Continuous Integration

Sample project used to complete all 5 tasks of Lab 1.

## Contents
- `index.js` – minimal Node.js HTTP server
- `test.js` – simple test script (no framework needed, keeps Jenkins agent setup light)
- `package.json` – npm metadata + `npm test` script
- `Jenkinsfile` – declarative pipeline (Checkout → Build → Test → Deploy)
- `deploy.bat` – Windows deployment script called from the pipeline / Jenkins job

## How to run locally
```
npm test
node index.js
```

## How this maps to the 5 lab tasks
1. **Automate application deployment** → Jenkins Freestyle job with a build trigger + `deploy.bat` as a post-build step.
2. **Install and configure Git and Jenkins** → local tool setup (see Task 2 Word doc).
3. **Set up version control using Git** → this repo itself (init, commit, branch, merge, push).
4. **Implement a basic Jenkins CI/CD pipeline** → Jenkins Pipeline job pulling this repo from GitHub and triggering a build.
5. **Create a Jenkinsfile defining pipeline stages** → `Jenkinsfile` in this repo, run via "Pipeline script from SCM".
