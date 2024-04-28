# aggiehouse

How can we create an app/program that will send out text reminders to volunteers about their shifts so that volunteer absenteeism cna be decreased?

- Volunteer shifts may be forgotten due to busy schedules
- Currently uses a Google Sheet calendar to display scheduled shifts
- Lacks a reminder system for volunteer shifts


Steps:
- clock API
- create a spreadsheet with sample data
- import spreadsheet into our code
- if a time matches the clock time, read who's name it's attached to and send them a notification
    - text message (phone notification)

What we have done:
- display clock and date on local host
- cleaned spreadsheet data

What to do next:
When current date is same is work date and time is 1 hour before 7pm, call function to alert volunteers
Take person’s name and find corresponding email address
Send email alert