// ===== CONTACT FORM HANDLER =====
    // Function: handleContactSubmit()
    // Purpose: Validate enquiry form and create a simple mailto-style contact action
    // Triggers: Form submit on the enquiry section
    document.getElementById('contact-form').addEventListener('submit', function handleContactSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const fullName = document.getElementById('full_name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const matter = document.getElementById('legal_matter').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!fullName || !phone || !matter) {
        alert('Please complete your name, phone number, and legal matter.');
        return;
      }

      const subject = encodeURIComponent(`Enquiry: ${matter}`);
      const body = encodeURIComponent(`Name: ${fullName}\nPhone: ${phone}\nLegal Matter: ${matter}\nMessage: ${message || 'N/A'}`);
      window.location.href = `mailto:info@hamzahsulaimanpartners.com?subject=${subject}&body=${body}`;
      form.reset();
    });