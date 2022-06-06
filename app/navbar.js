let navlinks = $('.navbar-nav .nav-link')
navlinks.click((ev) => {
    const curr_link = `./component/${$(ev.target).attr('data-component')}.html`
    if ($(ev.target).attr('data-component') == 'titlename') {
        $('#content').load(curr_link)
    }
    else{
        $('#content').load(curr_link)
    }
})
