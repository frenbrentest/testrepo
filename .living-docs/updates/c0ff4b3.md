# Living Docs — AI analysis

This pull request was opened automatically from commit `c0ff4b3`.

Review the proposed documentation below and merge or copy changes into your source files as needed.

## `utils.ts`

- **Symbol:** calculateTotal
- **Changed:** true
- **Drift detected:** true

### Reason

The function signature changed from returning an array of objects to a single number. The inline JSDoc had an incorrect parameter name ('items' instead of 'prices') and lacked a description. The stored existing documentation was for a different symbol (clamp) and not applicable.

### Proposed documentation

~~~ts
/**
 * Calculates the total price after applying a discount rate.
 * @param prices - An array of numbers representing prices.
 * @param discountRate - The discount rate to apply (0 to 1). Defaults to 0.
 * @returns The total sum after discount as a number.
 */
~~~
