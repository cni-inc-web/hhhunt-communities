function updateActiveTabContent() {
  const overviewTab = document.getElementById('creekside-cove-community-overview-tab');
  const locationTab = document.getElementById('creekside-cove-location-tab');
  const overviewContent = document.getElementById('creekside-cove-community-overview');
  const locationContent = document.getElementById('creekside-cove-location');

  // Sync is-active class based on Webflow's w--tab-active class
  if (overviewTab.classList.contains('w--tab-active')) {
    overviewContent.classList.add('is-active');
  } else {
    overviewContent.classList.remove('is-active');
  }

  if (locationTab.classList.contains('w--tab-active')) {
    locationContent.classList.add('is-active');
  } else {
    locationContent.classList.remove('is-active');
  }
}

// Run on initial load
document.addEventListener('DOMContentLoaded', () => {
  updateActiveTabContent();

  // Listen for tab changes using Webflow's Tab trigger
  document.querySelectorAll('[data-w-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      // Let Webflow do its thing, then update
      setTimeout(updateActiveTabContent, 200);
    });
  });
});