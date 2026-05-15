# Living Docs — AI analysis

This pull request was opened automatically from commit `9cce5eb`.

Review the proposed documentation below and merge or copy changes into your source files as needed.

## `utils.ts`

- **Symbol:** calculateTotal
- **Changed:** true
- **Drift detected:** true

### Reason

The function's return type changed from number to string[], and the implementation now returns an array of formatted price strings instead of a single total. The existing inline JSDoc (visible in the diff) likely described the old behavior and is now inaccurate.

### Proposed documentation

~~~ts
/**
 * Calculates discounted prices for each item and returns them as formatted strings.
 * @param prices - Array of original prices.
 * @param discountRate - Discount rate to apply (0 to 1). Defaults to 0.
 * @returns An array of strings, each formatted as a dollar amount with two decimal places.
 */
~~~
