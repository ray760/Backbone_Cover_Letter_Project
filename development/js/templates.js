this["RAYROB"] = this["RAYROB"] || {};
this["RAYROB"]["templates"] = this["RAYROB"]["templates"] || {};
this["RAYROB"]["templates"]["bold"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<b>BOLD TEMPLATE</b>";
},"useData":true});
this["RAYROB"]["templates"]["intro"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"col-sm-12 col-sm-12\"><h1>Meet "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.first : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.last : stack1), depth0))
    + " - Front End Developer</h1></div>\n\n<div class=\"col-sm-12\">\n  <img src=\"imgs/ray-robertson-front-end-developer.jpg\" class=\"ray-image img-rounded img-responsive pull-left\"/>\n\n  <p>Hi Tenable,</p>\n  <p>\n    My name is Ray Robertson and I’m a Front End Web Developer at CTACorp.com. Over the last couple of years I’ve been building Front End website backed by the HHS Media Service API <a href="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.hhsApi : stack1), depth0))
    + " target=\"_blank\">(https://api.digitalmedia.hhs.gov/)</a> and had the opportunity to employ various Font End tools along the way to make the development process and workflow a lot more streamlined. I enjoy reading up on new developments in the Front End space and learning about ways to improve as a Front End Developer. When I’m not delving into web tech, I’m hanging out with my wife and two boys and enjoying them as they grow up. So what is this all about?\n  </p>\n\n  <img src=\"imgs/tenable-ascii.png\" class=\"tenable-image img-responsive pull-right\"/>\n\n  <p>\n    Well I was checking out the tenable website and I saw something I didn’t see before…I saw an opportunity. You at Tenable spoke to me directly and said, “If you’re looking at this, we want to hire you.” Yes, I took a look at your websites source in Chromes Dev Tools and there it was, so I visited the Tenable careers page and saw the User Interface Developer position and thought this was a good fit for me and they did say they wanted to hire me.  The next step was for me to not only mention that I’ve been working with a lot of the technologies that are listed in the job description, but to build this project using a lot of the technologies and walkthrough how I put it together and share the code for you to review.Jason has been involved in the theme game since the beginning. Hope you enjoy the interview!\n  </p>\n\n  <p>\n    I’m certain that this position comes with a plethora of challenges and I questioned as to whether I even wanted give this a shot, but in the end it came back to what I saw in the Tenable sites source code, “If you’re looking at this, we want to hire you.” Well I want this too, so the feeling is mutual.Please click on the hamburger menu and let me walk you through the process I took to build this site, what tools I used and where you can find this repo on gitHub. If you’ve made it this far then I guess I’ve said and done some of the right things already.\n  </p>\n\n  <p>Ray Robertson</p>\n</div>\n";
},"useData":true});
this["RAYROB"]["templates"]["navigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.first : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.last : stack1), depth0))
    + "</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\">Intro</a></li>\n        <li><a href=\"#\">Why Me</a></li>\n        <li><a href=\"#\">Let's Talk</a></li>\n      </ul>\n    </div>\n  </div>\n";
},"useData":true});
this["RAYROB"]["templates"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<label for=\"sidebartoggler\" class=\"toggle\">\n  <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.first : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.last : stack1), depth0))
    + "</span>\n</label>\n\n<div class=\"sidebar\">\n  <ul>\n    <li>Hi, I'm Ray.</li>\n    <li>Site Walkthrough.</li>\n    <li>Let's Talk</li>\n  </ul>\n</div>";
},"useData":true});