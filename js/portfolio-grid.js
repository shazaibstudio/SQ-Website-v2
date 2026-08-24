// ============================================================
// SQ INTERACTIVE — PORTFOLIO GRID
// Renders projects from projects-data.js with filtering
// ============================================================

(function () {
  'use strict';

  const PORTFOLIO_CONTAINER = document.getElementById('portfolio-grid-container');
  if (!PORTFOLIO_CONTAINER) return;

  // State
  let currentFilter = 'all';
  let filteredProjects = [];

  // Initialize
  function init() {
    renderPortfolio();
    attachFilterListeners();
  }

  // Render Portfolio Grid
  function renderPortfolio() {
    // Get all projects and apply filter
    filteredProjects = filterProjects();

    if (filteredProjects.length === 0) {
      PORTFOLIO_CONTAINER.innerHTML = `
        <div class="sq-portfolio-empty">
          <p>No projects found in this category.</p>
        </div>
      `;
      return;
    }

    // Render each project as a card
    PORTFOLIO_CONTAINER.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');

    // Animate cards on load
    const cards = PORTFOLIO_CONTAINER.querySelectorAll('.sq-portfolio-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
      setTimeout(() => {
        card.style.transition = 'all 0.5s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 50);
    });
  }

  // Filter projects based on selected world
  function filterProjects() {
    if (currentFilter === 'all') {
      return SQ_PROJECTS;
    }
    return SQ_PROJECTS.filter(project => project.world === currentFilter);
  }

  // Create individual project card HTML
  function createProjectCard(project) {
    const imageUrl = project.image || project.images?.[0] || '../images/no-background.png';
    const services = project.services.map(serviceId => {
      const service = SQ_SERVICES[serviceId];
      return service ? service.title : serviceId;
    }).join(', ');

    const linkHtml = project.link 
      ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="sq-portfolio-card__link" data-cta="portfolio_project_${project.id}">View live site →</a>`
      : '';

    return `
      <article class="sq-portfolio-card" data-world="${project.world}" data-project="${project.id}">
        <div class="sq-portfolio-card__image">
          <img 
            src="${imageUrl}" 
            alt="${project.title}" 
            loading="lazy"
          />
        </div>
        <div class="sq-portfolio-card__content">
          <div class="sq-portfolio-card__meta">
            <span class="sq-portfolio-card__world">${capitalizeWorld(project.world)}</span>
            ${project.category ? `<span class="sq-portfolio-card__category">${project.category}</span>` : ''}
          </div>
          <h3 class="sq-portfolio-card__title">${project.title}</h3>
          ${project.subtitle ? `<p class="sq-portfolio-card__subtitle">${project.subtitle}</p>` : ''}
          <p class="sq-portfolio-card__description">${project.description}</p>
          ${services ? `<p class="sq-portfolio-card__services"><strong>Services:</strong> ${services}</p>` : ''}
          ${linkHtml}
        </div>
      </article>
    `;
  }

  // Attach filter button listeners
  function attachFilterListeners() {
    const filterBtns = document.querySelectorAll('[data-filter-btn]');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const newFilter = e.target.dataset.filterBtn;
        
        if (currentFilter !== newFilter) {
          // Update filter state
          currentFilter = newFilter;
          
          // Update active button
          filterBtns.forEach(b => b.classList.remove('is-active'));
          e.target.classList.add('is-active');
          
          // Re-render grid
          renderPortfolio();
        }
      });
    });
  }

  // Helper: Capitalize world name
  function capitalizeWorld(world) {
    const map = {
      'digital': 'Digital',
      'immersive': 'Immersive',
      'ai': 'AI',
      'lab': 'Lab'
    };
    return map[world] || world;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
