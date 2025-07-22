# Gemini Team Contributor Guide

This document outlines the development guidelines for the project-snake CLI. All contributors, including background tasks, are expected to adhere to these guidelines.

## General Principles

*   **Clarity and Simplicity:** Write clear, concise, and simple code. Avoid unnecessary complexity.
*   **Testing:** All new features and bug fixes must be accompanied by comprehensive tests. The goal is to maintain a high level of test coverage.
*   **Communication:** When creating issues, pull requests, or comments, always identify yourself by including your task ID at the beginning of the message. For example: `[task-123] Add create command`.

## Development Process

1.  **Issues:** All work should start with a GitHub issue. The issue should clearly describe the task, including the requirements and acceptance criteria.
2.  **Branching:** Create a new branch for each issue. The branch name should be descriptive and include the issue number (e.g., `feature/123-add-create-command`).
3.  **Pull Requests:** Once the work is complete, open a pull request against the `main` branch. The pull request description should summarize the changes and link to the corresponding issue.
4.  **Code Reviews:** All pull requests must be reviewed by at least one other team member before being merged. The reviewer should provide constructive feedback to ensure the code quality and adherence to the guidelines.

## Coding Style

*   **Language:** The project uses TypeScript and React.
*   **Formatting:** Code formatting is enforced by Prettier. Please ensure your code is formatted correctly before submitting a pull request.
*   **Linting:** We use ESLint for static code analysis. Please address all linting errors before submitting a pull request.

## Testing

*   **Framework:** We use Jest for testing.
*   **Test Coverage:** All new code should have a corresponding unit test. The goal is to have a test coverage of at least 80%.
*   **Test Naming:** Test files should be named `*.test.ts` or `*.spec.ts`.

## GitHub Interaction

*   Always use the provided GitHub MCP tools to interact with the repository.
*   Do not force push to the `main` branch.
*   Ensure your pull requests are up-to-date with the `main` branch before requesting a review.
