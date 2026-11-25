// Initialize theme before React renders
(function () {

    let theme = 'system';

    // Retrieve the saved preference
    try {
        const savedTheme = localStorage.getItem('chris-dev-theme');

        if (
            savedTheme === 'light' ||
            savedTheme === 'dark' ||
            savedTheme === 'system'
        ) {
            theme = savedTheme;
        }

    } catch (error) {
        console.warn('Unable to read theme preference:', error);
    }

    // Detect system appearance
    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;

    // Resolve the theme
    const resolvedTheme = theme === 'system'
        ? (prefersDark ? 'dark' : 'light')
        : theme;

    // Apply theme to the HTML document
    document.documentElement.dataset.theme = resolvedTheme;

})();