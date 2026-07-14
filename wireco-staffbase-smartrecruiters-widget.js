(function () {
  'use strict';

  // WireCo Staffbase SmartRecruiters Internal Jobs Widget
  // Upload this .js file to Staffbase or reference it from a Staffbase custom widget.

  var SMART_WIDGET_SCRIPT = 'https://static.smartrecruiters.com/job-widget/1.8.7/script/smart_widget.js';
  var SMART_WIDGET_CSS = 'https://static.smartrecruiters.com/job-widget/1.8.7/css/smart_widget.css';

  var widgetConfig = {
    company_code: 'WireCoWorldGroup',
    departments_field_id: '5a999669b60a5e2f7b2c56b5',
    jobAdType: 'INTERNAL_OR_PUBLIC',
    api_url: 'https://www.smartrecruiters.com',
    custom_css_url: SMART_WIDGET_CSS,
    job_ad_url: 'SmartRecruiters Job Search',
    bg_color_even_row: '#e0e0e0',
    bg_color_headers: '#969696',
    bg_color_links: '#55dd88',
    bg_color_odd_row: '#f7f7f7',
    bg_color_widget: '#ffffff',
    txt_color_headers: '#292929',
    txt_color_job: '#3d3d3d',
    auto_height: 'auto',
    auto_width: 'auto',
    job_title: 'true',
    location: 'true',
    type_of_employment: 'false',
    department: 'false',
    published_since: 'false',
    remove_headers: 'false',
    add_search: 'false',
    auth: 'dfaefd162ef442c482ca05437accfa81'
  };

  function loadStylesheet(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
  }

  function loadScript(src, callback) {
    var existingScript = document.querySelector('script[src="' + src + '"]');

    if (existingScript) {
      if (typeof window.widget === 'function') {
        callback();
      } else {
        existingScript.addEventListener('load', callback, { once: true });
      }
      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = callback;
    script.onerror = function () {
      showFallbackMessage('Unable to load the SmartRecruiters jobs widget.');
    };
    document.head.appendChild(script);
  }

  function ensureContainer() {
    var container = document.getElementById('wireco-smartrecruiters-jobs');

    if (!container) {
      container = document.createElement('div');
      container.id = 'wireco-smartrecruiters-jobs';

      var currentScript = document.currentScript;
      if (currentScript && currentScript.parentNode) {
        currentScript.parentNode.insertBefore(container, currentScript.nextSibling);
      } else {
        document.body.appendChild(container);
      }
    }

    return container;
  }

  function showFallbackMessage(message) {
    var container = ensureContainer();
    container.innerHTML = '';

    var notice = document.createElement('div');
    notice.setAttribute('role', 'status');
    notice.style.padding = '16px';
    notice.style.border = '1px solid #ddd';
    notice.style.background = '#fff';
    notice.style.color = '#3d3d3d';
    notice.style.fontFamily = 'Arial, sans-serif';
    notice.textContent = message;

    container.appendChild(notice);
  }

  function initializeWidget() {
    ensureContainer();

    if (typeof window.widget !== 'function') {
      showFallbackMessage('SmartRecruiters jobs widget is not available.');
      return;
    }

    window.widget(widgetConfig);
  }

  loadStylesheet(SMART_WIDGET_CSS);
  loadScript(SMART_WIDGET_SCRIPT, initializeWidget);
})();