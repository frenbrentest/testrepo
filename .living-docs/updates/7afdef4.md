# Living Docs — AI analysis

This pull request was opened automatically from commit `7afdef4`.

Review the proposed documentation below and merge or copy changes into your source files as needed.

## `utils.ts`

- **Symbol:** calculateTotal
- **Changed:** true
- **Drift detected:** true

### Reason

The function's return type changed from Record<string, number>[] with net, tax, discount to { subtotal, tax, total }[], and the calculation logic now applies discount to get subtotal, then tax on subtotal, then total = subtotal + tax. The stored documentation described the old behavior (net, tax, discount). The inline JSDoc had incorrect parameter name ('items' instead of 'prices') and described a different return type (total sum as a number). Both are now inaccurate.

### Proposed documentation

~~~ts
/**
 * Calculates subtotal, tax, and total for each price after applying a discount.
 * @param prices - An array of numbers representing base prices.
 * @param discountRate - The discount rate to apply (default 0).
 * @returns An array of objects with subtotal, tax, and total amounts.
 */
~~~
