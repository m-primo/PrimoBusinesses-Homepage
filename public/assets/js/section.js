function LoadSections() {
    var index = addSection('Top Featured Websites');
    addLink(index, 'https://primo-businesses.blogspot.com', 'Primo Businesses', 'The Main Website', INACTIVE_BADGE);
    addLink(index, 'https://primodpd.blogspot.com', 'Primo DPD', 'My Portfolio', true);
    addLink(index, 'https://primo-personal.blogspot.com', 'Primo Personal Blog', 'My Personal Blog', true);
    addLink(index, 'https://primowarehouse.blogspot.com', 'Primo Warehouse', 'My Online Digital Store');
    addLink(index, 'https://mp-primo.blogspot.com', 'MP Holding Group', 'Blog/News/Articles/Profiles/more');

    index = addSection('Featured Links');
    addLink(index, 'https://mp-primo.blogspot.com/primo', 'Primo Profile', 'My Online Profile', true);
    addLink(index, 'https://github.com/m-primo', 'GitHub Profile', 'My GitHub Profile', true);
    addLink(index, 'https://primo-businesses.blogspot.com/blog', 'Blog 2', 'A blog for my projects', NEW_BADGE);

    index = addSection('Featured Products Websites');
    addLink(index, 'https://mp-primo.blogspot.com/games', 'Games', 'Published Games', true);
    addLink(index, 'https://mp-primo.blogspot.com/programs', 'Software', 'Published Software', true);
    addLink(index, 'https://mp-primo.blogspot.com/p/sites.html', 'Websites', 'Some of my Published Websites', OLD_BADGE);
    addLink(index, 'https://pws-apps.blogspot.com', 'PWS Apps', 'Mobile Applications', OLD_BADGE);

    index = addSection('Social Media');
    addLink(index, 'https://www.facebook.com/PrimoBusinesses', 'Facebook Page', 'Business Facebook Page');
    addLink(index, 'https://www.linkedin.com/company/primo-businesses', 'LinkedIn Page', 'Business LinkedIn Page');

    index = addSection('Stores');
    addLink(index, 'https://primogames.itch.io', 'ItchIo', 'My ItchIo Profile');
    addLink(index, 'https://gumroad.com/mojetbeet', 'Gumroad', 'My Gumroad Store');

    index = addSection('Contact Me');
    addLink(index, 'mailto:mpholdinggroup@gmail.com', 'Business Email', 'mpholdinggroup@gmail.com', true);
    addLink(index, 'mailto:admin@primo.business', 'Email', 'admin@primo.business', NEW_BADGE);
    addLink(index, 'mailto:mahammadprimo@gmail.com', 'Personal Email', 'mahammadprimo@gmail.com');
    addLink(index, 'mailto:primo-universe@protonmail.com', 'Encrypted Email', 'primo-universe@protonmail.com');
    addLink(index, 'mailto:primodevops@gmail.com', 'Office Email', 'primodevops@gmail.com', true);
    addLink(index, 'https://mp-primo.blogspot.com/p/contact.html?about=Primo_Homepage', 'Contact Form', 'Just enter your email and message');
}