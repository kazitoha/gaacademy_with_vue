(self.webpackChunk=self.webpackChunk||[]).push([[5e3],{3453:(t,i,n)=>{"use strict";n.d(i,{Z:()=>o});var e=n(3645),a=n.n(e)()((function(t){return t[1]}));a.push([t.id,".card-header svg[data-v-68f56823]{width:30px;cursor:pointer}.notification_item .mb[data-v-68f56823]{margin-bottom:10px}.notification_item h2[data-v-68f56823]{font-weight:900;margin-bottom:0}.notification_item small[data-v-68f56823]{margin-left:15px;margin-top:2px}.notification_item hr[data-v-68f56823]{margin:1rem 0}",""]);const o=a},5e3:(t,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>v});var e=n(7757),a=n.n(e);function o(t,i,n,e,a,o,r){try{var c=t[o](r),s=c.value}catch(t){return void n(t)}c.done?i(s):Promise.resolve(s).then(e,a)}function r(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,e)}return n}function c(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}const s={created:function(){this.$store.dispatch("notification/fetchNotifications")},computed:function(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){c(t,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))}))}return t}({},(0,n(629).Se)({notifications:"notification/getNotifications",unread:"notification/getUnreadNotifications"})),methods:{fetchNewNotification:function(){this.$store.dispatch("notification/fetchNotifications")},markallread:function(){var t,i=this;return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.notifications.length&&(i.$store.dispatch("notification/markAllReadNotifications"),i.$store.commit("notification/SET_NOTIFICATIONS_READ"));case 1:case"end":return t.stop()}}),t)})),function(){var i=this,n=arguments;return new Promise((function(e,a){var r=t.apply(i,n);function c(t){o(r,e,a,c,s,"next",t)}function s(t){o(r,e,a,c,s,"throw",t)}c(void 0)}))})()}}};var f=n(3379),l=n.n(f),d=n(3453),u={insert:"head",singleton:!1};l()(d.Z,u);d.Z.locals;const v=(0,n(1900).Z)(s,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header d-flex justify-content-between"},[n("h3",[t._v("\n            "+t._s(t.$t("notifications"))+"\n            "),t.unread?n("span",{staticClass:"badge badge-pill bg-danger"},[t._v(t._s(t.unread))]):t._e()]),t._v(" "),n("div",[n("a",{staticClass:"text-underline mr-10",attrs:{href:"#"},on:{click:t.markallread}},[t._v("\n                "+t._s(t.$t("mark_all_as_read"))+"\n            ")]),t._v(" "),n("span",{on:{click:function(i){return t.fetchNewNotification()}}},[n("icon-sync")],1)])]),t._v(" "),n("div",{staticClass:"card-body"},[t.notifications&&t.notifications.length?t._l(t.notifications,(function(i,e){return n("div",{key:i.id,staticClass:"notification_item"},[n("div",{staticClass:"d-flex justify-content-start align-items-center mb"},[n("h2",{staticClass:"text-purple"},[t._v(t._s(i.data.sender.name))]),t._v(" "),n("small",[t._v(t._s(t.timeFromNow(i.created_at)))])]),t._v(" "),n("h3",[t._v(t._s(i.data.subject))]),t._v(" "),n("p",{staticClass:"text-muted",domProps:{innerHTML:t._s(i.data.body)}}),t._v(" "),e+1!=t.notifications.length?n("hr"):t._e()])})):n("div",{staticClass:"text-center my-4"},[n("icon-big-bell"),t._v(" "),n("h3",{staticClass:"mt-3"},[t._v(t._s(t.$t("no_notifications_found"))+"!")])],1)],2)])}),[],!1,null,"68f56823",null).exports}}]);