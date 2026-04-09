// Add class to Gutenberg group block ____________________________________________
if($('.wp-block-group').children().length > 0) {
    $('.wp-block-group > .wp-block-group__inner-container').addClass('page-panel');
}

// Input clear button ____________________________________________________________
$( document ).ready(function() {
    var fadeTime = 150;

    // If no value, hide clear button
    $('.input').each(function(){
        if($(this).find('.input-clear').length !== 0 && !$(this).find('input').val()){
            $(this).find('.input-clear').css('display', 'none');
        }
    });

    // Show clear button when input has value 
    $('.input').on('input', function() {
        if($(this).find('input').val() ){
            $(this).find('.input-clear').fadeIn(fadeTime).css('display', '');
        } else {
            $(this).find('.input-clear').fadeOut(fadeTime);
        }
    });

    // Clear input with clear button
    $('.input-clear').click(function() {
        $(this).parent().find('input').val('');
        $(this).hide();
    });


});


// Accordion parent IDs __________________________________________________________
$(document).ready(function() {
    var parentId = $('.accordion-collapse').parents('.accordion').attr('id');

    if ($('.accordion').hasClass('single-expansion')) {
        $('#' + parentId + ' .accordion-collapse').attr('data-bs-parent', '#' + parentId);
    }
});


// Checkbox states _______________________________________________________________
$(document).ready(function() {
    $('.indeterminate').prop('indeterminate', true);
    $(document).on('click', 'input.indeterminate', function () {
        $(this)
        .prop('indeterminate', false) // removes the visual indeterminate state
        .removeClass('indeterminate'); // removes the class
    });

    $('input[type="checkbox"].selected').prop('checked', true);
    $('input[type="checkbox"].selected').on('click', function () {
        $(this).removeClass('selected');
    });

    $('.state_disabled').find('.form-check-input').prop("disabled", true);
    $('.state_readonly').find('.form-check-input').prop("readonly", true);
    $('.state_error').find('.form-check-input').addClass("is-invalid", true);

    $(document).on('click', '.form-check-input[readonly]', function (e) {
        e.preventDefault();
    });

    // Checkbox input disabled
    $('.input:has(.check-input)').each(function () {
        const $inputs = $(this).find('input[type="checkbox"], input[type="radio"]');
        const allDisabled = $inputs.length && $inputs.filter(':not(:disabled)').length === 0;

        if (allDisabled) {
            $(this).addClass('disabled');
        }
    });
});




// Form character count __________________________________________________________
$(document).ready(function() {
    $('textarea').keyup(function() {
        var count = $(this).val().length,
            maxlength = $(this).attr('maxlength'),
            range = maxlength - 10;

        $(this).parent('.response').find('.counting').text(count);

        if(count >= range && count <= maxlength) {
            $(this).parent('.response').find('.counter').addClass('counter-warning');
        } else if (count < range) {
            $(this).parent('.response').find('.counter').removeClass('counter-warning');
        }
    });
    
});



// Slick carousel ________________________________________________________________
$(document).ready(function(){
    $('.carousel-body').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false, // using custom arrows - carousel indicators
        // fade: true,
        dots: true,
        respondTo: 'slider',
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.carousel-control-next').click(function() {
        $(this).parents('.carousel').find('.carousel-body').slick('slickNext');
    });

    $('.carousel-control-prev').click(function() {
        $(this).parents('.carousel').find('.carousel-body').slick('slickPrev');
    });

    $('.slick-dots').addClass('carousel-indicators');
    
    $(window).resize(function(){
        $('.slick-dots').addClass('carousel-indicators');
    })
});


// Number input step buttons _____________________________________________________
$('.step-btn').off('click').on('click', function () {

    if(!$(this).parent().find('input').val()) {
        $(this).parent().find('input').val('0');
    }

    if ($(this).hasClass('step-add')) {
        var addValue = parseInt($(this).parent().find('input').val()) + 1;
        $(this).parent().find('input').val(addValue).trigger('change');
    }

    if ($(this).hasClass('step-minus')) {
        var removeValue = parseInt($(this).parent().find('input').val()) - 1;

        // if( removeValue == 0 ) {
        //     removeValue = 1;
        // }
        $(this).parent().find('input').val(removeValue).trigger('change');
    }

});


$('.quantity input').off('change').on('change', function() {
    console.log($(this).val());
});



// Build table of contents _______________________________________________________
$(document).ready(function () {
    var toc = document.getElementById("ToC");
    if (!toc) return;

    // Add header
    var tocHeader = document.createElement("h2");
    tocHeader.className = "toc-title title-01";
    tocHeader.innerText = "On this page";
    toc.appendChild(tocHeader);

    var tocList = document.createElement("ul");

    // Find headings inside .heading blocks
    $('.text-block h2, .text-block h3').each(function () {
        var $heading = $(this);
        var anchor = $heading.closest('.text-block').find('a.anchor[id]').first();

        if (anchor.length) {
            var tocListItem = document.createElement("li");
            tocListItem.className = $heading.prop('nodeName');

            var tocEntry = document.createElement("a");
            tocEntry.setAttribute("href", "#" + anchor.attr('id'));
            tocEntry.innerText = $heading.text().trim();

            tocListItem.appendChild(tocEntry);
            tocList.appendChild(tocListItem);
        }
    });

    toc.appendChild(tocList);
});




