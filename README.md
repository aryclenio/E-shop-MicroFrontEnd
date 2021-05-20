# MicroFrontEnd Approach

A microfrontend approach of an marketing, dashboard and login page app using runtime integration with multiple react and vue applications using module federation plugin. All the microfrontends are mixed within an container project that merges the other 3 front end projects into one.
Each one of the 4 projects has it's individual CI and deployment, merged into one single aws bucket with 4 folders.

### Main Page (using Marketing **ReactJS** microfrontend project)

![image](https://user-images.githubusercontent.com/31252524/119021033-526b2d80-b975-11eb-8981-5f5ff3f9145a.png)

### Login page (using Auth **ReactJS** microfrontend project)

![image](https://user-images.githubusercontent.com/31252524/119021310-abd35c80-b975-11eb-8a58-dcfe0b3ee767.png)

### Dashboard page (using Dashboard **VueJS** microfrontend project)

![image](https://user-images.githubusercontent.com/31252524/119021520-e5a46300-b975-11eb-9da6-a7834350b56a.png)

## Tecnologies used

- Webpack Module Federation
- Github Actions CI
- Amazon CloudFront
- React JS
- Vue JS

## How to use
Install and run every project using the commands bellow:
```bash
yarn 
yarn start
```

Every project will run into a different port, but will be merged into container project on port **8080**.

## License
[MIT](https://choosealicense.com/licenses/mit/)
