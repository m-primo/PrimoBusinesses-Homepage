section_index = 1;
function addSection(section_title) {
    let phtml = '<div id="section-'+section_index+'">';
    phtml += '<div class="row page-intro">';
    phtml += '<div class="col-lg-12">';
    phtml += '<h1>'+section_title;
    phtml += '<small></small>';
    phtml += '</h1>';
    phtml += '<p></p>';
    phtml += '</div>';
    phtml += '</div>';
    phtml += '<div class="section-links row"></div>';
    phtml += '</div>';
    phtml += '<hr>';
    $('#main_content').append(phtml);
    section_index++;
}
function addLink(section_idx, link, title, desc) {
    let phtml = '<article class="col-md-4 article-intro">';
    phtml += '<a href="'+link+'" target="_blank" class="article-product"><span>'+title+'</span></a>';
    phtml += '<h3><a href="'+link+'" target="_blank">'+title+'</a></h3>';
    phtml += '<p>'+desc+'.</p>';
    phtml += '</article>';
    $('#main_content #section-'+section_idx+' .section-links').append(phtml);
}