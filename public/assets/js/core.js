section_index = 1;
function addSection(section_title) {
    const current_index = section_index;
    let phtml = '<section id="section-'+current_index+'">';
    phtml += '<div class="row page-intro">';
    phtml += '<div class="col-lg-12">';
    phtml += '<h2>'+section_title+'</h2>';
    phtml += '</div>';
    phtml += '</div>';
    phtml += '<div class="section-links row"></div>';
    phtml += '</section>';
    $('#main_content').append(phtml);
    section_index++;
    return current_index;
}

function addLink(section_idx, link, title, desc='', is_featured=false) {
    let phtml = '<article class="col-lg-4 col-md-6 col-sm-12 article-intro">';
    if(is_featured !== false) {
        if(is_featured === true) {
            phtml += '<span class="featured featured-badge text-primary"><i class="far fa-star"></i></span>';
        } else if(typeof is_featured === 'object') {
            phtml += '<span class="featured featured-text '+is_featured[1]+'">'+is_featured[0]+'</span>';
        }
    }
    phtml += '<a href="'+link+'" target="_blank" class="article-product"><span>'+title+'</span></a>';
    phtml += '<h3><a href="'+link+'" target="_blank">'+title+'</a></h3>';
    phtml += '<p>'+desc+'</p>';
    phtml += '</article>';
    $('#main_content #section-'+section_idx+' .section-links').append(phtml);
}

const pTitle = 'The Primo Homepage';
const OLD_BADGE = ['OLD', 'text-danger'];
const NEW_BADGE = ['NEW', 'text-success'];
const INACTIVE_BADGE = ['INACTIVE', 'text-warning'];