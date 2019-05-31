function selectAll() {
    var items = document.getElementsByName('acs');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox')
            items[i].checked = true;
    }
}

function UnSelectAll() {
    var items = document.getElementsByName('acs');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox')
            items[i].checked = false;
    }
}


function SetAddress() {
    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', 'https://formspree.io/' + 'NRGNLST' + '@' + 'protonmail' + '.' + 'com');
    // return 'action', 'https://formspree.io/' + 'NRGNLST' + '@' + 'protonmail' + '.' + 'com'
}
