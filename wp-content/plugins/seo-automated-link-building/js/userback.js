Userback = window.Userback || {};
Userback.access_token = '4366|6641|pozfIndkkd2moEpV2Uwy6QmNamxMuQWz6mgwDFA3iU9OXN38yx';
Userback.widget_settings = {
  language: seoAutomatedLinkBuildingUserback.language,
  main_button_text: seoAutomatedLinkBuildingUserback.mainButton,
  rating_help_message: seoAutomatedLinkBuildingUserback.ratingHelp,
};

(function(id) {
  if (document.getElementById(id)) {return;}
  var s = document.createElement('script');
  s.id = id;
  s.async = 1;
  s.src = 'https://static.userback.io/widget/v1.js';
  var parent_node = document.head || document.body;
  parent_node.appendChild(s);
})('userback-sdk');
