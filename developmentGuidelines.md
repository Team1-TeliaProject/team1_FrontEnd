# Development process guidelines

## General

### Project timeline 20.10.2020 - 11.11.2020

- **Sprints Timetable**

  **kick - off** 24.03 - 26.03

  - Project Preparations

  **Sprint 1** 29.03 - 09.04

  - Set-up & Design

  **Sprint 2** 12.04 - 23.04

  - Front-end Visual Styling

  **Sprint 3** 26.04 - 07.05

  - MVP

  **Sprint 4** 10.05 - 21.5

  - (initial target: MVP+ items)

    21.05 - Final Project Presentation

### **Scrum meetings**

**Every Wedenesday**

- Sprint Demo: 9:30 - 10:10
- Restrospective: 10:10 - 10:30
- Sprint Planning: 10:30 -11:00
- Development time: 11:45 - 15:00
- Joint development time 11:45 - 15:00

### Daily Meetings

Thrusday - Friday **09:00 - 09:30**

Individual development time as per allowed by personal schedules

## Guideliness for Git branching

**master**

"Production" branch

- Commits must only be merges from "staging" branch

**staging**

- Code ready to be merged to master
- Commits must satisfy MVP+ and be squashed merges from "dev" branch

**dev**
"Development branch"

- Main development branch from which all development should branch out from

- Commits must be merges from feature/bug/doc branches via pull requests

**Feature branch**

- naming convention: feature/...(issue)
- commit message must start with prefix branch name, i.e feature/featurename

**bugfix**

- Bug fixing branches for existing features
- Commits must include commit msg with prefix bugfix/%feature name%:

**doc**

- Documentation
- Commits must include commit msg with prefix doc/%documentation headline%:

## Step-by-step example for starting on a new feature:

- Make sure you're code is up-to-date, and then branch out from dev:

```
$ git pull --all
$ git checkout dev
$ git checkout -b feature/%my_awesome_new_feature%
```

Once done, or at least once a day when you've been coding, add & commit:

```
$ git add %files_that_you_added%
$ git commit -m "feature/%my_awesome_new_feature%: your commit msg here"

```

And push to remote. 1st time with:

```
$ git push --set-upstream origin feature/%my_awesome_new_feature%
```

Subsequent times go directly with:

```
$ git push
```

Finally, once you're done with coding and testing your feature, and have pushed them to remote, **create a pull request** on GitHub to begin merge of your feature branch back to the **dev branch**.
See link for more detailed instructions:
https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
