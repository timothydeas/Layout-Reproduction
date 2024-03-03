// alternative javascript snippet 'hide story' option for future reference:
// ...
// function hidestory (el, id) {
//     for (var i=0; i < 3; i++) { remEl($(id).nextSibling) }
//     remEl($(id));
//     fixranks();
//     var next = (onop() == 'newest' && morenext()) ? ('&next=' + morenext()) : '';
//     var url = el.href.replace('hide', 'snip-story').replace('goto', 'onop');
//     fetch(url + next).then(r => r.json()).then(newstory);
//   }
//  ...