// Dos & donts ___________________________________________________________________
$(document).ready(function () {
    var dosinsert = '<span class="do-label label-02">Do:</span>',
        dontsinsert = '<span class="dont-label label-02">Don&#39;t:</span>';

        $('.card-do').before(dosinsert);
        $('.card-dont').before(dontsinsert);
});


// Set input states ______________________________________________________________
$(document).ready(function () {
    $('.state_disabled').find('.form-control').prop("disabled", true);
    $('.state_readonly').find('.form-control').prop("readonly", true);
    $('.state_disabled').find('.form-select').prop("disabled", true);
    $('.state_readonly').find('.form-select').prop("disabled", true);
    $('.state_readonly').find('.form-select').addClass("readonly");
    $('.state_disabled .dropdown').find('.dropdown-toggle').prop("disabled", true);
    $('.state_readonly .dropdown').find('.dropdown-toggle').prop("disabled", true);
    $('.state_readonly .dropdown').find('.dropdown-toggle').addClass("readonly");
    $('.state_readonly .dropdown').find('.dropdown-label').text("Option 1");

    $('.accordion.state_disabled').find('.accordion-button').prop("disabled", true);
});


// Get parent ID for innerblock text input and handle multi-inputs
$(document).ready(function () {
  // skip entirely if any .input contains a .dropdown (your original condition)
    if ($('.input').find('.dropdown, .form-slider').length === 0) {
        // Only run if at least one .input has a child with .form-control
        if ($('.input').has('.form-control').length > 0) {

        // Loop through only those .input elements that contain .form-control
        $('.input').has('.form-control').each(function () {
            var $inputWrapper = $(this);
            var $formControls = $inputWrapper.find('.form-control');
            var $formLabel = $inputWrapper.find('.form-label');

            if ($formControls.length === 0) return; // nothing to do

            // Grab current label for (if present) and normalize a base id
            var labelFor = $formLabel.attr('for') || '';
            // If labelFor ends with a -<number>, strip that so we can re-append indices
            var baseFromLabel = labelFor.replace(/-\d+$/, '');

            // If there is no usable labelFor, attempt to derive a base from the first input id
            var firstInputId = $formControls.first().attr('id') || '';
            var baseFromInput = firstInputId.replace(/-\d+$/, '');

            // Choose base id: prefer label, fall back to first input id
            var baseId = baseFromLabel || baseFromInput;

            // If we still don't have a base, fall back to a safe default (generate a unique base)
            if (!baseId) {
            // create a simple unique base using timestamp to avoid collisions
            baseId = 'input-' + Date.now();
            }
            // Iterate controls and assign new ids with -1, -2, ...
            $formControls.each(function (idx) {
            var i = idx + 1; // 1-based index
            var newId = baseId + '-' + i;

            // ensure the id is valid (no spaces)
            newId = newId.replace(/\s+/g, '-');

            $(this).attr('id', newId);

            // If this is the first input, update the label's for attribute
            if (i === 1 && $formLabel.length) {
                $formLabel.attr('for', newId);
            }
            });

        }); // end each .input
        }
    }
});

// Get parent ID for innerblock select input
$(document).ready(function () {
    // Only run if at least one .input has a child with .form-select
    if ($('.input').has('.form-select').length > 0) {
        // Loop through only those .input elements that contain .form-select
        $('.input').has('.form-select').each(function () {
            var $formSelect = $(this).find('.form-select');
            var $formLabel = $(this).find('.form-label');

            var inputID = $formSelect.attr('id');
            var labelID = $formLabel.attr('for');

            if (inputID && labelID) {
                var suffix = inputID.split('_').pop();
                var newID = labelID.concat('_', suffix);

                $formSelect.attr('id', newID);
                $formLabel.attr('for', newID);
            }
        });
    }
});

// Get parent ID for innerblock dropdown input
$(document).ready(function () {
    // Only run if at least one .input has a child with .dropdown
    if ($('.input').has('.dropdown').length > 0) {
        // Loop through only those .input elements that contain .dropdown
        $('.input').has('.dropdown').each(function () {
            var $toggle = $(this).find('.dropdown-toggle');
            var $formLabel = $(this).find('.form-label');
            var $menu = $(this).find('.dropdown-menu');

            var inputID = $toggle.attr('id');
            var labelID = $formLabel.attr('for');

            if (inputID && labelID) {
                var suffix = inputID.split('_').pop();
                var newID = labelID.concat('_', suffix);

                $toggle.attr('id', newID);
                $formLabel.attr('for', newID);
                $menu.attr('aria-labelledby', newID);
            }
        });
    }
});

