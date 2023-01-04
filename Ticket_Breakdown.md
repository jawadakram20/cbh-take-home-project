# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Add a new field to the Agents table in the database to store custom ids for each Agent.
  - Acceptance Criteria:
    - The field should be a string type and have a maximum length of 50 characters
    - The field should be nullable
  - Time/Effort Estimate: 1 hour
  - Implementation Details:
    - Use SQL to alter the Agents table to add the new field
    - Test the new field to ensure it is working as expected
2. Modify the getShiftsByFacility function to include the custom id for each Agent in the metadata returned.
  - Acceptance Criteria:
    - The custom id for each Agent should be included in the metadata returned by the function
  - Time/Effort Estimate: 1 hour
  - Implementation Details:
    - Update the SQL query used in the function to also select the custom id for each Agent
    - Modify the function to return the custom id in the metadata for each Shift
    - Test the function to ensure it is working as expected
3. Modify the `generateReport` function to use the custom id for each Agent instead of the internal database id when generating the report.
  - Acceptance Criteria:
    - The report should use the custom id for each Agent instead of the internal database id
  - Time/Effort Estimate: 1 hour
  - Implementation Details:
    - Modify the function to use the custom id for each Agent instead of the internal database id when generating the report
    - Test the function to ensure it is working as expected
4. Modify the user interface for Facilities to allow them to enter custom ids for each Agent.
  - Acceptance Criteria:
    - There should be a new form field on the user interface for Facilities to enter the custom id for each Agent
    - The form field should be validated to ensure it is not empty and is a maximum of 50 characters
    - When the form is submitted, the custom id for each Agent should be saved to the database
  - Time/Effort Estimate: 2 hours
  - Implementation Details:
    - Modify the user interface for Facilities to include the new form field
    - Add form validation for the custom id field
    - Modify the backend code to save the custom id to the database when the form is submitted
    - Test the user interface and backend code to ensure it is working as expected
5. Update documentation to reflect the new feature of custom ids for Agents on reports.
  - Acceptance Criteria:
    - The documentation should clearly describe the new feature and how it works
    - The documentation should include instructions on how to use the new form field to enter custom ids for each Agent
  - Time/Effort Estimate: 1 hour
  - Implementation Details:
    - Update the documentation to reflect the new feature and how it works
    - Include instructions on how to use the new form field to enter custom ids for each Agent
    - Test the documentation to ensure it is accurate and easy to understand


