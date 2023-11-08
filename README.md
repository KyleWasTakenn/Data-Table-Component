# React + TypeScript + Vite + Shadcn-ui

Data table component for my ongoing password manager project.

----- TODO // NOTES -----

- Fix styling on hover for title items (Background color changes).

  - Fixed by using h1 element instead of body element.

- Animation feedback for credential copying.

  - BG or no BG for credential buttons?
    ++ If BG, work on a fade-in animation on-hover.

- Delete option for selected entries.

  - Will require either deleting the mock data permanently, or creating a mock backend DB for testing.
    ++ For now just make a delete button pop up when selecting accounts, + make a confirmation modal

- Modal popup for editing existing account info.

  - Added edit option in menu button, no functionality yet.

- Resizable table columns

List of components needed so far:

- Edit info modal.
- Confirmation modal for deleting account info.