// Colour swatch label contrast _____________________________________________________
$(document).ready(function() {
    function getContrastYIQ(hexColor) {
        hexColor = hexColor.replace('#', '');

        const r = parseInt(hexColor.substr(0, 2), 16);
        const g = parseInt(hexColor.substr(2, 2), 16);
        const b = parseInt(hexColor.substr(4, 2), 16);

        const yiq = (r * 299 + g * 587 + b * 114) / 1000;

        return yiq >= 128 ? '#1a1a1a' : '#fff';
    }

    $('.colour-grid-swatch').each(function() {
        const $swatch = $(this);
        const hex = $swatch.data('hex'); // Assume each swatch has a data-hex="#RRGGBB"
        const $label = $swatch.find('.colour-label');
        const $nameTag = $swatch.find('.colour-name');

        if (hex) {
            const contrastColour = getContrastYIQ(hex);
            $label.css('color', contrastColour);
            $nameTag.css('color', contrastColour);
        }
    });
});


// Selectable card __________________________________________________________________
// Checkbox
$(document).ready(function () {
    $('.card-selectable').each(function () {
        const $card = $(this);
        const $checkbox = $card.find('input[type="checkbox"]');

        if ($checkbox.prop('checked')) {
            $card.addClass('active');
        } else {
            $card.removeClass('active');
        }
    });

    $('.card-selectable input[type="checkbox"]').on('change', function () {
        const $checkbox = $(this);
        const $card = $checkbox.closest('.card-selectable');
        $card.toggleClass('active', $checkbox.prop('checked'));
    });

    $('.card-selectable').has('input[type="checkbox"]').on('click', function (e) {
      // Prevent toggling the checkbox twice if the checkbox itself was clicked
        if ($(e.target).is('input[type="checkbox"]')) return;

        const $card = $(this);
        const $checkbox = $card.find('input[type="checkbox"]');

      // Toggle the checkbox state
        $checkbox.prop('checked', !$checkbox.prop('checked'));

      // Optional: add or remove a class to style the card as selected
        $card.toggleClass('active', $checkbox.prop('checked'));
    });
});

// Radio
$(document).ready(function () {
    $('.card-selectable').has('input[type="radio"]').on('click', function (e) {
        const $radio = $(this).find('input[type="radio"]');
        const groupName = $radio.attr('name');

        // Only trigger if the clicked card is *not* already selected
        if (!$radio.prop('checked')) {
            // Uncheck all radios in the group and remove active class
            $(`input[name="${groupName}"]`).each(function () {
                $(this).closest('.card-selectable').removeClass('active');
            });

            // Check the clicked radio and add active class
            $radio.prop('checked', true).trigger('change');
            $(this).addClass('active');
        }
    });

    $('.card-selectable input[type="radio"]').on('change', function () {
        const $card = $(this).closest('.card');
        const groupName = $(this).attr('name');

        // Remove 'active' from all cards in the same radio group
        $(`.card-selectable input[name="${groupName}"]`).closest('.card').removeClass('active');

        // Add 'active' to the selected card
        if (this.checked) {
            $card.addClass('active');
        }
    });

    // Optional: sync the .active class if radios are pre-selected via HTML
    $('input[type="radio"]:checked').each(function () {
        $(this).closest('.card-selectable').addClass('active');
    });
});



// Dismissible tag _______________________________________________________________
$(document).ready(function(){
    $('.tag .btn-close').click(function(){
        $(this).parent('.tag').remove();
    });
});


// Selectable tag ________________________________________________________________
// $( document ).ready(function() {
//     $('.tag-selectable').click(function(){
//         var tag = $(this);
//         $(tag).toggleClass('active');

//         if($(tag).hasClass('active')){
//             $(tag).attr('aria-selected', 'true');
//         } else {
//             $(tag).attr('aria-selected', 'false');
//         }
//     });
// });

// Selectable tag ___________________________________________________________________
// Multi
$(document).ready(function () {
    $('.tag-selectable').each(function () {
        const $tag = $(this);
        const $checkbox = $tag.find('input[type="checkbox"]');

        if ($checkbox.prop('checked')) {
            $tag.addClass('active');
        } else {
            $tag.removeClass('active');
        }
    });

    $('.tag-selectable').has('input[type="checkbox"]').on('click', function (e) {
      // Prevent toggling the checkbox twice if the checkbox itself was clicked
        if ($(e.target).is('input[type="checkbox"]')) return;

        const $tag = $(this);
        const $checkbox = $tag.find('input[type="checkbox"]');

      // Toggle the checkbox state
        $checkbox.prop('checked', !$checkbox.prop('checked'));

      // Optional: add or remove a class to style the tag as selected
        $tag.toggleClass('active', $checkbox.prop('checked'));
    });
});

