function LoadSections() {
    var index = addSection('⭐ Top Featured Websites ⭐');
    addLink(index, 'https://portfolio.primo.business', 'Portfolio', 'My Portfolio', true);
    addLink(index, 'https://personal-blog.primo.business', 'Personal Blog', 'My Personal Blog', NEW_BADGE);
    // addLink(index, 'https://store.primo.business', 'Primo Warehouse', 'My Online Digital Store');

    index = addSection('💫 Featured Links 💫');
    addLink(index, 'https://mp-primo.blogspot.com/primo', 'Primo Profile', 'My Online Profile', true);
    addLink(index, 'https://github.com/m-primo', 'GitHub Profile', 'My GitHub Profile', true);
    addLink(index, 'https://primo-businesses.blogspot.com/blog', 'Yearly Projects Blog', 'A blog for my yearly projects', NEW_BADGE);

    index = addSection('🏪 Featured Products Websites 🏪');
    addLink(index, 'https://mp-primo.blogspot.com/games', 'Games', 'Published Video Games');
    addLink(index, 'https://mp-primo.blogspot.com/programs', 'Programs', 'Published Desktop Applications');

    index = addSection('🌐 Social Media 🌐');
    addLink(index, 'https://www.facebook.com/PrimoBusinesses', 'Facebook Page', 'Business Facebook Page');
    addLink(index, 'https://www.linkedin.com/company/primo-businesses', 'LinkedIn Page', 'Business LinkedIn Page');

    index = addSection('🛒 Marketplace 🛒');
    addLink(index, 'https://primogames.itch.io', 'ItchIo', 'My ItchIo Profile');
    addLink(index, 'https://mojetbeet.gumroad.com', 'Gumroad', 'My Gumroad Store');
    addLink(index, 'https://www.codester.com/primo/', 'Codester', 'My Codester Profile', NEW_BADGE);

    index = addSection('📧 Contact Me 📧');
    addLink(index, 'mailto:primodevops@gmail.com', 'Office Email', 'primodevops@gmail.com');
    addLink(index, 'https://mp-primo.blogspot.com/p/contact.html?about=Primo_Homepage', 'Contact Form', 'Just enter your email and message');
}