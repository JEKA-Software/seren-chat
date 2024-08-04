import React from 'react'
import styles from './CommonQuestions.module.css'

export default function CommonQuestions({
  handleCommonQuestion
}: {
  handleCommonQuestion: (text: string, answer: string) => void
}) {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        onClick={() =>
          handleCommonQuestion(
            'What is the schedule for trash and recycle?',
            `The trash and recycle pickup schedule for Cheval West Community is as follows:\n\n` +
              `• **Trash pickup:** Monday and Thursday\n\n` +
              `• **Recycle pickup:** Monday\n\n` +
              `• **Yard waste pickup:** Monday\n\n` +
              `Please note that containers may only be left out on the day for the respective pickup and should be promptly returned from the street after collection to avoid potential fines.`
          )
        }>
        <span className={styles.buttonText}>Trash Pickup</span>
      </button>
      <button
        className={styles.button}
        onClick={() =>
          handleCommonQuestion(
            'Can I put up a fence on my property?',
            `You can put up a fence on your property in Cheval West, but there are specific guidelines you must follow:\n\n` +
              `• **Approval Required:** You need to obtain written approval from the Architectural Review Committee before erecting any fence or wall.\n\n` +
              `• **Material and Design:** Only metal fences in the style of black or white wrought iron are permitted. The fence should consist of 5/8” to 1” pickets, 1” to 1.6” stringers, and 1x1” horizontal rails with spacing of 3” to 4”.\n\n` +
              `• **Height Restrictions:** No fence or wall over four (4) feet in height is allowed, except for tennis courts and other special conditions approved by the Architectural Review Committee.\n\n` +
              `• **Location:** The fence must be erected entirely within your property line.\n\n` +
              `Please ensure you follow these guidelines and obtain the necessary approvals to avoid any issues.`
          )
        }>
        <span className={styles.buttonText}>Fences</span>
      </button>
      <button
        className={styles.button}
        onClick={() =>
          handleCommonQuestion(
            'What are the rules for flags on my property?',
            `In Florida, homeowners have specific rights regarding the display of flags on their property, as outlined in the Florida Statutes and community guidelines:\n\n` +
              `**Florida Statutes**\n\n` +
              `1. **Permitted Flags:** Homeowners may display up to two of the following flags, each not larger than 4 1/2 feet by 6 feet:\n` +
              `  - The United States flag\n` +
              `  - The official flag of the State of Florida\n` +
              `  - A flag representing the United States Army, Navy, Air Force, Marine Corps, Space Force, or Coast Guard\n` +
              `  - A POW-MIA flag\n` +
              `  - A first responder flag, which can honor various emergency and safety personnel.\n\n` +
              `2. **Flagpole Regulations:** Homeowners may erect a freestanding flagpole up to 20 feet high on their property, provided it does not obstruct sightlines at intersections or is not erected within an easement. The flagpole can display one official United States flag and one additional flag permitted under the above guidelines, with the additional flag being equal in size to or smaller than the United States flag. The flagpole and display must comply with all building codes, zoning setbacks, and other applicable regulations.\n\n` +
              `**Community Guidelines (Cheval West)**\n\n` +
              `1. **Flagpoles:** Approval is required for installing flagpoles. The flagpole must be appropriately sized for the lot and not exceed 20 feet in height. It must not obstruct sightlines at intersections or be erected within an easement.\n\n` +
              `2. **Flagstaffs:** No approval is required for a flagstaff attached to a house, provided it is under 6 feet in length, no greater than 2 inches in diameter, and is a neutral tone.\n\n` +
              `3. **Flag Display:** Homeowners may display up to two of the following flags, each not larger than 4 1/2 feet by 6 feet:\n` +
              `  - The United States flag\n` +
              `  - The official flag of the State of Florida\n` +
              `  - A flag representing the United States Army, Navy, Air Force, Marine Corps, Space Force, or Coast Guard\n` +
              `  - A POW-MIA flag\n` +
              `  - A first responder flag.\n\n` +
              `4. **Maintenance:** Flags, flagpoles, and flagstaffs must be maintained in good condition. Flags that are frayed, dilapidated, worn out, tattered, or faded must be removed and not displayed unless repaired or replaced. Proper lighting is encouraged for displaying the American Flag on a permanent flagpole.\n\n` +
              `These rules ensure that homeowners can display flags respectfully while adhering to community standards and legal requirements.`
          )
        }>
        <span className={styles.buttonText}>Flags</span>
      </button>
    </div>
  )
}
