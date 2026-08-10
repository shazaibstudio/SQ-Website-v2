// GitHub Pages URL Redirect Handler
// Since GitHub Pages doesn't support .htaccess, handle redirects client-side

(function() {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    
    // Redirect mappings for old URLs with spaces
    const redirects = {
        '/vr real estate.html': '/vr-real-estate.html',
        '/ai interior design.html': '/ai-interior-design.html',
        '/360 content.html': '/360-content.html',
        '/interractive pc .html': '/interactive-pc.html',
        '/interractive walkthroughs.html': '/interactive-walkthroughs.html',
        '/vr staging.html': '/vr-staging.html',
        '/Furniture Scanning.html': '/furniture-scanning.html',
        
        // Urdu redirects
        '/vr real estate-ur.html': '/vr-real-estate-ur.html',
        '/ai interior design-ur.html': '/ai-interior-design-ur.html',
        '/360 content-ur.html': '/360-content-ur.html',
        '/interractive pc-ur.html': '/interactive-pc-ur.html',
        '/interractive walkthroughs-ur.html': '/interactive-walkthroughs-ur.html',
        '/vr staging-ur.html': '/vr-staging-ur.html',
        '/Furniture Scanning-ur.html': '/furniture-scanning-ur.html',
        
        // Home redirects
        '/home.html': '/',
        '/home': '/'
    };
    
    // Check if current path needs redirect
    if (redirects[currentPath]) {
        window.location.replace(redirects[currentPath] + currentSearch);
    }
    
    // Handle URLs with encoded spaces
    const decodedPath = decodeURIComponent(currentPath);
    if (redirects[decodedPath] && decodedPath !== currentPath) {
        window.location.replace(redirects[decodedPath] + currentSearch);
    }
})();