// Radio
$(document).ready(function () {
    $('.tag-selectable').has('input[type="radio"]').on('click', function (e) {
        const $tag = $(this);
        const $radio = $tag.find('input[type="radio"]');
        const groupName = $radio.attr('name');

        // Only trigger if the clicked tag is *not* already selected
        if (!$radio.prop('checked')) {
            // Uncheck all radios in the group and remove active class
            $(`input[name="${groupName}"]`).each(function () {
                $tag.closest('.tag-selectable').removeClass('active');
            });

            // Check the clicked radio and add active class
            $radio.prop('checked', true).trigger('change');
            $tag.addClass('active');
        }
    });

    $('.tag-selectable input[type="radio"]').on('change', function () {
        const $tag = $(this).closest('.tag');
        const groupName = $(this).attr('name');

        // Remove 'active' from all tags in the same radio group
        $(`.tag-selectable input[name="${groupName}"]`).closest('.tag').removeClass('active');

        // Add 'active' to the selected tag
        if (this.checked) {
            $(this).addClass('active');
        }
    });

    // Optional: sync the .active class if radios are pre-selected via HTML
    $('input[type="radio"]:checked').each(function () {
        $(this).closest('.tag-selectable').addClass('active');
    });
});


// Live toast launch ________________________________________________________________
$(document).ready(function() {
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
    }
});



