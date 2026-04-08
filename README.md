# Multi-Container Deployment with CI/CD Pipeline 🚀

## Project Overview
This project automates the deployment of a Node.js application connected to a MongoDB database on an AWS EC2 instance. It uses **GitHub Actions** for CI/CD, **Docker Hub** as a container registry, and **Docker Compose** for multi-container orchestration.

## Architecture
- **App Service**: Node.js Express API.
- **Database Service**: MongoDB for persistent storage.
- **CI/CD**: Automated build, push to Docker Hub, and remote deployment to EC2 via SSH.

## Key Features
- [cite_start]**Database Persistence**: Uses MongoDB with named volumes to ensure data isn't lost on container restarts[cite: 22].
- [cite_start]**Automated Seeding**: A custom initialization script (`init-db.js`) populates the database on the first start[cite: 21].
- **GitHub Actions Pipeline**: 
  - [cite_start]Builds the Docker image on every push[cite: 8].
  - [cite_start]Pushes the image to Docker Hub[cite: 8].
  - [cite_start]Automatically pulls and deploys to EC2 using Docker Compose[cite: 38, 50].

## How to Run
1. Clone the repo.
2. Ensure Docker and Docker Compose are installed.
3. Run `docker-compose up -d`.
