$(document).ready(function(){

  function loadTextile(path, options) {
    if (!options) {
      options = {push: true}
    }
    if (!path || path === "") {
      path = "index"
    } else if (path.slice(0,3) == "#!/") {
      path = path.substr(3)
    }
    path = path.replace(/\//gi, '')
    console.log("path: ", path)

    var url = path + ".textile";
    $.ajax({
      url: url,
    }).done( function(data) {

      if (options.push) {
        var bang_path = '#!/' + path;
        if (typeof(window.history.pushState) == 'function') {
          window.history.pushState({path: path}, bang_path, bang_path);
        } else {
          window.location.hash = bang_path;
        }
      }

      var html = textile(data)
      $("#content").html(html)
      $("#content a").each(function (){
        console.log("content a",  this);
        var $this = $(this);
        var href = $this.attr("href");
        // alredy #!
        if (href.slice(0,2) == "#!" ) {
          return;
        }
        // external
        if (this.hostname != window.location.hostname) {
          return;
        };
        // console.log("  a.href", href, " this.pathname", this.pathname)
        this.pathname = window.location.pathname;
        this.hash = "#!" + href;
      })
    })
  }

    loadTextile(window.location.hash)

    $('#content').on("click", "a", function(e) {
      console.log("event ", e);
      // external link
      if (e.target.hostname != window.location.hostname) {
        // do nothing
        return;
      }
      // not a left click or key modificators
      if (e.which != 0 || e.metaKey || e.ctrlKey ) {
        return;
      }
      var path = e.target.pathname;
      if (e.target.hostname === window.location.hostname && e.target.pathname === window.location.pathname) {
        path = e.target.hash;
      }
      e.preventDefault();
      loadTextile(path)
    })

    //Pop State
    $(window).on('popstate', function(e){
        var state = e.originalEvent.state;
        if(e.originalEvent && state){
          var path = state.path;
          loadTextile(path, {push: false});
        }
    });
})
