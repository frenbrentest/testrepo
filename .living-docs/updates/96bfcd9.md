# Living Docs — AI analysis

This pull request was opened automatically from commit `96bfcd9`.

Review the proposed documentation below and merge or copy changes into your source files as needed.

## `utils.ts`

- **Symbol:** calculateTotal
- **Changed:** true
- **Drift detected:** true

### Reason

The function's return type changed from Map<string, number> to number, and the implementation now sums discounted prices instead of computing per-item discounted+taxed prices. The stored documentation describes the old Map-based behavior, and the inline JSDoc uses an incorrect parameter name ('items' instead of 'prices'). Both are inaccurate.

### Proposed documentation

~~~ts
/**
 * Calculates the total sum of prices after applying a discount.
 * @param prices - An array of original prices.
 * @param discountRate - The discount rate to apply (default 0).
 * @returns The total sum as a number.
 */
~~~
