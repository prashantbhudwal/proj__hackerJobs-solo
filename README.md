# About

A simple job board called HackerJobs that fetches job listings from Hacker News API and allows users to save jobs for later viewing.

# Stack

- Next 13
- Tailwind
- Typescript
- Server Components

# Requirements and Analysis

## Figma File

[https://www.figma.com/file/jhFRdFIdHpRxsDznNXtpXw/Watchlist-Creator?node-id=2%3A17](https://www.figma.com/file/jhFRdFIdHpRxsDznNXtpXw/Watchlist-Creator?node-id=2%3A17)

## Stories

Users will be able to

- Search for a job
- Add a job to their saved jobs list that persists on their device
- Switch to dark mode
- Click the job card and go to the job details page

## Possible Components

- Job Card
  - Visual States
    - Added
    - Removed
- Search
  - Visual States
    - Empty
    - Typing
    - Fetching
    - Fetched
- Header
  - Visual States
    - Jobs Search Page Header
    - Saved Jobs Header
- Body Wrapper
  - With Jobs
  - Without Jobs in Jobs Search Page
  - Without Jobs in Saved Jobs Page

## Possible Routes

- Static
  - Jobs Search Page
  - Saved Jobs Page
- Dynamic
  - Job Details Page