// Icon details modal _______________________________________________________________
document.addEventListener('DOMContentLoaded', function () {
    const modalEl = document.getElementById('iconModal');
    if (!modalEl) return;

    const footerEl   = modalEl.querySelector('.modal-footer');
    const downloadEl = modalEl.querySelector('#iconModalDownload');

    modalEl.addEventListener('show.bs.modal', function (event) {
        const crate = (event.relatedTarget instanceof Element)
        ? event.relatedTarget.closest('.icon_crate[data-bs-target="#iconModal"]')
        : null;
        if (!crate) return;

        const title   = crate.dataset.title   || '';
        const faName  = crate.dataset.faName  || '';
        const style   = crate.dataset.style   || '';
        const unicode = crate.dataset.unicode || '';
        const cats    = crate.dataset.categories || '';
        const role    = crate.dataset.role   || '';
        const svgUrl  = crate.dataset.svg    || '';

        // Title
        const labelEl = modalEl.querySelector('#iconModalLabel');
        if (labelEl) labelEl.textContent = title;

        // Preview icon
        const preview = modalEl.querySelector('#iconModalPreview');
        if (preview) {
        preview.className = '';
        preview.classList.add(`fa-${style}`, `fa-${faName}`);
        preview.setAttribute('aria-hidden', 'true');
        }

        // Details
        const faEl   = modalEl.querySelector('#iconModalFA');
        const uniEl  = modalEl.querySelector('#iconModalUnicode');
        const catEl  = modalEl.querySelector('#iconModalCategories');
        const styEl  = modalEl.querySelector('#iconModalStyle');
        const roleEl = modalEl.querySelector('#iconModalRole');

        if (faEl)  faEl.textContent  = faName || '—';
        if (uniEl) uniEl.textContent = unicode || '—';
        if (catEl) catEl.textContent = cats || '—';
        if (styEl) styEl.textContent = style || '—';

        if (roleEl) {
        if (role) {
            roleEl.textContent = role;
            roleEl.classList.remove('d-none');
        } else {
            roleEl.classList.add('d-none');
        }
        }

        // Code snippet
        const codeEl = modalEl.querySelector('#iconModalCode');
        if (codeEl) {
        codeEl.textContent = `<i class="fa-${style} fa-${faName}"></i>`;
        }

        // Footer visibility + download wiring
        if (footerEl) {
        footerEl.classList.toggle('d-none', !svgUrl);
        }
        if (downloadEl) {
        if (svgUrl) {
            downloadEl.onclick = async function () {
            const filename = `${(faName || title || 'icon').trim().toLowerCase().replace(/\s+/g, '-')}.svg`;

            // Try to fetch and force the filename (works with same-origin or CORS-enabled files)
            try {
                const res = await fetch(svgUrl, { mode: 'cors' });
                if (!res.ok) throw new Error('Fetch failed');
                const blob = await res.blob();
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            } catch (err) {
                // Fallback: direct link (filename may be controlled by server/browser)
                const a = document.createElement('a');
                a.href = svgUrl;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            };
        } else {
            downloadEl.onclick = null;
        }
        }
    });
});


// Menu selectable active class _____________________________________________________
(() => {
    // Utility: apply .active to the label that points at an input (by id)
    function setLabelActiveByInput(input, isActive) {
        if (!input || !input.id) return;
        const label = document.querySelector(`label.menu-item[for="${input.id}"]`);
        if (label) label.classList.toggle('active', !!isActive);
    }

    // Update .active classes when a single input changes
    function updateForInput(input) {
        if (!(input instanceof HTMLInputElement)) return;

        if (input.type === 'radio') {
        // Clear/set active across the whole radio group (same name)
        const name = input.name;
        if (!name) return;
        const group = document.querySelectorAll(
            `input.submenu-item-selectable[type="radio"][name="${CSS && CSS.escape ? CSS.escape(name) : name}"]`
        );
        group.forEach(r => setLabelActiveByInput(r, r.checked));
        } else if (input.type === 'checkbox') {
        setLabelActiveByInput(input, input.checked);
        }
    }

    // Initial sync for any pre-checked inputs
    document.querySelectorAll('input.submenu-item-selectable').forEach(updateForInput);

    // Event delegation: catch changes from any submenu selectable input
    document.addEventListener('change', (e) => {
        const input = e.target.closest('input.submenu-item-selectable');
        if (!input) return;
        updateForInput(input);
    });
})();


// Menu aria sync ___________________________________________________________________
document.addEventListener('DOMContentLoaded', () => {
    const esc = (s) => (window.CSS && CSS.escape) ? CSS.escape(s) : String(s).replace(/[^a-z0-9_\-]/gi,'_');
    const uid = (p) => `${p}-${Math.random().toString(36).slice(2,8)}`;
    const ensureId = (el, p) => (el.id ||= uid(p));

    // --- Top-level menu: aria-expanded mirrors .show on .menu-panel ---
    document.querySelectorAll('.menu').forEach(menu => {
        const panel  = menu.querySelector('.menu-panel');
        const toggle = menu.querySelector('.menu-toggle');
        if (!panel || !toggle) return;

        toggle.setAttribute('aria-controls', ensureId(panel, 'menu-panel'));
        const syncTop = () => toggle.setAttribute('aria-expanded', panel.classList.contains('show') ? 'true' : 'false');
        syncTop();
        new MutationObserver(syncTop).observe(panel, { attributes: true, attributeFilter: ['class'] });
    });

    // --- Submenus: reflect open state (hover/focus) + link toggle->submenu via aria-controls ---
    document.querySelectorAll('.menu-body > li').forEach(li => {
        const toggle  = li.querySelector(':scope > .submenu-toggle');
        const submenu = li.querySelector(':scope > .submenu');
        if (!toggle || !submenu) return;

        toggle.setAttribute('aria-controls', ensureId(submenu, 'submenu'));
        toggle.setAttribute('aria-expanded', submenu.classList.contains('show') ? 'true' : 'false');

        const setOpen  = () => toggle.setAttribute('aria-expanded', 'true');
        const setClose = () => toggle.setAttribute('aria-expanded', 'false');

        li.addEventListener('mouseenter', setOpen);
        li.addEventListener('mouseleave', setClose);
        li.addEventListener('focusin',  setOpen);
        li.addEventListener('focusout', (e) => { if (!li.contains(e.relatedTarget)) setClose(); });
    });

    // --- Selectable submenu items: keep aria-checked + .active in sync ---
    function syncSelectable(input) {
        const label = document.querySelector(`label.menu-item[for="${input.id}"]`);
        if (!label) return;

        // ensure role on label
        if (!label.hasAttribute('role')) {
        label.setAttribute('role', input.type === 'radio' ? 'menuitemradio' : 'menuitemcheckbox');
        }

        if (input.type === 'checkbox') {
        label.setAttribute('aria-checked', input.checked ? 'true' : 'false');
        label.classList.toggle('active', input.checked);
        return;
        }

        // radio: update whole group
        if (input.type === 'radio') {
        const name = input.name || uid('radio');
        document.querySelectorAll(`input.submenu-item-selectable[type="radio"][name="${esc(name)}"]`).forEach(r => {
            const l = document.querySelector(`label.menu-item[for="${r.id}"]`);
            if (l) {
            l.setAttribute('aria-checked', r.checked ? 'true' : 'false');
            l.classList.toggle('active', r.checked);
            }
        });
        }
    }

    // Ensure inputs have ids, then initial sync
    document.querySelectorAll('input.submenu-item-selectable').forEach(input => {
        if (!input.id) input.id = uid('sel');
        syncSelectable(input);
    });

    // React to user changes (mouse or keyboard)
    document.addEventListener('change', (e) => {
        const input = e.target.closest('input.submenu-item-selectable');
        if (input) syncSelectable(input);
    });

    // If labels are focusable and used with Enter/Space, re-sync on key press too
    document.addEventListener('keydown', (e) => {
        const label = e.target.closest('label.menu-item[for]');
        if (!label) return;
        if (e.key === 'Enter' || e.key === ' ') {
        // wait for the browser/your other handlers to toggle the input, then sync
        requestAnimationFrame(() => {
            const input = document.getElementById(label.getAttribute('for'));
            if (input) syncSelectable(input);
        });
        }
    });
});


// Make the menu at least the same width as the menu-toggle _________________________
// Ensure this runs after Bootstrap JS is loaded
(function () {
    function setMinWidth(toggle) {
        // Get Bootstrap dropdown instance and its menu element
        const dd = bootstrap.Dropdown.getOrCreateInstance(toggle);
        const menu = dd?._menu
        || document.getElementById(toggle.getAttribute('aria-controls'))
        || toggle.nextElementSibling;

        if (!menu) return;
        const w = Math.ceil(toggle.getBoundingClientRect().width);
        menu.style.minWidth = w + 'px';
    }

    // Before/after show to catch both initial and final layout
    document.addEventListener('show.bs.dropdown',  e => setMinWidth(e.target));
    document.addEventListener('shown.bs.dropdown', e => setMinWidth(e.target));

    // Keep width in sync while open (e.g., on resize)
    window.addEventListener('resize', () => {
        document.querySelectorAll('[data-bs-toggle="dropdown"][aria-expanded="true"]')
        .forEach(setMinWidth);
    });
})();



// Prevent tooltips scroll to top of page on click __________________________________
// delegated handler — runs for current and future nodes
$(document).on('click', 'a[data-bs-toggle="tooltip"][href="#"]', function (e) {
  e.preventDefault(); // stop jump-to-top
  // keep any other behaviour (e.g. bootstrap tooltip) intact
});



// Sticky page nav __________________________________________________________________
jQuery(function($){
    var $nav = $('#page_nav');
    if (!$nav.length) return;

    var headerHeight = parseInt($nav.data('sticky-offset')) || 0;
    var start = 0;
    var ticking = false;

    // Function to recalc the trigger point
    function updateTrigger() {
        // offset().top relative to document
        start = $nav.offset().top - headerHeight;
    }

    function onScroll() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= start) {
            if (!$nav.hasClass('is-stuck')) $nav.addClass('is-stuck');
        } else {
            if ($nav.hasClass('is-stuck')) $nav.removeClass('is-stuck');
        }
    }

    // Run once after DOM ready
    updateTrigger();
    onScroll();

    // Throttle scroll events for performance
    $(window).on('scroll', function(){
        if (!ticking) {
            window.requestAnimationFrame(function(){
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Recalc on resize and after everything loads
    $(window).on('resize load', function(){
        updateTrigger();
        onScroll();
    });
});



// Collapse sidebar ______________________________________________________________
$('#sidebar .menu-btn, #sidebar .btn-search').click(function(){

    if($(this).parents('#sidebar').hasClass('collapsed')) {
        $(this).parents('#sidebar').removeClass('collapsed');
        if ($(this).parents('#sidebar').hasClass('submenu-open')){
        $('.nav-item .submenu_toggle').addClass('collapsed').attr('aria-expanded', 'false');
        }
    } else {
        $(this).parents('#sidebar').addClass('collapsed');
        $('.nav-item .submenu_toggle').addClass('collapsed');
    }

    if($(this).parents('#sidebar').hasClass('submenu-open')) {
        $(this).parents('#sidebar').removeClass('submenu-open');
    }

    $('.sub-menu.show').removeClass('show');
    $('.nav-item .submenu_toggle').removeClass('active');

    });

    // $('#sidebar .submenu_toggle').click(function(){
    //   if(!$('.submenu_toggle').hasClass('collapsed')){
    //     $(this).parents('#sidebar').removeClass('collapsed');
    //   }
    // });

    $('#sidebar .search_btn').click(function(){
    $(this).parents('#sidebar').removeClass('collapsed');
    $(this).parents('#sidebar').promise().done(function(){
        $('#sidebar .search input').focus();
    });
});

// Sidebar submenus ______________________________________________________________
$('#sidebar .submenu_toggle').click(function(){
    var was_open = localStorage.getItem('menu_was_open');

    if(!$('#sidebar .submenu_toggle').hasClass('active')) {
        if(!$('#sidebar').hasClass('collapsed')) {
            localStorage.setItem('menu_was_open', 'yes');
        } else {
            localStorage.setItem('menu_was_open', 'no');
        }
    }

    if($(this).parents('#sidebar').hasClass('submenu-open')) {

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).addClass('collapsed').attr('aria-expanded', 'false');

            if (was_open == 'yes'){
                $(this).parents('#sidebar').removeClass('collapsed submenu-open');
            } else if(was_open == 'no'){
                $(this).parents('#sidebar').removeClass('submenu-open');
            }

        } else {
            $('#sidebar .submenu_toggle').removeClass('active');
            $(this).removeClass('collapsed').attr('aria-expanded', 'true');
            $(this).addClass('active');
        }


    } else {

        $(this).parents('#sidebar').addClass('collapsed submenu-open');
        $(this).removeClass('collapsed').attr('aria-expanded', 'true');
        $(this).addClass('active');
    }
});



$('.submenu_close').click(function(){
    var was_open = localStorage.getItem('menu_was_open');

    $('#sidebar .submenu_toggle').removeClass('active');

    if($(this).parents('#sidebar').hasClass('submenu-open')) {

        if (was_open == 'yes'){
            $(this).parents('#sidebar').removeClass('collapsed submenu-open');
        } else if(was_open == 'no'){
            $(this).parents('#sidebar').removeClass('submenu-open');
        }

        $(this).removeClass('active');
        $(this).addClass('collapsed').attr('aria-expanded', 'false');

    } else {

        $(this).parents('#sidebar').addClass('collapsed submenu-open');
        $(this).removeClass('collapsed').attr('aria-expanded', 'true');
        $(this).addClass('active');

    }

});


// Sidebar: Open current submenu on page load ___________________________________
$(document).ready(function() {
    const $sidebar = $('#sidebar');
    const $currentItem = $sidebar.find('.current-menu-item');
    const $ancestor = $currentItem.closest('.menu-item-has-children');

    if ($currentItem.length && $ancestor.length) {
        // 1️⃣ Sidebar should match visual state:
        // collapsed width, but submenu panel open
        $sidebar.addClass('collapsed submenu-open');

        // 2️⃣ Find submenu toggle and submenu
        const $toggle = $ancestor.children('.submenu_toggle');
        const $submenu = $ancestor.children('.sub-menu');

        // 3️⃣ Apply all necessary classes and aria attributes
        $ancestor
            .addClass('current-menu-ancestor current-menu-parent')
            .removeClass('collapsed');

        $toggle
            .addClass('active')
            .removeClass('collapsed')
            .attr('aria-expanded', 'true');

        $submenu
            .addClass('show')
            .find('.submenu_close')
            .removeClass('collapsed')
            .attr('aria-expanded', 'true');

        // 4️⃣ Highlight the current item
        $currentItem.children('a').addClass('active');

        // 5️⃣ Optional scroll into view for long menus
        const sidebarBody = $sidebar.find('.sidebar_body');
        if (sidebarBody.length) {
            const offsetTop = $currentItem.position().top;
            const viewHeight = sidebarBody.height();
            if (offsetTop > viewHeight * 0.75) {
                sidebarBody.animate({ scrollTop: offsetTop - viewHeight / 3 }, 400);
            }
        }
    }
});





// Slider ________________________________________________________________________
document.addEventListener('DOMContentLoaded', () => {
    // Select all sliders on the page (in case there are multiple)
    const sliders = document.querySelectorAll('.form-slider');

    sliders.forEach(slider => {
        const container = slider.closest('.slider-container');
        const numberInput = container.querySelector('.form-control');

        // Function to update slider gradient fill
        const updateSliderBackground = () => {
            const min = parseFloat(slider.min) || 0;
            const max = parseFloat(slider.max) || 100;
            const val = ((slider.value - min) / (max - min)) * 100;
            slider.style.backgroundImage = `linear-gradient(to right, var(--form-slider-filled-background) 0%, var(--form-slider-filled-background) ${val}%, transparent ${val}%, transparent 100%)`;
        };

        // Initial update (in case slider loads with a preset value)
        updateSliderBackground();

        // When the slider moves...
        slider.addEventListener('input', () => {
            updateSliderBackground();
            if (numberInput) {
                numberInput.value = slider.value;
            }
        });

        // If there's a number input, sync back when it's typed in
        if (numberInput) {
            numberInput.addEventListener('input', () => {
                slider.value = numberInput.value;
                updateSliderBackground();
            });
        }
    });
});



// Copy anchor link urls ________________________________________________________
document.addEventListener('DOMContentLoaded', () => {
    // --- FLIP helpers --------------------------------------------------------
    function getToastPositions(container) {
        const positions = new Map();
        container.querySelectorAll('.toast').forEach(el => {
            const rect = el.getBoundingClientRect();
            positions.set(el, rect.top);
        });
        return positions;
    }

    function playReorderAnimation(container, prevPositions) {
        if (!prevPositions) return;

        container.querySelectorAll('.toast').forEach(el => {
            const prevTop = prevPositions.get(el);
            if (prevTop == null) return;

            const rect = el.getBoundingClientRect();
            const newTop = rect.top;
            const dy = prevTop - newTop; // FLIP: old - new

            if (!dy) return;

            // Start visually from the old position
            el.style.transform = `translateY(${dy}px)`;

            requestAnimationFrame(() => {
                // Animate into the new position (CSS handles transition)
                el.style.transform = '';
            });
        });
    }

    // --- Find or create the real toast container ----------------------------
    function getRealToastContainer() {
        // Find a toast-container that is NOT an example
        let container = Array.from(document.querySelectorAll('.toast-container'))
            .find(c => !c.classList.contains('toast-examples'));

        // If none found (or only examples exist), create a new one
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        return container;
    }

    // --- Show toast ----------------------------------------------------------
    function showToast(message, type = 'success') {
        const container = getRealToastContainer();

        // BEFORE insert
        const prevPositions = getToastPositions(container);

        const toastEl = document.createElement('div');
        toastEl.className = `toast fade toast-${type}`;
        toastEl.setAttribute('role', 'alert');
        toastEl.setAttribute('aria-live', 'assertive');
        toastEl.setAttribute('aria-atomic', 'true');
        toastEl.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">
                    <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                </span>
                <div class="toast-body">
                    <div class="toast-message">
                        <h6>${message}</h6>
                    </div>
                </div>
            </div>
        `;

        // Newest toast at the TOP
        container.insertBefore(toastEl, container.firstChild);

        // AFTER layout changes, animate to new positions
        requestAnimationFrame(() => {
            playReorderAnimation(container, prevPositions);
        });

        const bsToast = new bootstrap.Toast(toastEl, {
            autohide: true,
            delay: 5000
        });

        toastEl.addEventListener('hidden.bs.toast', () => {
            const prevPositionsOnHide = getToastPositions(container);

            toastEl.remove();

            requestAnimationFrame(() => {
                playReorderAnimation(container, prevPositionsOnHide);
            });
        });

        bsToast.show();
    }

    // --- Anchor link click handler ------------------------------------------
    document.querySelectorAll('.anchor-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const baseUrl = window.location.href.split('#')[0];
            const hash = this.getAttribute('href').startsWith('#')
                ? this.getAttribute('href')
                : '#' + this.getAttribute('href');

            const fullUrl = baseUrl + hash;

            const textarea = document.createElement('textarea');
            textarea.value = fullUrl;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Copy failed:', err);
            }
            document.body.removeChild(textarea);

            showToast('URL copied');
        });
    });
});



// Scrollable tabs ______________________________________________________________
document.addEventListener('DOMContentLoaded', function () {
    const tabContainers = document.querySelectorAll('.tab-items');

    tabContainers.forEach(function (container) {
        const scroller = container.querySelector('.tab-items-scroll');
        const btnLeft  = container.querySelector('.tab-scroll-left');
        const btnRight = container.querySelector('.tab-scroll-right');

        if (!scroller || !btnLeft || !btnRight) return;

        function updateButtons() {
        const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;

        // Is there any overflow at all?
        const hasOverflow = maxScrollLeft > 0;
        container.classList.toggle('has-overflow', hasOverflow);

        // Left side overflow?
        const atStart = scroller.scrollLeft <= 0;
        // Right side overflow?
        const atEnd   = scroller.scrollLeft >= maxScrollLeft - 1;

        btnLeft.disabled  = atStart;
        btnRight.disabled = atEnd;
        }

        function scrollByAmount(direction) {
        const amount = scroller.clientWidth * 0.6; // 60% of visible width
        scroller.scrollBy({
            left: direction * amount,
            behavior: 'smooth'
        });
        }

        btnLeft.addEventListener('click', function () {
        scrollByAmount(-1);
        });

        btnRight.addEventListener('click', function () {
        scrollByAmount(1);
        });

        scroller.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);

        // Initial state
        updateButtons();
    });
});




// Key-value column width _______________________________________________________
function alignKeyValueLists(selector = '.key-value-list-aligned', maxPx = 260) {
    document.querySelectorAll(selector).forEach(list => {
        const keys = list.querySelectorAll('.key-value .key');
        if (!keys.length) return;

        // reset to measure natural widths
        list.style.removeProperty('--keyvalue-col');

        let widest = 0;
        keys.forEach(k => {
        widest = Math.max(widest, k.getBoundingClientRect().width);
        });

        widest = Math.min(Math.ceil(widest), maxPx);
        list.style.setProperty('--keyvalue-col', `${widest}px`);
    });
}

const run = () => alignKeyValueLists();

window.addEventListener('load', run);
window.addEventListener('resize', () => {
  // basic debounce
    clearTimeout(window.__kvResize);
    window.__kvResize = setTimeout(run, 100);
});


// Key-value column width _______________________________________________________
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".trigger-question").forEach((triggerQuestion) => {
        const responseGroup = triggerQuestion.querySelector(".response-btn-input");
        const yesInput = responseGroup?.querySelector('input[id$="-yes"]');
        const nestedInputs = triggerQuestion.nextElementSibling;

        if (
        !responseGroup ||
        !yesInput ||
        !nestedInputs ||
        !nestedInputs.classList.contains("nested-inputs")
        ) {
        return;
        }

        function toggleNestedInputs() {
        nestedInputs.style.display = yesInput.checked ? "flex" : "none";
        }

        // Select yes by default
        yesInput.checked = true;

        // Set initial visibility
        toggleNestedInputs();

        // Update on radio change
        responseGroup.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.addEventListener("change", toggleNestedInputs);
        });
    });
});